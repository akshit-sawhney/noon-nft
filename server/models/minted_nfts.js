const mintedNfts =
    [
        {
            id: 1,
            attributes: [
                {
                    "trait_type": "Badge",
                    "value": "Good Teacher"
                },
                {
                    "trait_type": "Version",
                    "value": "One"
                }
            ],
            description: "This NFT proves that your students are doing a great job.",
            image: "ipfs://QmWTAR7UiDfTgUF5n5QdrBSbj1HBpMF2u91sQBCq4mD2wK",
            name: "You are an awesome teacher",
            cid: "ipfs://QmW2JaUZR9RDVcfwVAc9EgMDLQa8L8pGwwG5XnL7GUEdRf"
        },
        {
            id: 2,
            attributes: [
                {
                    "trait_type": "Sport",
                    "value": "Football"
                },
                {
                    "trait_type": "Background",
                    "value": "White"
                }
            ],
            description: "The world's best football club.",
            image: "ipfs://QmccnXCzhccHvuwWaky2TbLMQYitGTFQWkQDwUVwCaMxAT",
            name: "Real Madrid",
            cid: "ipfs://QmW2JaUZR9RDVcfwVAc9EgMDLQa8L8pGwwG5XnL7GUEdRf"
        }


    ]


exports.getAllMintedNfts = async () => {
    let response = await knex
        .from('all_nfts')
        .select("*")
        .limit(10);
    return response;
};


exports.getAll = async () => {
    return mintedNfts;
}

exports.getNftById = async (id) => {
    for (let i = 0; i < mintedNfts.length; i++) {
        if (mintedNfts[i].id === id) {
            return mintedNfts[i];
        }
    }
}

exports.removeById = async (id) => {
    for (let i = 0; i < mintedNfts.length; i++) {
        if (mintedNfts[i].id === id) {
            mintedNfts.splice(i,1); // Removes the third element
        }
    }
}