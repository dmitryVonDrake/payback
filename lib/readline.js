const readline = require('readline');

const {listOfSignatures} = require('./signatures');

const {parse} = require('./cl-parser');

const {formData} = require('./data_former');

const {sendToPool} = require('./transaction_sender');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'payback$ '
  });
  
  rl.prompt();
  
  rl.on('line', (line) => {
    switch (line.trim()) {
      case 'help':
        console.log(listOfSignatures);
        break;
      default:
        sendToPool(formData(parse(line)));
        break;
    }
    rl.prompt();
  }).on('close', () => {
    console.log('Have a great day!');
    process.exit(0);
  });