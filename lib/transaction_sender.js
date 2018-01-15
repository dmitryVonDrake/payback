const {myAddress, address} = require('./json_grabber');

const {web3} = require('./web3_connector');

function hexToString (hex) {
  var string = '';
  for (var i = 0; i < hex.length; i += 2) {
    string += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
  }
  return string;
}

function waitForTransactionReceipt(hash) {
    console.log(hash);
    console.log('waiting for transaction to be mined');
    web3.eth.getTransactionReceipt(hash).
      then((res) => {
        if (res == undefined) {
          console.log(hash);
          setTimeout(() => {
            waitForTransactionReceipt(hash);
          }, 1000);
        } else {
          console.log(hexToString(res.logs[0].data));
        }
      });
}

function sendToPool(data) {
    web3.eth.sendTransaction({from: myAddress, to: address, data: data}, async (error, hash) => {
      if (error) {
        console.log(error);
      } else {
        await waitForTransactionReceipt(hash);
      }
    });
  }

module.exports.sendToPool = sendToPool;