const mintedNfts =
    [
        {
            id: 1,
            contract_address: "0x4Ce3F76C576eaF22388d8861e70fb22472f137Cf",
            attributes: [
                {
                    trait_type: "Badge",
                    value: "Super Student"
                },
                {
                    trait_type: "Version",
                    value: "One"
                }
              ],
              description: "This NFT proves that you are a super student.",
              image: "ipfs://QmWN7Jttk9TeC5rk7q4N7ZsNt9cM2gZG8Bofoiscu5cYXj",
              name: "You are a super student"
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