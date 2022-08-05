async function main() {
    const ApeNFT = await ethers.getContractFactory("ApeNFT")
  
    // Start deployment, returning a promise that resolves to a contract object
    const apeNFT = await ApeNFT.deploy()
    await apeNFT.deployed()
    console.log("Contract deployed to address:", apeNFT.address)
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error)
      process.exit(1)
    })
  