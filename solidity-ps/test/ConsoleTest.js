const { ethers } = require("hardhat");
const { expect } = require("chai");
const { performance } = require("perf_hooks");
const fs = require("fs").promises;

describe("Test begins", () => {
  it("deployed", async () => {
    let startTime = performance.now();
    const [deployed, tcList, solList] = await setting();
    let endTime = performance.now();
    console.log(`Call to doSomething took ${endTime - startTime} milliseconds`);
  });
  // it("deployed", async () => {
  //   let startTime = performance.now();
  //   const [deployed, tcList, solList] = await setting();
  //   let endTime = performance.now();
  //   console.log(`Call to doSomething took ${endTime - startTime} milliseconds`);
  // });
  // it("deployed2", async () => {
  //   let startTime = performance.now();
  //   const [deployed, tcList, solList] = await setting();
  //   let endTime = performance.now();
  //   console.log(`Call to doSomething took ${endTime - startTime} milliseconds`);
  // });
  // it("deployed2", async () => {
  //   let startTime = performance.now();
  //   const [deployed, tcList, solList] = await setting();
  //   let endTime = performance.now();
  //   console.log(`Call to doSomething took ${endTime - startTime} milliseconds`);
  // });
  // it("deployed2", async () => {
  //   let startTime = performance.now();
  //   const [deployed, tcList, solList] = await setting();
  //   let endTime = performance.now();
  //   console.log(`Call to doSomething took ${endTime - startTime} milliseconds`);
  // });
  // it("deployed2", async () => {
  //   let startTime = performance.now();
  //   const [deployed, tcList, solList] = await setting();
  //   let endTime = performance.now();
  //   console.log(`Call to doSomething took ${endTime - startTime} milliseconds`);
  // });
  // it("deployed2", async () => {
  //   let startTime = performance.now();
  //   const [deployed, tcList, solList] = await setting();
  //   let endTime = performance.now();
  //   console.log(`Call to doSomething took ${endTime - startTime} milliseconds`);
  // });
  // it("deployed2", async () => {
  //   let startTime = performance.now();
  //   const [deployed, tcList, solList] = await setting();
  //   let endTime = performance.now();
  //   console.log(`Call to doSomething took ${endTime - startTime} milliseconds`);
  // });
  // it("deployed2", async () => {
  //   let startTime = performance.now();
  //   const [deployed, tcList, solList] = await setting();
  //   let endTime = performance.now();
  //   console.log(`Call to doSomething took ${endTime - startTime} milliseconds`);
  // });
  // it("deployed2", async () => {
  //   let startTime = performance.now();
  //   const [deployed, tcList, solList] = await setting();
  //   let endTime = performance.now();
  //   console.log(`Call to doSomething took ${endTime - startTime} milliseconds`);
  // });
  // it("deployed2", async () => {
  //   let startTime = performance.now();
  //   const [deployed, tcList, solList] = await setting();
  //   let endTime = performance.now();
  //   console.log(`Call to doSomething took ${endTime - startTime} milliseconds`);
  // });
  // it("deployed2", async () => {
  //   let startTime = performance.now();
  //   const [deployed, tcList, solList] = await setting();
  //   let endTime = performance.now();
  //   console.log(`Call to doSomething took ${endTime - startTime} milliseconds`);
  // });
  // it("deployed2", async () => {
  //   let startTime = performance.now();
  //   const [deployed, tcList, solList] = await setting();
  //   let endTime = performance.now();
  //   console.log(`Call to doSomething took ${endTime - startTime} milliseconds`);
  // });
  // it("deployed2", async () => {
  //   let startTime = performance.now();
  //   const [deployed, tcList, solList] = await setting();
  //   let endTime = performance.now();
  //   console.log(`Call to doSomething took ${endTime - startTime} milliseconds`);
  // });
  // it("deployed2", async () => {
  //   let startTime = performance.now();
  //   const [deployed, tcList, solList] = await setting();
  //   let endTime = performance.now();
  //   console.log(`Call to doSomething took ${endTime - startTime} milliseconds`);
  // });
  // it("deployed2", async () => {
  //   let startTime = performance.now();
  //   const [deployed, tcList, solList] = await setting();
  //   let endTime = performance.now();
  //   console.log(`Call to doSomething took ${endTime - startTime} milliseconds`);
  // });
  // it("deployed2", async () => {
  //   let startTime = performance.now();
  //   const [deployed, tcList, solList] = await setting();
  //   let endTime = performance.now();
  //   console.log(`Call to doSomething took ${endTime - startTime} milliseconds`);
  // });
  // it("deployed2", async () => {
  //   let startTime = performance.now();
  //   const [deployed, tcList, solList] = await setting();
  //   let endTime = performance.now();
  //   console.log(`Call to doSomething took ${endTime - startTime} milliseconds`);
  // });
  // it("deployed2", async () => {
  //   let startTime = performance.now();
  //   const [deployed, tcList, solList] = await setting();
  //   let endTime = performance.now();
  //   console.log(`Call to doSomething took ${endTime - startTime} milliseconds`);
  // });
  // it("deployed2", async () => {
  //   let startTime = performance.now();
  //   const [deployed, tcList, solList] = await setting();
  //   let endTime = performance.now();
  //   console.log(`Call to doSomething took ${endTime - startTime} milliseconds`);
  // });
  // it("deployed2", async () => {
  //   let startTime = performance.now();
  //   const [deployed, tcList, solList] = await setting();
  //   let endTime = performance.now();
  //   console.log(`Call to doSomething took ${endTime - startTime} milliseconds`);
  // });
});
// }

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
