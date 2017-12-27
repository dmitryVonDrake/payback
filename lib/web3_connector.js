const Web3 = require('web3');
const WalletProvider = require('truffle-wallet-provider');
const ethereumWallet = require('ethereumjs-wallet');

const {privateKey, url, address, ABI} = require('./json_grabber');

const wallet = ethereumWallet.fromPrivateKey(Buffer.from(privateKey, 'hex'));
const provider = new WalletProvider(wallet, url);

const web3 = new Web3(provider);

//console.log(web3);