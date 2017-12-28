const fs = require("fs");

const ABI = fs.readFileSync('./config/ABI.json');

class functionInterface {
    constructor(constant, inputs, name, outputs, payable, stateMutability, type) {
        this.constant = constant;
        this.inputs = inputs;
        this.name = name;
        this.outputs = outputs;
        this.payable = payable;
        this.stateMutability = stateMutability;
        this.type = type;
    }
}

class contractInterface {
    constructor(objects){
        this.objects = objects;
    }
}