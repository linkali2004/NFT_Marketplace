const hre = require("hardhat");
const { expect } = require("chai");

describe("NFTMarketplace", function () {
  beforeEach(async()=>{
    const contract = await  hre.ethers.getContractFactory("Marketplace");
    const deployed = await contract.deploy();
    await deployed.deployed();
  })

  it("It should create nfts" , ()=>{
    
  })
});
