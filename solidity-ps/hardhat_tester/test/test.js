
const { ethers } = require("hardhat");
const { expect } = require("chai");
const { performance } = require("perf_hooks");
const fs = require("fs").promises;
const setting = async () => {
  const PS_factory = await ethers.getContractFactory("PS");
  const deployed = await PS_factory.deploy();
  const [tcList, solList] = await _getDir();
  return [deployed, tcList, solList];
};
const _getDir = async () => {
  const tcPath = "./tc&sol/tc/";
  const solPath = "./tc&sol/sol/";
  let tcList = await fs.readdir(tcPath);
  let solList = await fs.readdir(solPath);
  for (i = 0; i < tcList.length; i++) {
    tcList[i] = tcPath + tcList[i];
    solList[i] = solPath + solList[i];
  }
  return [tcList, solList];
};
describe('Test begins', () => {it('tc01', async()=>{
        let startTime = performance.now();
        const [deployed, tcList, solList] = await setting();
        let endTime = performance.now();
        console.log(`Call to doSomething took ${endTime - startTime} milliseconds`);
        const solFile = "./tc&sol/sol/sol01";
        const tcFile = "./tc&sol/tc/tc01";
        let answer = await fs.readFile(solFile);
        answer = answer.toString().trim();
        let tc = await fs.readFile(tcFile);
        tc = tc.toString().trim();
        tc = tc.replaceAll("\n", " ");
        const userRes = await deployed.exec(tc);
        expect(userRes).to.equal(answer);
    });it('tc02', async()=>{
        let startTime = performance.now();
        const [deployed, tcList, solList] = await setting();
        let endTime = performance.now();
        console.log(`Call to doSomething took ${endTime - startTime} milliseconds`);
        const solFile = "./tc&sol/sol/sol02";
        const tcFile = "./tc&sol/tc/tc02";
        let answer = await fs.readFile(solFile);
        answer = answer.toString().trim();
        let tc = await fs.readFile(tcFile);
        tc = tc.toString().trim();
        tc = tc.replaceAll("\n", " ");
        const userRes = await deployed.exec(tc);
        expect(userRes).to.equal(answer);
    });it('tc03', async()=>{
        let startTime = performance.now();
        const [deployed, tcList, solList] = await setting();
        let endTime = performance.now();
        console.log(`Call to doSomething took ${endTime - startTime} milliseconds`);
        const solFile = "./tc&sol/sol/sol03";
        const tcFile = "./tc&sol/tc/tc03";
        let answer = await fs.readFile(solFile);
        answer = answer.toString().trim();
        let tc = await fs.readFile(tcFile);
        tc = tc.toString().trim();
        tc = tc.replaceAll("\n", " ");
        const userRes = await deployed.exec(tc);
        expect(userRes).to.equal(answer);
    });})