const {DecodedData} = require('./data_getter');
const {ABI} = require('./json_grabber');

function formData(nameInputs) {
    const name = nameInputs[0];
    var neededABI;
    for (var i = 0; ABI.length; i++) {
        if (ABI[i].name == name) {
            neededABI = ABI[i];
            break;
        } 
    }

    const data = new DecodedData(neededABI, nameInputs[1]).getEncodedData();
    return data;
}

module.exports.formData = formData;