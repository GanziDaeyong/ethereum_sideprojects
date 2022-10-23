const sendtx = async () => {
  let Web3 = require("web3");
  web3 = new Web3("http://localhost:7545"); // ganache

  //100000000000000000000

  const VICTIM = "0x861513F8ddd3A4e6c27CfF7c42BC312dD940319a";
  const BAD_CONTRACT = "0xa2D870f1716647633A36cdb629e79529962D26a8";
  const privateKey =
    "c3e3c15c3c40188918524b1da5ddfc747202b1a8b72440c76d9d5936e1fe8155";

  const privateKeyBuffer = Buffer.from(privateKey, "hex");

  let fromAddress = VICTIM;
  let toAddress = BAD_CONTRACT;
  let nonce = await web3.eth.getTransactionCount(fromAddress);
  console.log("THIS IS NONCE -> ", nonce);

  let gasPrice = web3.eth.gasPrice;
  let value = web3.utils.toWei("5", "ether");
  let gasLimit = web3.eth.estimateGas({
    to: toAddress,
    from: fromAddress,
    value: value,
  }); // the used gas for the simulated call/transaction (,,21000)
  let Tx = require("ethereumjs-tx").Transaction;

  let rawTx = {
    nonce: web3.utils.toHex("2"), // the count of the number of outgoing transactions, starting with 0
    gasPrice: web3.utils.toHex(gasPrice), //  the price to determine the amount of ether the transaction will cost
    gasLimit: web3.utils.toHex(gasLimit), // the maximum gas that is allowed to be spent to process the transaction
    to: toAddress,
    from: fromAddress,
    data: "0x00", // could be an arbitrary message or function call to a contract or code to create a contract
    value: web3.utils.toHex(value), // the amount of ether to send
  };
  let tx = new Tx(rawTx);
  tx.sign(privateKeyBuffer);
  let serializedTx = tx.serialize();
  const res = await web3.eth.sendSignedTransaction(
    "0x" + serializedTx.toString("hex")
  );
  console.log(res);
};

sendtx();
