const Web3 = require("web3");
const web3 = new Web3("http://localhost:7545"); // ganache
const Tx = require("ethereumjs-tx").Transaction;

const addr_list = [];
const pk_list = [];

const to_addr = "0xca9d6e79f2B4a02a41F8aB7E7A86755E3CB58bdD";

const toBuffer = (pk) => {
  return Buffer.from(pk, "hex");
};

const makeRawTx = async (from, to, value_in_ether) => {
  const nonce = await web3.eth.getTransactionCount(from);
  const value = web3.utils.toWei(value_in_ether, "ether");
  //   const gasPrice = await web3.eth.getGasPrice();
  //   const gasLimit = 21000;

  const rawTx = {
    nonce: web3.utils.toHex(nonce), // the count of the number of outgoing transactions, starting with 0
    gasPrice: web3.utils.toHex(20000000000),
    gasLimit: web3.utils.toHex(200000),
    to: to,
    from: from,
    // data: "0x00", // could be an arbitrary message or function call to a contract or code to create a contract
    value: web3.utils.toHex(value), // the amount of ether to send
  };

  return rawTx;
};

const sendTx = async (rawTx, buffered_pk) => {
  const tx = new Tx(rawTx);
  tx.sign(buffered_pk);
  let serializedTx = tx.serialize();
  try {
    await web3.eth.sendSignedTransaction("0x" + serializedTx.toString("hex"));
  } catch (error) {
    console.log(error);
  }
  //   console.log(res);
};

const exec = async (addr_list, pk_list, to_addr, value_in_ether) => {
  for (let i = 0; i < addr_list.length; i++) {
    const rawTx = await makeRawTx(addr_list[i], to_addr, value_in_ether);
    const buffered_pk = await toBuffer(pk_list[i]);
    console.log(rawTx);
    await sendTx(rawTx, buffered_pk);
    // break;
  }
};

exec(addr_list, pk_list, to_addr, "3");
