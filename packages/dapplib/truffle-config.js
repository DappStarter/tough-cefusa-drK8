require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner knife flush space stomach razor oil purpose gentle light army genre'; 
let testAccounts = [
"0xe8fdb86cdc4eaa5075b1d381a87d1e7eee83683ab3a115d76bd3873d12a6b74b",
"0x6752ec814d6912eb8ef9fc53cb79c6288d7cb2b498ccd8c1196af28cdf82abe0",
"0x625a65999edafd38f680881f800679a041170c0d5c1ce2dd7028e716e1a1191a",
"0x10a3a410c8f20c1b0641a5e331b7268f48ac3068ee5542de70f600218cbb08c9",
"0x33fc68c8a64b73e4fb0cc10f9f7672b8dc37d852d916b9202fc61b73ddae09aa",
"0x1490f4899f76a7ada904a5503080743e733cbe32f4ee974dbf29428715e3baa8",
"0x6570fce8e8b71b9198fb814f267433378ac9d2b28021a12d6db49ec3d5038c8d",
"0xb3f266a7bdccd367569e52d0c87700408d7f0b90a5d4691cc26744b0cebae037",
"0x5bc1a3d425184a7d3f51c56711a20339f9b74771782e968426c44d8a15376f2f",
"0xe3c3849a6cc96241b7a18353aeb842444335394c4a8af24972a9e9f3c47e8d76"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

