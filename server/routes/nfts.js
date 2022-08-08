'use strict';

// eslint-disable-next-line import/no-unresolved
const express = require('express');
const bodyParser = require('body-parser');
const nftsController = require('../controllers/nfts');

const router = express.Router();
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({
    extended: false
}));

router.get('/minted_nfts', nftsController.getMintedNFTs)
router.get('/consumed_nfts', nftsController.getConsumedNFTs)
router.post('/consume_nft', nftsController.consumeNFT)
router.post('/mint_nft', nftsController.mintNFT)
router.post('/transfer_nft', nftsController.transferNFT)


module.exports = router;