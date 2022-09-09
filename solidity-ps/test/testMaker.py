import os

st = """
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
"""

solutions = os.listdir("tc&sol/sol")
testcases = os.listdir("tc&sol/tc")
solutions.sort()
testcases.sort()

it_collected = ""

for i in range(len(testcases)):

    solFile = "./tc&sol/sol/"+solutions[i]
    tcFile = "./tc&sol/tc/"+testcases[i]

    content = f"""
        let startTime = performance.now();
        const [deployed, tcList, solList] = await setting();
        let endTime = performance.now();
        console.log(`Call to doSomething took ${{endTime - startTime}} milliseconds`);
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

    each_it = f"it('{testcases[i]}', async()=>{{{content}}});"
    it_collected+=each_it


# print(it_collected)

desc = f"{st}describe('Test begins', () => {{{it_collected}}})"

with open("temptest.js", "w", encoding="utf-8") as fw:
    fw.write(desc)
print(desc)

