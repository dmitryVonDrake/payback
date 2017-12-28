const {ABI} = require('./json_grabber');

const {web3} = require('./web3_connector');

class DecodedData {
    constructor(json, parameters){
        this.json = json;
        this.parameters = parameters;
    }

    getEncodedData() {
        return web3.eth.abi.encodeFunctionCall(this.json, this.parameters);
    }
}

module.exports.DecodedData = DecodedData;



