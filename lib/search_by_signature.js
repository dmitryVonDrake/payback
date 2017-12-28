const {ABI} = require('./json_grabber');

function search(methodName) {
    b = false
    for (var i = 0; i < ABI.length; i++) {


        if (ABI[i].name == methodName) {
            b = true;
            

        }

    }
    return b;
}

module.exports.search = search;