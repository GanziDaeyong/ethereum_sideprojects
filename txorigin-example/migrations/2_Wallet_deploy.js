// // example code
// const Wallet = artifacts.require("./Wallet.sol");

// module.exports = function (deployer) {
//   deployer.deploy(Wallet);
// };

const Attack = artifacts.require("./Attack.sol");

module.exports = function (deployer) {
  walletAddr = "0xF3ba2D4F4ACB93780F23D7182e748239363C1A5c";
  deployer.deploy(Attack, walletAddr);
};
