import { ethers } from "hardhat";

async function main() {
  console.log("Deploying ReelVaultInvest contract...");

  // Get the contract factory
  const ReelVaultInvest = await ethers.getContractFactory("ReelVaultInvest");

  // Deploy the contract with a verifier address (you can change this)
  const verifier = "0x1234567890123456789012345678901234567890"; // Replace with actual verifier address
  const reelVaultInvest = await ReelVaultInvest.deploy(verifier);

  await reelVaultInvest.waitForDeployment();

  const contractAddress = await reelVaultInvest.getAddress();
  console.log("ReelVaultInvest deployed to:", contractAddress);

  // Verify the contract if on a public network
  if (process.env.ETHERSCAN_API_KEY) {
    console.log("Waiting for block confirmations...");
    await reelVaultInvest.deploymentTransaction()?.wait(6);
    
    try {
      await hre.run("verify:verify", {
        address: contractAddress,
        constructorArguments: [verifier],
      });
      console.log("Contract verified on Etherscan");
    } catch (error) {
      console.log("Verification failed:", error);
    }
  }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
