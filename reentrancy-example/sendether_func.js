const Web3 = require("web3");
const Tx = require("ethereumjs-tx").Transaction;
const HDWalletProvider = require("@truffle/hdwallet-provider");

const exec = async () => {
  const myPrivateKeyHex =
    "263f7e4cf3189d575aed26169ce580aee75bfbc087e26f513e760cd836a5b9d0";
  const provider = new Web3.providers.HttpProvider(`http://127.0.0.1:7545`);
  Web3.providers.HttpProvider.prototype.sendAsync =
    Web3.providers.HttpProvider.prototype.send;
  const localKeyProvider = new HDWalletProvider({
    privateKeys: [myPrivateKeyHex],
    providerOrUrl: provider,
  });

  const web3 = new Web3(localKeyProvider);
  const myAccount = web3.eth.accounts.privateKeyToAccount(myPrivateKeyHex);

  const minABI = [
    {
      constant: true,
      inputs: [],
      name: "deposit",
      outputs: [],
      type: "function",
    },
  ];

  const contractAddress = "0x165d456aA48945E59Fe13eD69e8D5050e62c04ec";
  const myContract = new web3.eth.Contract(minABI, contractAddress);

  try {
    const receipt = await myContract.methods
      .deposit()
      .send({ from: myAccount.address, value: 5000000000000000000 });
    console.log(receipt);
  } catch (error) {
    console.log(error);
  }
};

exec();
