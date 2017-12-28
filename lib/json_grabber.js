const fs = require("fs");

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

///////////////////////////////////////

const configInstance = readConfig(config);
const ABIInstance = readABI(ABI); 

module.exports.privateKey = configInstance[0];
module.exports.url = configInstance[1];
module.exports.address = configInstance[2];
module.exports.ABI = ABIInstance;
