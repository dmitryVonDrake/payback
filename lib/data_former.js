const {DecodedData} = require('./data_getter');
const {ABI} = require('./json_grabber');

function formData(nameInputs) {
    const name = nameInputs[0];
    var neededABI;
    for (var i = 0; ABI.length; i++) {
        if (ABI[i].name = name) {
            neededABI = ABI[i];
            break;
        } 
    }

    data = new DecodedData(neededABI, nameInputs[1]).getEncodedData();
    console.log(data);
}

module.exports.formData = formData;