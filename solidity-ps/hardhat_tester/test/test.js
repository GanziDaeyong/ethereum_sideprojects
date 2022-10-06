
const { ethers } = require("hardhat");
const { expect } = require("chai");
//const { performance } = require("perf_hooks");
const fs = require("fs").promises;
const setting = async () => {
  const PS_factory = await ethers.getContractFactory("PS");
  const deployed = await PS_factory.deploy();
  const [tcList, solList] = await _getDir();
  return [deployed, tcList, solList];
};
const _getDir = async () => {
  const tcPath = "../user/testcases/";
  const solPath = "../user/solutions/";
  let tcList = await fs.readdir(tcPath);
  let solList = await fs.readdir(solPath);
  for (i = 0; i < tcList.length; i++) {
    tcList[i] = tcPath + tcList[i];
    solList[i] = solPath + solList[i];
  }
  return [tcList, solList];
};
describe('Test begins', () => {it('tc1', async()=>{
        const [deployed, tcList, solList] = await setting();
        const solFile = "../user/solutions/sol1";
        const tcFile = "../user/testcases/tc1";
        let answer = await fs.readFile(solFile);
        answer = answer.toString().trim();
        let tc = await fs.readFile(tcFile);
        tc = tc.toString().trim();
        tc = tc.replaceAll("\n", " ");
        const userRes = await deployed.exec(tc);
        expect(userRes).to.equal(answer);
    });it('tc2', async()=>{
        const [deployed, tcList, solList] = await setting();
        const solFile = "../user/solutions/sol2";
        const tcFile = "../user/testcases/tc2";
        let answer = await fs.readFile(solFile);
        answer = answer.toString().trim();
        let tc = await fs.readFile(tcFile);
        tc = tc.toString().trim();
        tc = tc.replaceAll("\n", " ");
        const userRes = await deployed.exec(tc);
        expect(userRes).to.equal(answer);
    });it('tc3', async()=>{
        const [deployed, tcList, solList] = await setting();
        const solFile = "../user/solutions/sol3";
        const tcFile = "../user/testcases/tc3";
        let answer = await fs.readFile(solFile);
        answer = answer.toString().trim();
        let tc = await fs.readFile(tcFile);
        tc = tc.toString().trim();
        tc = tc.replaceAll("\n", " ");
        const userRes = await deployed.exec(tc);
        expect(userRes).to.equal(answer);
    });})