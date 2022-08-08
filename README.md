# Noon NFT

This repository holds code for:
1. Creation smart contracts for NFTs
2. Deploying smart contracts on any ethereum network
3. Minting new NFTs
4. Transferring NFT from one account to the others.

This makes use of Alchemy for blockchain APIs and node infrastructure

## Getting Started
1. Create your account on https://www.alchemy.com.
2. Create a new Project and copy paste the required keys in `.env` file.
3. Create all the environment variables on the basis of the ones provided in `sample.env`
3. Run `npm install` to install all the dependencies

## Compiling smart contract
1. Write your smart contracts in `/contracts` directory
2. To compile, execute:
```
npx hardhat compile 
```
P.S. In case, there are some changes you want to hard-compile.. execute the following command:
```
npx hardhat compile --force
```
## Deployment
1. The smart contracts compiled in previous step can be found in `/artifacts` directory.
2. Create the deployment script in `/scripts` directory.
3. Point the deployment script to correct contract.
4. Execute
```
npx hardhat --network goerli run scripts/deploy_badge.js
```
Where,
replace goerli with the network on which you want to deploy
replace `deploy_badge.js` with your file name

## Minting an NFT
1. Get the contract address from the logs of the previous step
2. Create a new JSON providing details to your NFT along with image CID of your NFT.
3. replace `NFT_IPFS_CID` with your JSON's CID or execute it thru API (Steps mentioned below)
4. Execute this script to mint the NFT:
```
node scripts/mint-nft.js
```

## Transfering an NFT
1. Update the token-id of the NFT minted in the step above.
2. Update the receiver's wallet address.
Execute:
```
node scripts/transfer_nft.js
```


# APIs

## Mint an NFT
To mint an NFT, execute the following API call:
```
curl --location --request POST 'http://127.0.0.1:8001/nfts/v1/mint_nft' \
--header 'Content-Type: application/json' \
--data-raw '{
    "cid": "QmZzaYaHnDFNrfyV8cWbSfS7Wxd9gkWsa5ksEJBTuWXvNy"
}'
```
Replace the cid with the cid of the metadata json of the NFT uploaded to IPFS.

## Transfer an NFT
TO transfer an NFT, execute the following API call:
```
curl --location --request POST 'http://127.0.0.1:8001/nfts/v1/transfer_nft' \
--header 'Content-Type: application/json' \
--data-raw '{
    "token_id": 3,
    "receiver_address": "0x623f826c61942b713558F326A6573E1cd973648d"
}'
```
Where, replace the `token_id` with the token_id of the minted NFT
And, `receiver_address` by the wallet address of the receiver of the NFT