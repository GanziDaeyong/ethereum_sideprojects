import fss from "fast-string-search";
import Web3 from "web3";

const provider =
  "https://mainnet.infura.io/v3/b0e96de9b4e745c88739d86f1202c010";
const web3 = new Web3(provider);

const contractAddr: string = process.argv[2];

const exec = async (contractAddr: string) => {
  const bytecode = await _getCode(contractAddr);
  const res: number[] = fss.indexOf("abcdefg", "yuu");
};

const _getCode = async (contractAddr: string): Promise<string> => {
  const bytecode: string = await web3.eth.getCode(contractAddr);
  return bytecode;
};

const _checkMatching = async () => {};
