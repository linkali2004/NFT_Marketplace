require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.20",
  networks:{
    sepolia:{
      url:"https://sepolia.infura.io/v3/403d8f6a043c45fa9e93f33926ac8a69",
      accounts:["085abe8ddc67e57f657fbed18e49e558dca4493fa2fa86a9ba0fc8c0dbb4c6dd"]
    }
  },
  etherscan:{
    apiKey:"Y9KMAXB9BGD2VWKMRYTNSWQ2IXTI1P3139"
  }
};
