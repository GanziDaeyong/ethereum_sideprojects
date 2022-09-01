import fss from "fast-string-search";
import Web3 from "web3";
import { erc20signature, erc721signature } from "./interfaces";

const provider =
  "https://mainnet.infura.io/v3/b0e96de9b4e745c88739d86f1202c010";
const web3 = new Web3(provider);

// const contractAddr: string = process.argv[2];
const contractAddr: string = "0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D";

const exec = async (contractAddr: string) => {
  const bytecode: string = await _getCode(contractAddr);
  _checkMatching(bytecode);
  // const res: number[] = fss.indexOf("abcdefg", "yuu");
};

const _getCode = async (contractAddr: string): Promise<string> => {
  const bytecode: string = await web3.eth.getCode(contractAddr);
  return bytecode;
};

const _checkMatching = (bytecode: string) => {
  Object.keys(erc721signature).forEach((key: string) => {
    console.log(fss.indexOf(bytecode, key));
    // console.log(key);
  });
};

exec(contractAddr);
