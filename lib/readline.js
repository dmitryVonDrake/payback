const readline = require('readline');

const {listOfSignatures} = require('./signatures');
const {search} = require('./search_by_signature');

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
        if (search(line)) {
            console.log("yes");
        }
        else{
            console.log("no");
        }
        break;
    }
    rl.prompt();
  }).on('close', () => {
    console.log('Have a great day!');
    process.exit(0);
  });