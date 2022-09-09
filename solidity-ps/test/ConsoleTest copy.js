// const { ethers } = require("hardhat");
// const { expect } = require("chai");
// const fs = require("fs").promises;

// console.log("Anything here is tried");

// describe("[INFO] TEST2 BEGAN", () => {
//   it("deployed", async () => {
//     const PS_factory = await ethers.getContractFactory("PS");
//     const deployed = await PS_factory.deploy();

//     const [tcList, solList] = await getDir();

//     for (i = 0; i < tcList.length; i++) {
//       console.log(`TESTCASE${tcList[i]} is being tested...`);

//       let answer = await fs.readFile(solList[i]);
//       answer = answer.toString().trim();

//       let tc = await fs.readFile(tcList[i]);
//       tc = tc.toString().trim();
//       tc = tc.replaceAll("\n", " ");

//       const userRes = await deployed.exec(tc);
//       // expect(userRes).to.equal(answer);
//       expect("").to.equal("");
//     }
//   });
// });

// const getDir = async () => {
//   const tcPath = "./tc&sol/tc/";
//   const solPath = "./tc&sol/sol/";
//   let tcList = await fs.readdir(tcPath);
//   let solList = await fs.readdir(solPath);
//   for (i = 0; i < tcList.length; i++) {
//     tcList[i] = tcPath + tcList[i];
//     solList[i] = solPath + solList[i];
//   }
//   return [tcList, solList];
// };
