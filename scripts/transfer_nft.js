require("dotenv").config()
const API_URL = process.env.API_URL; //the alchemy app url
const PUBLIC_KEY = process.env.PUBLIC_KEY; //my metamask public key
const PRIVATE_KEY = process.env.PRIVATE_KEY;//my metamask private key
const {createAlchemyWeb3} = require("@alch/alchemy-web3")
const web3 = createAlchemyWeb3(API_URL)

const contract = require("../artifacts/contracts/BadgeNFT.sol/BadgeNFT.json")//this is the contract created from ethereum example site

const contractAddress = "0x99febfa55d3884c1be34da6f2b16fcfe99d6fc7b" // put here the contract address

const nftContract = new web3.eth.Contract(contract.abi, contractAddress)


/**
 * 
 * @param tokenID the token id we want to exchange
 * @param to the metamask address will own the NFT
 * @returns {Promise<void>}
 */
async function exchange(tokenID, to) {
    const nonce = await web3.eth.getTransactionCount(PUBLIC_KEY,         'latest');
//the transaction
const tx = {
    'from': PUBLIC_KEY,
    'to': contractAddress,
    'nonce': nonce,
    'gas': 500000,
    'input': nftContract.methods.safeTransferFrom(PUBLIC_KEY, to, tokenID).encodeABI() //I could use also transferFrom
};
const signPromise = web3.eth.accounts.signTransaction(tx, PRIVATE_KEY)

signPromise

    .then((signedTx) => {

        web3.eth.sendSignedTransaction(
            signedTx.rawTransaction,

            function (err, hash) {

                if (!err) {

                    console.log(
                        "The hash of your transaction is: ",

                        hash,

                        "\nCheck Alchemy's Mempool to view the status of your transaction!"
                    )

                } else {

                    console.log(
                        "Something went wrong when submitting your transaction:",

                        err
                    )

                }

            }
        )

    })

    .catch((err) => {

        console.log(" Promise failed:", err)

    })
}

exchange(1, "0x49d89FE7381471De1D08C9930e4A3c6473E951C8");