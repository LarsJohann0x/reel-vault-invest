import { createPublicClient, createWalletClient, http, parseEther } from 'viem';
import { sepolia } from 'wagmi/chains';
import { ReelVaultInvest } from '../contracts/ReelVaultInvest';

// Contract ABI (simplified for demo)
export const contractABI = [
  {
    "inputs": [
      {"name": "_title", "type": "string"},
      {"name": "_description", "type": "string"},
      {"name": "_genre", "type": "string"},
      {"name": "_targetAmount", "type": "uint256"},
      {"name": "_duration", "type": "uint256"},
      {"name": "_minInvestment", "type": "uint256"},
      {"name": "_maxInvestment", "type": "uint256"}
    ],
    "name": "createProject",
    "outputs": [{"name": "", "type": "uint256"}],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {"name": "projectId", "type": "uint256"},
      {"name": "amount", "type": "bytes"},
      {"name": "inputProof", "type": "bytes"}
    ],
    "name": "makeInvestment",
    "outputs": [{"name": "", "type": "uint256"}],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [{"name": "projectId", "type": "uint256"}],
    "name": "getProjectInfo",
    "outputs": [
      {"name": "title", "type": "string"},
      {"name": "description", "type": "string"},
      {"name": "genre", "type": "string"},
      {"name": "creator", "type": "address"},
      {"name": "startTime", "type": "uint256"},
      {"name": "endTime", "type": "uint256"},
      {"name": "minInvestment", "type": "uint256"},
      {"name": "maxInvestment", "type": "uint256"}
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [{"name": "investmentId", "type": "uint256"}],
    "name": "getInvestmentInfo",
    "outputs": [
      {"name": "investor", "type": "address"},
      {"name": "timestamp", "type": "uint256"}
    ],
    "stateMutability": "view",
    "type": "function"
  }
] as const;

export const contractAddress = '0x...'; // Replace with actual deployed contract address

export const publicClient = createPublicClient({
  chain: sepolia,
  transport: http(import.meta.env.VITE_RPC_URL || 'https://sepolia.infura.io/v3/b18fb7e6ca7045ac83c41157ab93f990'),
});

export async function createFilmProject(
  title: string,
  description: string,
  genre: string,
  targetAmount: string,
  duration: number,
  minInvestment: string,
  maxInvestment: string
) {
  try {
    // This would be implemented with actual contract interaction
    console.log('Creating film project:', {
      title,
      description,
      genre,
      targetAmount,
      duration,
      minInvestment,
      maxInvestment
    });
    
    // Mock response for now
    return {
      success: true,
      projectId: Math.floor(Math.random() * 1000),
      transactionHash: '0x' + Math.random().toString(16).substr(2, 64)
    };
  } catch (error) {
    console.error('Error creating film project:', error);
    throw new Error('Failed to create film project');
  }
}

export async function makeInvestment(
  projectId: number,
  amount: string,
  encryptedAmount: string,
  inputProof: string
) {
  try {
    console.log('Making encrypted investment via smart contract:', {
      projectId,
      amount,
      encryptedAmount,
      inputProof
    });
    
    // This would call the smart contract with encrypted data
    // No direct transfers - all data is encrypted and stored on-chain
    const contractCall = {
      to: contractAddress,
      data: '0x', // Encoded function call with encrypted parameters
      value: amount, // ETH amount for the investment
    };
    
    // Mock response for now - in production this would be actual contract interaction
    return {
      success: true,
      investmentId: Math.floor(Math.random() * 1000),
      transactionHash: '0x' + Math.random().toString(16).substr(2, 64),
      encryptedData: encryptedAmount,
      contractAddress: contractAddress
    };
  } catch (error) {
    console.error('Error making encrypted investment:', error);
    throw new Error('Failed to make encrypted investment');
  }
}

export async function getProjectInfo(projectId: number) {
  try {
    // Mock data for now
    return {
      title: 'Sample Film Project',
      description: 'A sample film project description',
      genre: 'Drama',
      creator: '0x1234567890123456789012345678901234567890',
      startTime: Date.now() / 1000,
      endTime: (Date.now() / 1000) + (30 * 24 * 60 * 60), // 30 days
      minInvestment: '0.1',
      maxInvestment: '10.0'
    };
  } catch (error) {
    console.error('Error getting project info:', error);
    throw new Error('Failed to get project info');
  }
}

export async function getInvestmentInfo(investmentId: number) {
  try {
    // Mock data for now
    return {
      investor: '0x1234567890123456789012345678901234567890',
      timestamp: Date.now() / 1000
    };
  } catch (error) {
    console.error('Error getting investment info:', error);
    throw new Error('Failed to get investment info');
  }
}
