import { ethers } from 'hardhat';

async function main() {
  // const Contract = await ethers.getContractFactory('Task');
  const contract = await ethers.deployContract('Task');
  await contract.waitForDeployment();
  console.log('contract', contract.target);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
