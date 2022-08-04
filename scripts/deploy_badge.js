async function main() {
    const BadgeNFT = await ethers.getContractFactory("BadgeNFT")
  
    // Start deployment, returning a promise that resolves to a contract object
    const badgeNFT = await BadgeNFT.deploy()
    await badgeNFT.deployed()
    console.log("Contract deployed to address:", badgeNFT.address)
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error)
      process.exit(1)
    })
  