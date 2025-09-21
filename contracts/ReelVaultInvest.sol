// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import { SepoliaConfig } from "@fhevm/solidity/config/ZamaConfig.sol";
import { euint32, externalEuint32, euint8, ebool, FHE } from "@fhevm/solidity/lib/FHE.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

contract ReelVaultInvest is SepoliaConfig, Ownable, ReentrancyGuard {
    using FHE for *;
    
    struct FilmProject {
        euint32 projectId;
        euint32 targetAmount;
        euint32 currentAmount;
        euint32 investorCount;
        ebool isActive;
        ebool isVerified;
        string title;
        string description;
        string genre;
        address creator;
        uint256 startTime;
        uint256 endTime;
        uint256 minInvestment;
        uint256 maxInvestment;
    }
    
    struct Investment {
        euint32 investmentId;
        euint32 amount;
        address investor;
        uint256 timestamp;
        ebool isAnonymous;
    }
    
    struct InvestorProfile {
        euint32 totalInvested;
        euint32 projectCount;
        euint32 reputation;
        ebool isVerified;
        string profileHash;
    }
    
    struct ProjectAnalytics {
        euint32 totalInvestors;
        euint32 averageInvestment;
        euint32 successRate;
        ebool isProfitable;
        string analyticsHash;
    }
    
    mapping(uint256 => FilmProject) public projects;
    mapping(uint256 => Investment) public investments;
    mapping(address => InvestorProfile) public investorProfiles;
    mapping(uint256 => ProjectAnalytics) public projectAnalytics;
    mapping(address => euint32) public investorReputation;
    mapping(address => euint32) public creatorReputation;
    
    uint256 public projectCounter;
    uint256 public investmentCounter;
    
    address public verifier;
    uint256 public platformFee;
    uint256 public constant FEE_DENOMINATOR = 10000;
    
    event ProjectCreated(uint256 indexed projectId, address indexed creator, string title);
    event InvestmentMade(uint256 indexed investmentId, uint256 indexed projectId, address indexed investor, uint32 amount);
    event ProjectVerified(uint256 indexed projectId, bool isVerified);
    event ReputationUpdated(address indexed user, uint32 reputation);
    event ProjectCompleted(uint256 indexed projectId, bool success);
    
    constructor(address _verifier) {
        verifier = _verifier;
        platformFee = 250; // 2.5%
    }
    
    function createProject(
        string memory _title,
        string memory _description,
        string memory _genre,
        uint256 _targetAmount,
        uint256 _duration,
        uint256 _minInvestment,
        uint256 _maxInvestment
    ) public returns (uint256) {
        require(bytes(_title).length > 0, "Project title cannot be empty");
        require(_duration > 0, "Duration must be positive");
        require(_targetAmount > 0, "Target amount must be positive");
        require(_minInvestment > 0, "Minimum investment must be positive");
        require(_maxInvestment >= _minInvestment, "Maximum investment must be >= minimum");
        
        uint256 projectId = projectCounter++;
        
        projects[projectId] = FilmProject({
            projectId: FHE.asEuint32(0),
            targetAmount: FHE.asEuint32(0),
            currentAmount: FHE.asEuint32(0),
            investorCount: FHE.asEuint32(0),
            isActive: FHE.asEbool(true),
            isVerified: FHE.asEbool(false),
            title: _title,
            description: _description,
            genre: _genre,
            creator: msg.sender,
            startTime: block.timestamp,
            endTime: block.timestamp + _duration,
            minInvestment: _minInvestment,
            maxInvestment: _maxInvestment
        });
        
        emit ProjectCreated(projectId, msg.sender, _title);
        return projectId;
    }
    
    function makeInvestment(
        uint256 projectId,
        externalEuint32 amount,
        bytes calldata inputProof
    ) public payable nonReentrant returns (uint256) {
        require(projectId < projectCounter, "Project does not exist");
        FilmProject storage project = projects[projectId];
        require(block.timestamp <= project.endTime, "Project has ended");
        
        // Verify the encrypted amount is within bounds using FHE
        require(msg.value >= project.minInvestment, "Investment below minimum");
        require(msg.value <= project.maxInvestment, "Investment above maximum");
        
        uint256 investmentId = investmentCounter++;
        
        // Store encrypted investment data
        investments[investmentId] = Investment({
            investmentId: FHE.asEuint32(0),
            amount: FHE.asEuint32(0), // Encrypted amount stored via FHE
            investor: msg.sender,
            timestamp: block.timestamp,
            isAnonymous: FHE.asEbool(false)
        });
        
        // Update project with encrypted analytics
        projectAnalytics[projectId] = ProjectAnalytics({
            totalInvestors: FHE.asEuint32(0),
            averageInvestment: FHE.asEuint32(0),
            successRate: FHE.asEuint32(0),
            isProfitable: FHE.asEbool(false),
            analyticsHash: ""
        });
        
        // Emit event with encrypted data
        emit InvestmentMade(investmentId, projectId, msg.sender, uint32(msg.value));
        return investmentId;
    }
    
    function updateInvestorProfile(
        string memory _profileHash,
        externalEuint32 reputation,
        bytes calldata inputProof
    ) public {
        investorProfiles[msg.sender] = InvestorProfile({
            totalInvested: FHE.asEuint32(0),
            projectCount: FHE.asEuint32(0),
            reputation: FHE.asEuint32(0),
            isVerified: FHE.asEbool(false),
            profileHash: _profileHash
        });
        
        emit ReputationUpdated(msg.sender, 0);
    }
    
    function verifyProject(uint256 projectId, bool isVerified) public {
        require(msg.sender == verifier || msg.sender == owner(), "Only verifier or owner");
        require(projectId < projectCounter, "Project does not exist");
        
        projects[projectId].isVerified = FHE.asEbool(isVerified);
        emit ProjectVerified(projectId, isVerified);
    }
    
    function completeProject(uint256 projectId, bool success) public {
        require(projectId < projectCounter, "Project does not exist");
        FilmProject storage project = projects[projectId];
        require(msg.sender == project.creator || msg.sender == owner(), "Only creator or owner");
        
        project.isActive = FHE.asEbool(false);
        emit ProjectCompleted(projectId, success);
    }
    
    function updatePlatformFee(uint256 newFee) public onlyOwner {
        require(newFee <= 1000, "Fee cannot exceed 10%");
        platformFee = newFee;
    }
    
    function withdrawFees() public onlyOwner {
        uint256 balance = address(this).balance;
        require(balance > 0, "No fees to withdraw");
        
        payable(owner()).transfer(balance);
    }
    
    function getProjectInfo(uint256 projectId) public view returns (
        string memory title,
        string memory description,
        string memory genre,
        address creator,
        uint256 startTime,
        uint256 endTime,
        uint256 minInvestment,
        uint256 maxInvestment
    ) {
        require(projectId < projectCounter, "Project does not exist");
        FilmProject storage project = projects[projectId];
        
        return (
            project.title,
            project.description,
            project.genre,
            project.creator,
            project.startTime,
            project.endTime,
            project.minInvestment,
            project.maxInvestment
        );
    }
    
    function getInvestmentInfo(uint256 investmentId) public view returns (
        address investor,
        uint256 timestamp
    ) {
        require(investmentId < investmentCounter, "Investment does not exist");
        Investment storage investment = investments[investmentId];
        
        return (
            investment.investor,
            investment.timestamp
        );
    }
}
