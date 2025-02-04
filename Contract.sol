// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract MyTokenFaucet {
    address public owner;
    mapping(address => uint256) public balances; 

    event TokensRequested(address indexed user, uint256 amount);
    event TokensDeposited(address indexed owner, uint256 amount);

    modifier onlyOwner() {
        require(msg.sender == owner, "Not authorized");
        _;
    }

    constructor() {
        owner = msg.sender;
    }

    function getBalance(address user) external view returns (uint256) {
        return balances[user];
    }

    function requestTokens(uint256 amount) external {
        require(amount <= 100, "Cannot request more than 100 tokens");
        require(block.timestamp % 2 == 0, "Can only request on even timestamps"); 
        balances[msg.sender] += amount;
        emit TokensRequested(msg.sender, amount);
    }

    function depositTokens() external payable onlyOwner {
        require(msg.value > 0, "Must send Ether to deposit tokens");
        emit TokensDeposited(msg.sender, msg.value);
    }
}
