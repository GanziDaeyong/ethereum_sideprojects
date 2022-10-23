// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

contract Wallet {
    address payable public owner;

    constructor() payable {
        owner = msg.sender;
    }

    receive() external payable {}

    function transfer(address payable _to, uint _amount) public {
        require(tx.origin == owner, "Not owner");

        (bool sent, ) = _to.call{value: _amount}("");
        require(sent, "Failed to send Ether");
    }

}
