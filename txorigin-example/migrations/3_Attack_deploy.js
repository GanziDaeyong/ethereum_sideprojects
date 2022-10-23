// example code

// const Wallet = artifacts.require("./Wallet.sol");
const Attack = artifacts.require("./Attack.sol");

module.exports = function (deployer) {
  p = "0xDa66614aeB1Ac592FFa5cfBD0545a79E63F6B819";
  deployer.deploy(Attack, p);
};
