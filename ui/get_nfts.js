const axios = require('axios');
const API_KEY = process.env.API_KEY
const PUBLIC_KEY_NFT_HOLDER = process.env.PUBLIC_KEY_NFT_HOLDER

const baseURL = `https://eth-goerli.alchemyapi.io/nft/v2/${API_KEY}/getNFTs/`;
const ownerAddr = PUBLIC_KEY_NFT_HOLDER;

console.log('here: ', baseURL, ownerAddr)

var config = {
  method: 'get',
  url: `${baseURL}?owner=${ownerAddr}`
};

axios(config)
.then(response => console.log(JSON.stringify(response.data, null, 2)))
.catch(error => {
    // console.log(error)
});