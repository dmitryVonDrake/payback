const fs = require("fs");

const {contractInterface, functionInterface} = require('./contract_functions');

const ABI = fs.readFileSync('./config/ABI.json');
const config = fs.readFileSync('./config/user_config.json');



function readABI(ABI) {
  return JSON.parse(ABI);
}

function readConfig(config) {
  const configInstance = JSON.parse(config);
  const privateKey = configInstance.private_key;
  const url = configInstance.url;
  const address = configInstance.address;

  return [privateKey, url, address];
}

function getFunction(jsonFunction) {

  const func = new functionInterface();
  func.constant = jsonFunction.constant;
  func.inputs = jsonFunction.inputs;
  func.name = jsonFunction.name;
  func.outputs = jsonFunction.outputs;
  func.payable = jsonFunction.payable;
  func.stateMutability = jsonFunction.stateMutability;
  func.type = jsonFunction.type;

  return func;
}

function getContract(jsonContract) {

  var array = [];

  for (var i = 0; i < jsonContract.length; i++) {
    array.push(getFunction(jsonContract[i]));
  }
  const contract = new contractInterface(array);
  return contract;
}

///////////////////////////////////////

const configInstance = readConfig(config);
const ABIInstance = readABI(ABI); 

console.log(getContract(ABIInstance));



module.exports.privateKey = configInstance[0];
module.exports.url = configInstance[1];
module.exports.address = configInstance[2];
module.exports.ABI = ABIInstance;
