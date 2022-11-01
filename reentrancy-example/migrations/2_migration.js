const MigrateObj = artifacts.require("./Attack.sol");
// const MigrateObj = artifacts.require("./test.sol");

module.exports = function (deployer) {
  deployer.deploy(MigrateObj, "0xca9d6e79f2B4a02a41F8aB7E7A86755E3CB58bdD");
};
