const myproject = artifacts.require("./myproject.sol");

module.exports = function(deployer) {
  deployer.deploy(myproject);
};
