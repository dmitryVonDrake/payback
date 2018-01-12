const Dagger = require('eth-dagger');
const dagger = new Dagger('ws://ropsten.dagger.matic.network:1884');
const {address, ABI, myAddress} = require('./json_grabber');
const date = new Date();
const {web3} = require('./web3_connector');
console.log('Waiting for events!'+date);

dagger.on('latest:log/0x9195c0345c5C6b88e71E5D3693cA9f5C2cA3b335', (result) => {
    console.log('------------------------');
    console.log(new Date());
    console.log('------------------------');
    console.log("New transaction!", result);
})
