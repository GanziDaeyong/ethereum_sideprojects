#!/bin/bash

cp ./PS.sol ../hardhat_tester/contracts/PS.sol
cd ../
python3 ./template_maker/testMaker.py
cd ./hardhat_tester
npx hardhat test