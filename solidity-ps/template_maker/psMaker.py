"""

NOTE: UNUSED IN VERSION 1


"""


userGlobalCode = "This is glob code"
userSolverCode = "This is solv code"


# exec()에 tc가 input으로 옴
# 그럼 _getinput에서 걔를 string list로 변환
# 이 list가 solver()로 감. 즉 유저는 string list를 받게 됨
# global code // user local code로 나뉨


code = f"""
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;
import "./util_string.sol";
import "hardhat/console.sol";

contract PS {{
    // DO NOT MODIFY
    using strings for *;

    {userGlobalCode}

    function _getInput(string memory inputString) private view returns (string[] memory) {{
        strings.slice memory src = inputString.toSlice();
        strings.slice memory delim = " ".toSlice();
        string[] memory splitted = new string[](src.count(delim) + 1);
        for (uint256 i = 0; i < splitted.length; i++) {{
            splitted[i] = src.split(delim).toString();
        }}
        return splitted;
    }}


    function exec(string memory inputstring) public view returns (string memory) {{
        // get input
        string[] memory input = _getInput(inputstring);
        console.log(input[0]);
        // execute & get result from user
        string memory userOutput = solver(input);
        return userOutput;
    }}

    function solver(string[] memory input) private view returns (string memory) {{{userSolverCode}}}
}}
"""

with open("./hardhat_tester/contracts/pstemp.sol", "w", encoding="utf-8") as fw:
    fw.write(code)
