require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

const { BASE_SEPOLIA_RPC_URL, DEPLOYER_PRIVATE_KEY, BASESCAN_API_KEY } = process.env;

module.exports = {
  solidity: {
    version: "0.8.24",
    settings: {
      optimizer: { enabled: true, runs: 200 }
    }
  },
  networks: {
    baseSepolia: {
      url: BASE_SEPOLIA_RPC_URL || "https://sepolia.base.org",
      accounts: DEPLOYER_PRIVATE_KEY ? [DEPLOYER_PRIVATE_KEY] : []
    }
  },
  etherscan: {
    // Single string key → hardhat-verify detects Etherscan v2, routes all requests
    // to https://api.etherscan.io/v2/api and appends chainid=84532 automatically.
    apiKey: BASESCAN_API_KEY || ""
  }
};
