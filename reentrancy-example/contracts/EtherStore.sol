// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

contract EtherStore {
    event depositCalled(address addr, uint256 amount);
    event depositSuccess(address addr, uint256 amount);
    event withdrawCalled(address addr, uint256 amount);
    event withdrawSuccess(address addr, uint256 amount);


    mapping(address => uint) public balances;

    function deposit() public payable {
        emit depositCalled(msg.sender, msg.value);
        balances[msg.sender] += msg.value;
        emit depositSuccess(msg.sender, msg.value);
    }

    function withdraw() public {
        emit withdrawCalled(msg.sender, msg.value);
        uint bal = balances[msg.sender];
        require(bal > 0);

        (bool sent, ) = msg.sender.call{value: bal}("");
        require(sent, "Failed to send Ether");

        balances[msg.sender] = 0;
        emit withdrawSuccess(msg.sender, msg.value);

    }

    // Helper function to check the balance of this contract
    function getBalance() public view returns (uint) {
        return address(this).balance;
    }
}