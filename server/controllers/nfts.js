'use strict';

const mintedNftsModel = require('../models/minted_nfts');
const consumedNftsModel = require('../models/consumed_nfts');
const mintNftModel = require('../../scripts/mint-nft');
const transferNftModel = require('../../scripts/transfer_nft');

const blankStruct = {
    success: false,
    message: "",
    data: null
};

exports.getMintedNFTs = async (req, res) => {
    const responseStruct = Object.assign({}, blankStruct);
    const data = await mintedNftsModel.getAll();
    if (data) {
        responseStruct.success = true;
    }
    responseStruct.data = data || {};
    return res.status(200).send(responseStruct);
}

exports.getConsumedNFTs = async (req, res) => {
    const responseStruct = Object.assign({}, blankStruct);
    const data = await consumedNftsModel.getAll();
    if (data) {
        responseStruct.success = true;
    }
    responseStruct.data = data || {};
    return res.status(200).send(responseStruct);
}


exports.consumeNFT = async (req, res) => {
    const responseStruct = Object.assign({}, blankStruct);
    const data = await mintedNftsModel.getNftById(req.body.id);
    console.log('here: ', data);
    if (data) {
        await consumedNftsModel.addNft(data);
        await mintedNftsModel.removeById(req.body.id);

        const mintedNftsNow = await mintedNftsModel.getAll();
        console.log('mnn', mintedNftsNow);

        const consumedNftsNow = await consumedNftsModel.getAll();
        console.log('cnn', consumedNftsNow);
    }
    responseStruct.data = data || {};
    return res.status(200).send(responseStruct);
}

exports.mintNFT = async (req, res) => {
    const responseStruct = Object.assign({}, blankStruct);
    const data = await mintNftModel.mintNFT(`ipfs://${req.body.cid}`);
    
    return res.status(200).send(responseStruct);
}

exports.transferNFT = async (req, res) => {
    const responseStruct = Object.assign({}, blankStruct);
    const data = await transferNftModel.exchange(req.body.token_id, req.body.receiver_address);
    console.log('data: ', data);
    return res.status(200).send(responseStruct);
}