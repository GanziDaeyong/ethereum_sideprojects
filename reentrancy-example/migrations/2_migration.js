const MigrateObj = artifacts.require("./Attack.sol");
// const MigrateObj = artifacts.require("./test.sol");
// const MigrateObj = artifacts.require("./EtherStore.sol");
module.exports = function (deployer) {
  // deployer.deploy(MigrateObj);
  deployer.deploy(MigrateObj, "0x165d456aA48945E59Fe13eD69e8D5050e62c04ec");
};
