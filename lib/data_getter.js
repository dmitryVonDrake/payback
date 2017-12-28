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

const json = ABI[0];
const params = json.inputs;

const dec = new DecodedData(json, params).getEncodedData();

console.log(dec);



