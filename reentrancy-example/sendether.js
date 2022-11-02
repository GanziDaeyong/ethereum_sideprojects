const Web3 = require("web3");
const web3 = new Web3("http://localhost:7545"); // ganache
const Tx = require("ethereumjs-tx").Transaction;

const addr_list = [
  "0x280Ad3C81F8Be014a0F9eAc736552D193c4DEc0d",
  "0xef8D93b8A10E1DE8d3e675fAF6A18248e7f2F503",
];
const pk_list = [
  "263f7e4cf3189d575aed26169ce580aee75bfbc087e26f513e760cd836a5b9d0",
  "3987732ae4a82bc14c5faec3660625766b12d4cf1fabe575059dec326fccce24",
];

const to_addr = "0x165d456aA48945E59Fe13eD69e8D5050e62c04ec";

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
