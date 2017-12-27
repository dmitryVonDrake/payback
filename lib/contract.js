const {web3} = require('./web3_connector');
const {address, ABI} = require('./json_grabber');

const CASPER = new web3.eth.Contract(ABI, address);

function getTrusted() {
    CASPER.methods.trusted().call()
      .then((res) => console.log(res))
  }

getTrusted();
  