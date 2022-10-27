const Web3 = require("web3");
const web3 = new Web3("http://localhost:7545"); // ganache
const Tx = require("ethereumjs-tx").Transaction;

const addr_list = [
  "0x0E514769759aD9124dcD3d772F366a5536157580",
  "0x47941282d78cD0d662e91cdb1B827b7bA026da89",
  "0xC2badBe0b86037Ac21494F0F16802281283f1F51",
  "0xcFE92761a1D8442bD26c39C969913b77dE4fAd1b",
  "0x5E75956877E13a2eE0Fe84558F76a93D931ef1cE",
  "0x5Ca0FD04d798fDa9Dc9649EbCe13fa475FdfEec3",
  "0x48D79c2c7bF8ccD42f2991809d00623cEA7B1485",
  "0x586C471b3459E85A9787DcD30cb505c5f86C4E72",
  "0x515047badfdD9Cc4E23BAE3073E7D9f5c252234F",
  "0x40C779932Ac295f555C66212164c4C9d9a1FaF66",
];
const pk_list = [
  "ad189c2a0412b94b021a4ea95d34ad31e12142c9509890ab764a2320c5b84bbe",
  "be1d59ce5c7cedc0e03ab93a4a5069f6febf976c7300ebfbd1aece810fce73e6",
  "6eff10e807d180f74b710165f7c39623b8a5506f86b21d53c83bcd7ae363c16d",
  "9af255b3e30c0b4752801fb0aaeca508eac94de871630ec6d3fff4a0c8d92a49",
  "d59595d3ecd678e0f3ccbc30761cd362002f619b8101448998e3ae3912118efe",
  "5a98ac4f48551f8b2e9e5d3d1925c47658f5a16bf3d25ef0ee3f8c641f7b64c0",
  "9ea51c1b84d9600b2003b348dc860160912597f4ecd880b823baba6818fad073",
  "98cced81a4eee901a07a8d54035bc7ede8db72e1198436e49d5f452134230ca2",
  "f71da17d514905fbb8ce5d05da78ee20ad696218f7d767223743ab0ed1202e1e",
  "3d617819af2c216da3e963f586831e4953ec7155077d08ad95d3e74bec16f00c",
];

const to_addr = "0x572E3bA14158d781677af0F185D51EE536A65c75";

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
