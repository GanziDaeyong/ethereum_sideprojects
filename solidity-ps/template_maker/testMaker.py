import os

# location: main/hardhat_tester/

st = """
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
"""

solutions = os.listdir("user/solutions/")  # location: main/
testcases = os.listdir("user/testcases/")
solutions.sort()
testcases.sort()

it_collected = ""

for i in range(len(testcases)):

    solFile = "../user/solutions/" + solutions[i]  # location: main/hardhat_tester/
    tcFile = "../user/testcases/" + testcases[i]

    content_with_info = f"""
        //let startTime = performance.now();
        const [deployed, tcList, solList] = await setting();
        //let endTime = performance.now();
        //console.log(`Call to doSomething took ${{endTime - startTime}} milliseconds`);
        const solFile = "{solFile}";
        const tcFile = "{tcFile}";
        let answer = await fs.readFile(solFile);
        answer = answer.toString().trim();
        let tc = await fs.readFile(tcFile);
        tc = tc.toString().trim();
        tc = tc.replaceAll("\\n", " ");
        const userRes = await deployed.exec(tc);
        expect(userRes).to.equal(answer);
        console.log(`user's output [${{userRes}}]\\nanswer[${{answer}}]`);
    """
    content_without_info = f"""
        const [deployed, tcList, solList] = await setting();
        const solFile = "{solFile}";
        const tcFile = "{tcFile}";
        let answer = await fs.readFile(solFile);
        answer = answer.toString().trim();
        let tc = await fs.readFile(tcFile);
        tc = tc.toString().trim();
        tc = tc.replaceAll("\\n", " ");
        const userRes = await deployed.exec(tc);
        expect(userRes).to.equal(answer);
    """

    each_it = f"it('{testcases[i]}', async()=>{{{content_without_info}}});"
    it_collected += each_it


desc = f"{st}describe('Test begins', () => {{{it_collected}}})"

with open("./hardhat_tester/test/test.js", "w", encoding="utf-8") as fw:
    fw.write(desc)
