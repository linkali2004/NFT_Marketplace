// SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.6.0 <0.9.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";

contract Marketplace is ERC721URIStorage, Ownable {
    using Counters for Counters.Counter;
    using SafeMath for uint256;

    Counters.Counter private _tokenId;

    struct NFTListing {
        uint256 price;
        address seller;
    }

    mapping(uint256 => NFTListing) public _listings;
    event NFTTransfer(uint256 tokenId, address from ,address to, string tokenURI, uint256 price);

    constructor(string memory name, string memory logo) ERC721(name, logo) Ownable(msg.sender) {}

    function createNFT(string calldata tokenURI) public {
        _tokenId.increment();
        _safeMint(msg.sender, _tokenId.current());
        _setTokenURI(_tokenId.current(), tokenURI);
        emit NFTTransfer(_tokenId.current(),address(0), msg.sender, tokenURI, 0);
    }

    function listNFT(uint256 tokenId, uint256 price) public validTokenId(tokenId) {
        require(price > 0, "Please provide a feasible price for sale");
        require(ownerOf(tokenId) == msg.sender, "You are not the owner of this NFT");

        _transfer(msg.sender, address(this), tokenId);
        _listings[tokenId] = NFTListing(price, msg.sender);
        emit NFTTransfer(tokenId, msg.sender,address(this), "", price);
    }

    function buyNFT(uint256 tokenId) public payable validTokenId(tokenId) {
        NFTListing memory listing = _listings[tokenId];
        require(msg.value == listing.price, "Only provide the listing price of the NFT");
        require(listing.price > 0, "This NFT is not listed for sale");

        _transfer(address(this), msg.sender, tokenId);
        payable(listing.seller).transfer(listing.price.mul(95).div(100));
        clearListing(tokenId);
        emit NFTTransfer(tokenId, address(this),msg.sender, "", msg.value);
    }

    function unlistNFT(uint256 tokenId) public validTokenId(tokenId) {
        NFTListing memory listing = _listings[tokenId];
        require(listing.seller == msg.sender, "You are not the owner");
        require(ownerOf(tokenId) == address(this), "Contract does not own this NFT");

        _transfer(address(this), listing.seller, tokenId);
        clearListing(tokenId);
        emit NFTTransfer(tokenId, address(this),msg.sender, "", 0);
    }

    modifier validTokenId(uint256 tokenId) {
        require(tokenId > 0, "Please provide a valid tokenId");
        _;
    }

    function clearListing(uint256 tokenId) internal {
        delete _listings[tokenId];
    }

    function withdrawFunds() public onlyOwner {
        uint256 contractBalance = address(this).balance;
        require(contractBalance > 0, "This contract has no balance");
        payable(owner()).transfer(contractBalance);
    }
}
