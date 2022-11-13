const Migrations = artifacts.require("PrivateLandReg");

module.exports = function (deployer) {
  deployer.deploy(Migrations);
};
