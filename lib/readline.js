const readline = require('readline');

const {listOfSignatures} = require('./signatures');

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
        console.log(`Say what? I might have heard '${line.trim()}'`);
        break;
    }
    rl.prompt();
  }).on('close', () => {
    console.log('Have a great day!');
    process.exit(0);
  });