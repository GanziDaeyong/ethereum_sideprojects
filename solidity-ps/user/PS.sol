
/*

 NOTE: DO NOT TOUCH ANYTHING OTHER THAN "CODE AREA"

*/

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;
import "./util_string.sol";
import "hardhat/console.sol";


contract PS {
    using strings for *;
    
    ///////////////////
    //// CODE AREA ////
    ///////////////////


    function _getInput(string memory inputString) private view returns (string[] memory) {
        strings.slice memory src = inputString.toSlice();
        strings.slice memory delim = " ".toSlice();
        string[] memory splitted = new string[](src.count(delim) + 1);
        for (uint256 i = 0; i < splitted.length; i++) {
            splitted[i] = src.split(delim).toString();
        }
        return splitted;
    }
    

    function exec(string memory inputstring) public view returns (string memory) {
        string[] memory input = _getInput(inputstring);
        console.log(input[0]);
        string memory userOutput = solver(input);
        return userOutput;
    }

    function solver(string[] memory input) private view returns (string memory) {

        ///////////////////
        //// CODE AREA ////
        ///////////////////
        //testcode

    }
}
