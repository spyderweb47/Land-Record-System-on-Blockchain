const Migrations = artifacts.require("PublicLandReg");

module.exports = function (deployer) {
  deployer.deploy(Migrations);
};
