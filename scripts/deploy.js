async function main() {
    const FirstNFT = await ethers.getContractFactory("FirstNFT")
  
    // Start deployment, returning a promise that resolves to a contract object
    const firstNFT = await FirstNFT.deploy()
    await firstNFT.deployed()
    console.log("Contract deployed to address:", firstNFT.address)
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error)
      process.exit(1)
    })
  