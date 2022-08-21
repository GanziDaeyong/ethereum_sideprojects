const { ethers } = require("hardhat");
const { expect } = require("chai");
const fs = require("fs").promises;
const solutionPath = "./tc&sol/";

describe("test", () => {
  it("print function test", async () => {
    const PS_factory = await ethers.getContractFactory("PS");
    const deployed = await PS_factory.deploy();

    let answer = await fs.readFile(`${solutionPath}sol01`);
    answer = answer.toString().trim();

    let tc = await fs.readFile(`${solutionPath}tc01`);
    tc = tc.toString().trim();

    expect(await deployed.exec(tc)).to.equal(answer);
  });
});
