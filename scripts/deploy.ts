import { ethers } from 'hardhat';

/// Opensea image URL: https://testnets.opensea.io/assets/rinkeby/0xb326edbc49aadba2d63b2e69564f8f9757e50f95/0
/// Contract Address on Rinkeby:  0xb326EDBc49aaDBA2d63B2E69564f8F9757e50F95
/// Deployment Transaction Hash: 0xc844dd005ef801948b739f387e524bc2baa48787eae2b475c94e72a3afdda8c1

async function main() {
  const CasNFT = await ethers.getContractFactory('CasNFT');
  const nft = await CasNFT.deploy();

  await nft.deployed();

  console.log('NFT deployed to:', nft.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});