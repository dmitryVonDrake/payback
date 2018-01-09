const {myAddress, address} = require('./json_grabber');

const {web3} = require('./web3_connector');

function waitForTransactionReceipt(hash) {
    console.log('waiting for transaction to be mined');
    web3.eth.getTransactionReceipt(hash).
      then((res) => {
        if (res == undefined) {
          console.log(hash);
          setTimeout(() => {
            waitForTransactionReceipt(hash);
          }, 1000);
        } else {
          console.log(res);
        }
      });
}

function sendToPool(data) {
    web3.eth.sendTransaction({from: myAddress, to: address, data: data}).
      then((hash) => waitForTransactionReceipt(hash));
}

module.exports.sendToPool = sendToPool;