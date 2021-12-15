
const ethTx = require('ethereumjs-tx').Transaction;

const txData = {
  nonce: '0x0',
  gasPrice: '0x09184e72a000',
  gasLimit: '0x30000',
  dummy: '0x',
  to: '0xb0920c523d582040f2bcb1bd7fb1c7c1ecebdb34',
  value: '0x00',
  data: "0x",
  v: "0x1c", // Ethereum mainnet chainID
  r: 0,
  s: 0 
};

tx = new ethTx(txData);
console.log(`\ntx.serialize():\n`);
console.log(tx.serialize());
console.log(`\n\n\ntx.serialize().toString('hex'):\n`);
console.log(tx.serialize().toString('hex'));
console.log(`\n\n\ntx:\n`);
console.log(tx);
console.log(`\n\n\n`);
console.log(`tx.toJSON():`);
console.log(tx.toJSON())
console.log(`\n\n\n`);
console.log(`tx.validateSignature():`);
console.log(tx.getSenderAddress())