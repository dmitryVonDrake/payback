const {ABI} = require('./json_grabber');

const listOfSignatures = [];

for (var i = 0; i < ABI.length; i++) {
    if (ABI[i].name != undefined) {
        const name = ABI[i].name;
        var type = '';
        for (var n = 0; n < ABI[i].inputs.length; n++){
            var typeN = ABI[i].inputs[n].type.toString() + ' ' + ABI[i].inputs[n].name.toString();
            type = type + ' ' + typeN;
        }
        const sign = name.toString() + '('+type+')';
        listOfSignatures.push(sign);
        type = '';
    }
}

module.exports.listOfSignatures = listOfSignatures;