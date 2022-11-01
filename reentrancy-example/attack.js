const Web3 = require("web3");
const Tx = require("ethereumjs-tx").Transaction;
const HDWalletProvider = require("@truffle/hdwallet-provider");

const exec = async () => {
  console.log("1");

  const myPrivateKeyHex =
    "0x3d617819af2c216da3e963f586831e4953ec7155077d08ad95d3e74bec16f00c";
  const provider = new Web3.providers.HttpProvider(`http://127.0.0.1:7545`);
  Web3.providers.HttpProvider.prototype.sendAsync =
    Web3.providers.HttpProvider.prototype.send;
  const localKeyProvider = new HDWalletProvider({
    privateKeys: [myPrivateKeyHex],
    providerOrUrl: provider,
  });
  console.log("1");

  const web3 = new Web3(localKeyProvider);
  const myAccount = web3.eth.accounts.privateKeyToAccount(myPrivateKeyHex);
  const contractAddress = "0x6a1b68785419edd5954379cB0C9dBc29F31a875D";
  const contractAddress2 = "0xca9d6e79f2B4a02a41F8aB7E7A86755E3CB58bdD";

  console.log("1");

  const minABI = [
    {
      constant: true,
      inputs: [],
      name: "attack",
      outputs: [],
      type: "function",
    },
  ];

  const min2 = [
    {
      constant: true,
      inputs: [],
      name: "deposit",
      outputs: [],
      type: "function",
    },
  ];

  const min3 = [
    {
      constant: true,
      inputs: [],
      name: "getBalance",
      outputs: [
        {
          name: "out",
          type: "uint256",
        },
      ],
      type: "function",
    },
  ];

  const contractAddress4 = "0x8CC3D9DEdE8d9bA15FE486764e40286A58D07C4B";

  const min4 = [
    {
      constant: true,
      inputs: [],
      name: "attack",
      outputs: [],
      type: "function",
    },
  ];

  const contractAddress5 = "0x72F15E3d84B10e151Cf968f91C44971d53700dFD";

  const min5 = [
    {
      constant: true,
      inputs: [],
      name: "testaddr",
      outputs: [],
      type: "function",
    },
  ];

  const min6 = [
    {
      constant: true,
      inputs: [],
      name: "attack",
      outputs: [],
      type: "function",
    },
  ];

  console.log("1");

  const myContract = new web3.eth.Contract(minABI, contractAddress4);
  const myContract3 = new web3.eth.Contract(min3, contractAddress4);
  const myContract4 = new web3.eth.Contract(min4, contractAddress4);
  const myContract2 = new web3.eth.Contract(min2, contractAddress2);
  const myContract5 = new web3.eth.Contract(min5, contractAddress5);
  const myContract6 = new web3.eth.Contract(min6, contractAddress4);

  // try {
  //   const receipt = await myContract5.methods
  //     .testaddr()
  //     .send({ from: myAccount.address });
  //   // console.log(receipt);
  // } catch (error) {
  //   console.log(error);
  // }

  try {
    const receipt = await myContract6.methods
      .attack()
      .send({ from: myAccount.address, value: 30000000000 });
    console.log(receipt);
  } catch (error) {
    console.log(error);
  }

  // try {
  //   const receipt = await myContract3.methods
  //     .getBalance()
  //     .send({ from: myAccount.address });
  //   console.log(receipt);
  // } catch (error) {
  //   console.log(error);
  // }

  // try {
  //   const receipt = await myContract4.methods
  //     .test()
  //     .send({ from: myAccount.address });
  //   // console.log(receipt);
  // } catch (error) {
  //   console.log(error);
  // }

  // try {
  //   const receipt = await myContract2.methods
  //     .deposit()
  //     .send({ from: myAccount.address, value: 10 });
  //   console.log(receipt);
  // } catch (error) {
  //   console.log(error);
  // }
};

exec();
