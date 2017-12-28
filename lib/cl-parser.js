function parse(string) {
    const func = string.substr(0, string.indexOf('('));
    var parameters = string.substr(string.indexOf('(')+1, string.indexOf(')'));
    const parametersArray = [];

    const count = (parameters.match(/,/g) || []).length;

    for (var i = 0; i < count; i++){

        var str = parameters.substr(0, parameters.indexOf(','));
        parametersArray.push(str);
        parameters = parameters.substr(parameters.indexOf(',')+1, parameters.indexOf(')'));
    }
    parametersArray.push(parameters.substr(0,parameters.indexOf(')')))

    const nameInputs = [func, parametersArray];
    console.log(nameInputs);
    return nameInputs;
}

module.exports.parse = parse;