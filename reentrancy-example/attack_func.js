const Web3 = require("web3");
const Tx = require("ethereumjs-tx").Transaction;
const HDWalletProvider = require("@truffle/hdwallet-provider");

const exec = async () => {
  const myPrivateKeyHex =
    "d97e99052b023e062401ee4458c45da73b1c5a33f7087148ebe8e1dfa8e89a4b"; //last
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
      name: "attack",
      outputs: [],
      type: "function",
    },
  ];

  const contractAddress = "0x329d9ad6c0dF982f9204617660B47499ED17582C";
  const myContract = new web3.eth.Contract(minABI, contractAddress);

  try {
    const receipt = await myContract.methods
      .attack()
      .send({ from: myAccount.address, value: 2000000000000000000 });
    console.log(receipt);
  } catch (error) {
    console.log(error);
  }
};

exec();
