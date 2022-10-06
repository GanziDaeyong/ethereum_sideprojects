# Solidity-PS-Helper

Helps you enjoy PS with solidity, which is never recommended though.

built with Node, Hardhat, Solidity

<br>
<br>

## Installation

---

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
<br>

## Guide

---

First, prepare a ps-problem with a number of testcases and corresponding solutions.

> Your testcases and solutions should be numbered in pair.<br>For example, `tc1.txt` should match `sol1.txt` and `tc2.txt` should match `sol2.txt`.. so on.

Second, place testcases on `./user/testcases/` and solutions on `./user/solutions/`

Third, problem-solve at `./user/PS.sol`

Last, move to `./user` and run `run.sh`

```
$ cd ./user
$ bash run.sh
```
