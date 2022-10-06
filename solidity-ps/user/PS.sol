
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

    function solver(string[] memory input) private view returns (string memory) {


        ///////////////////
        //// CODE AREA ////
        ///////////////////

        // below is an example. //

        uint n = str2uint(input[0]);

        uint256[30] memory fib;
        fib[0]=1; fib[1]=1;

        for (uint i=2; i<n; i++) {
            fib[i] = fib[i-1] + fib[i-2];
        }

        string memory res = uint2str(fib[n-1]);
        return res;

    }

    // Never modify below functions //

    function str2uint(string memory numString) public pure returns (uint) {
        uint  val=0;
        bytes   memory stringBytes = bytes(numString);
        for (uint  i =  0; i<stringBytes.length; i++) {
            uint exp = stringBytes.length - i;
            bytes1 ival = stringBytes[i];
            uint8 uval = uint8(ival);
           uint jval = uval - uint(0x30);
   
           val +=  (uint(jval) * (10**(exp-1))); 
        }
        return val;
    }
    function uint2str(uint _i) public pure returns (string memory _uintAsString) {
        if (_i == 0) {
            return "0";
        }
        uint j = _i;
        uint len;
        while (j != 0) {
            len++;
            j /= 10;
        }
        bytes memory bstr = new bytes(len);
        uint k = len;
        while (_i != 0) {
            k = k-1;
            uint8 temp = (48 + uint8(_i - _i / 10 * 10));
            bytes1 b1 = bytes1(temp);
            bstr[k] = b1;
            _i /= 10;
        }
        return string(bstr);
    }
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
        string memory userOutput = solver(input);
        return userOutput;
    }
}
