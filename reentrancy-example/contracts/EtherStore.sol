// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

contract EtherStore {
    mapping(address => uint) public balances;
    event FallBackWorked(address indexed caller, uint256 value);
    event testEvent(uint256 test);
    event testAddr(uint256 test);

    uint256 public testnum = 0;


    function deposit() public payable {
        balances[msg.sender] += msg.value;
    }

    function withdraw() public {
        uint bal = balances[msg.sender];
        require(bal > 0);

        (bool sent, ) = msg.sender.call{value: bal}("");
        require(sent, "Failed to send Ether");

        balances[msg.sender] = 0;
    }

    // Helper function to check the balance of this contract
    // function getBalance() public view returns (uint) {
    //     return address(this).balance;
    // }



    // receive() external payable {
        // balances[msg.sender] += msg.value;
        // emit FallBackWorked(msg.sender, msg.value);
    // }

    fallback () external payable {
        balances[msg.sender] += msg.value;
        // testnum = 0x1234;
        // emit FallBackWorked(msg.sender, msg.value);
        // emit testEvent(testnum);
        // emit testAddr(balances[msg.sender]);
        address t = "C2badBe0b86037Ac21494F0F16802281283f1F51";
        emit testAddr(balances[t]);

    }

}