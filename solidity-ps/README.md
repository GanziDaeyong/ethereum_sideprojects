# Solidity-PS-Helper

Helps you enjoy PS with solidity, which is never recommended though.

built with Node, Hardhat, Solidity

<br>

## Installation

you need...

- Node.js v18.9.0 <br>
- Python 3.8

then..

```
$ git clone
$ cd ./hardhat_tester
$ npm install
```

<br>

## Guide

First, prepare a ps-problem with a number of testcases and corresponding solutions.

> Your testcases and solutions should be numbered in pair.<br>For example, `tc1.txt` should match `sol1.txt` and `tc2.txt` should match `sol2.txt`.. so on.

Second, place testcases on `./user/testcases/` and solutions on `./user/solutions/`

Third, problem-solve at `./user/PS.sol`

Last, move to `./user` and run `run.sh`

```
$ cd ./user
$ bash ./run.sh
```

<br>

## Details

### Q. How does testcase processed?

Your testcases will be split by enter and space ("\n" or " "), and will given to `function solver` in `PS.sol` in the type of `string[] memory input`

Below is an example testcase

```
1 10
a b c
alpha beta gamma
```

this is converted into

`string[8] memory input = ["1", "10", "a", "b", "c", "alpha", "beta", "gamma"]`

and given to code below as an input

```
    function solver(string[] memory input) private view returns (string memory) {

        //// place your code here ////
    }
```

### Q. How should I return my answer?

You are welcomed to implement any other functions on your own. <br>
Still, keep in mind that the answer should be returned in `function solver()` in `PS.sol`.

As you can see code above, the return type should be `string memory`. <br>
You might want to take a look at tips below for `uint2str`, `str2uint`.

<br>

### Q. How is it implemented?

It's a mere wrapper for hardhat test library. I basically wanted to use solidity as a PS language which does have **print** command.

<br>

## Tips

- If you want your output (and answer) to be printed, go to `./template_maker/testMaker.py` then modify line 70, `content_without_info` to `content_with_info`.

- You might want to use `console.log()` in `PS.sol` file, as hardhat-console library supports it while testing.

- You might also want to use `uint2str`, `str2uint` which are library already implemented in `PS.sol`.

- Still have no idea what you'll be doing? Just install it, and `$ bash ./run.sh` in `./user`. I put an example **fibonacci** problem there.
