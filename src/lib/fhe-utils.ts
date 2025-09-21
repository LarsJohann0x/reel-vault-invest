import { createFhevmInstance } from '@fhevm/solidity';

export interface FhevmInstance {
  getPublicKey: () => Promise<string>;
  encrypt32: (value: number) => Promise<string>;
  decrypt32: (encryptedValue: string) => Promise<number>;
  reencrypt32: (encryptedValue: string, publicKey: string) => Promise<string>;
}

export async function getFhevmInstance(): Promise<FhevmInstance> {
  const instance = await createFhevmInstance();
  return instance;
}

export async function encryptAmount(
  value: number,
  contractAddress: string,
  userAddress: string
): Promise<{ encryptedData: string; inputProof: string }> {
  const instance = await getFhevmInstance();
  
  try {
    // Get the public key for the contract
    const publicKey = await instance.getPublicKey(contractAddress);
    
    // Encrypt the amount
    const encryptedData = await instance.encrypt32(value);
    
    // Create input proof (simplified for demo)
    const inputProof = await instance.generateInputProof({
      input: value,
      publicKey,
    });
    
    return {
      encryptedData,
      inputProof: JSON.stringify(inputProof),
    };
  } catch (error) {
    console.error('Error encrypting amount:', error);
    throw new Error('Failed to encrypt amount');
  }
}

export async function decryptAmount(
  encryptedData: string,
  contractAddress: string,
  userAddress: string
): Promise<number> {
  const instance = await getFhevmInstance();
  
  try {
    const decryptedValue = await instance.decrypt32(encryptedData);
    return decryptedValue;
  } catch (error) {
    console.error('Error decrypting amount:', error);
    throw new Error('Failed to decrypt amount');
  }
}

export async function reencryptAmount(
  encryptedData: string,
  targetPublicKey: string
): Promise<string> {
  const instance = await getFhevmInstance();
  
  try {
    const reencryptedData = await instance.reencrypt32(encryptedData, targetPublicKey);
    return reencryptedData;
  } catch (error) {
    console.error('Error reencrypting amount:', error);
    throw new Error('Failed to reencrypt amount');
  }
}

export async function generateInputProof(
  value: number,
  contractAddress: string
): Promise<string> {
  const instance = await getFhevmInstance();
  
  try {
    const publicKey = await instance.getPublicKey(contractAddress);
    const proof = await instance.generateInputProof({
      input: value,
      publicKey,
    });
    
    return JSON.stringify(proof);
  } catch (error) {
    console.error('Error generating input proof:', error);
    throw new Error('Failed to generate input proof');
  }
}

export async function verifyInputProof(
  proof: string,
  contractAddress: string
): Promise<boolean> {
  const instance = await getFhevmInstance();
  
  try {
    const proofData = JSON.parse(proof);
    const isValid = await instance.verifyInputProof(proofData, contractAddress);
    return isValid;
  } catch (error) {
    console.error('Error verifying input proof:', error);
    return false;
  }
}

export async function getContractPublicKey(contractAddress: string): Promise<string> {
  const instance = await getFhevmInstance();
  
  try {
    const publicKey = await instance.getPublicKey(contractAddress);
    return publicKey;
  } catch (error) {
    console.error('Error getting contract public key:', error);
    throw new Error('Failed to get contract public key');
  }
}

export async function createEncryptedInvestment(
  amount: number,
  contractAddress: string,
  userAddress: string
): Promise<{
  encryptedAmount: string;
  inputProof: string;
  publicKey: string;
}> {
  const instance = await getFhevmInstance();
  
  try {
    const publicKey = await instance.getPublicKey(contractAddress);
    const encryptedAmount = await instance.encrypt32(amount);
    const inputProof = await instance.generateInputProof({
      input: amount,
      publicKey,
    });
    
    return {
      encryptedAmount,
      inputProof: JSON.stringify(inputProof),
      publicKey,
    };
  } catch (error) {
    console.error('Error creating encrypted investment:', error);
    throw new Error('Failed to create encrypted investment');
  }
}

export async function decryptProjectAnalytics(
  encryptedData: string,
  contractAddress: string
): Promise<{
  totalInvestors: number;
  averageInvestment: number;
  successRate: number;
  isProfitable: boolean;
}> {
  const instance = await getFhevmInstance();
  
  try {
    // This would need to be implemented based on the specific FHE operations
    // For now, returning mock data
    return {
      totalInvestors: 0,
      averageInvestment: 0,
      successRate: 0,
      isProfitable: false,
    };
  } catch (error) {
    console.error('Error decrypting project analytics:', error);
    throw new Error('Failed to decrypt project analytics');
  }
}
