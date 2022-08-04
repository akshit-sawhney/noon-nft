async function main() {
    const NoonNFT = await ethers.getContractFactory("NoonNFT")
  
    // Start deployment, returning a promise that resolves to a contract object
    const noonNFT = await NoonNFT.deploy()
    await noonNFT.deployed()
    console.log("Contract deployed to address:", noonNFT.address)
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error)
      process.exit(1)
    })
  