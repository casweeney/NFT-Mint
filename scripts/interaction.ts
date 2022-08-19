import { ethers } from 'hardhat';

async function main() {
  const amount = ethers.utils.parseEther('0.1');

  //get pointer to piggybank interface
  const nftContractRinkeby = '0xb326EDBc49aaDBA2d63B2E69564f8F9757e50F95';

  const nftPointer = await ethers.getContractAt(
    'ICasNFT',
    nftContractRinkeby
  );

  //call the safemint function
  const nftMint = await nftPointer.safeMint(
    '0x617cd3DB0CbF26F323D5b72975c5311343e09115',
    'QmamtEK2MDNccQVxmgpyD7GUhGfphumQ9i9eyP5Gv4EXTN'
  );


  /// Opensea image URL: https://testnets.opensea.io/assets/rinkeby/0xb326edbc49aadba2d63b2e69564f8f9757e50f95/0
  /// Contract Address on Rinkeby:  0xb326EDBc49aaDBA2d63B2E69564f8F9757e50F95
  /// Deployment Transaction Hash: 0xc844dd005ef801948b739f387e524bc2baa48787eae2b475c94e72a3afdda8c1


  const nftMintTnx = await nftMint.wait();
  console.log('mint receipt is', nftMintTnx);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});