const MigrateObj = artifacts.require("./EtherStore.sol");

module.exports = function (deployer) {
  deployer.deploy(MigrateObj);
};
