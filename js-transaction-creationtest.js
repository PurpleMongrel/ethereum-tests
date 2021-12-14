
const ethTx = require('ethereumjs-tx').Transaction;

const txData = {
  nonce: '0x0',
  gasPrice: '0x09184e72a000',
  gasLimit: '0x30000',
  to: '0xb0920c523d582040f2bcb1bd7fb1c7c1ecebdb34',
  value: '0x00',
  data: "0x",
  v: "0x1c", // Ethereum mainnet chainID
  r: 0,
  s: 0 
};

tx = new ethTx(txData);
console.log(`tx: ${tx.toString()}`)

for(var property in tx) {
  console.log(property + "=" + tx[property]);
}