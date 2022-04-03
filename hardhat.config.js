require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  networks: {
    mumbai: {
      url: "127.0.0.1:8545",
      accounts: ["0x877a3431475f2c8f5210f0bb5f2a4593ca0686547f729c84bbed3504168c96b4"],
    }
}
};
// url : https://eth-rinkeby.alchemyapi.io/v2/2VUZEoylvGoDbr3lGtvgTfLcBotUS5Bu