'use strict';

const consumedNFTs =
    [
    ]

exports.getAll = async () => {
    return consumedNFTs;
}

exports.addNft = async (nftData) => {
    consumedNFTs.push(nftData);
}