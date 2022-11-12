require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid area fringe speak guard render remain come install creek flat gather'; 
let testAccounts = [
"0xb9b0301934a273db0f7de4a18ec109c6b717611cd47b90decc140ccc7c06abac",
"0x9693a92fcda243a427003fe8d8fb20ad9df2eacffbf163421cb672e2a3a64810",
"0x073be990aa7fb2a7a31f45bf9abd93bdfb7d4e83bb5a017c0a10d53b9cc9fea4",
"0x20b406d4cb412ec34bc97b7bca472972112830a9d3b76a66d2df2817ec7a000b",
"0xd921f8a3207626433e624e7868ec2609cd0555a5f53818c5412a323f808ef53a",
"0xca9932d90946040f94cdb85fedbb98f509b4e01ace2fea2836b5e88965d67258",
"0x5efe0ea06c4afae5b31fbf83190a00443809cda7624513d4c64e71b24af29f55",
"0xe5efe9c8b1a2221da5df60dacc955bd783b54801d3358ca688a780a2c8e890bc",
"0x5ae205017affd666d3f122b0dd7256dff53c739ab82546cf461a55804946fd58",
"0x56db5116c95d4d44326cc8c104c09671bc5376e2e71edb39b8eb27b8b8cc7660"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


