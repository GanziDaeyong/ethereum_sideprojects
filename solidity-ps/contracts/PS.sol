// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;
import "./util_string.sol";
import "hardhat/console.sol";

contract PS {


    // DO NOT MODIFY
    using strings for *;
    function _getInput(string memory inputString) private view returns (string[] memory) {
        strings.slice memory src = inputString.toSlice();
        strings.slice memory delim = " ".toSlice();
        string[] memory splitted = new string[](src.count(delim) + 1);
        for (uint256 i = 0; i < splitted.length; i++) {
            splitted[i] = src.split(delim).toString();
        }
        return splitted;
    }
    //


    function exec(string memory inputstring) public view returns (string memory) {
        // get input
        string[] memory input = _getInput(inputstring);
        
        // execute & get result from user
        string memory userOutput = solver(input);
        console.log(userOutput);
        // return
        return userOutput;
    }

    function solver(string[] memory input) private view returns (string memory) {
        return "This is from solver function";
    }


}
