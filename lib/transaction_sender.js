const {myAddress, address} = require('./json_grabber');

const {web3} = require('./web3_connector');

function sendToPool(data) {
    web3.eth.sendTransaction({from: myAddress, to: address, data: data});
} 

module.exports.sendToPool = sendToPool;