const Web3 = require('web3');
const WalletProvider = require('truffle-wallet-provider');
const ethereumWallet = require('ethereumjs-wallet');

const {privateKey, url} = require('./json_grabber');

const wallet = ethereumWallet.fromPrivateKey(Buffer.from(privateKey, 'hex'));
const provider = new WalletProvider(wallet, url);

var web3 = new Web3(provider);
web3.setProvider(new Web3.providers.WebsocketProvider('wss://rinkeby.infura.io/ws'));

module.exports.web3 = web3;