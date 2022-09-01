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

  const is20: boolean = _checkMatching(bytecode, 20);
  if (is20 == true) console.log("IS20");

  const is721: boolean = _checkMatching(bytecode, 721);
  if (is721 == true) console.log("IS721");

  // const res: number[] = fss.indexOf("abcdefg", "yuu");
};

const _getCode = async (contractAddr: string): Promise<string> => {
  const bytecode: string = await web3.eth.getCode(contractAddr);
  return bytecode;
};

const _checkMatching = (bytecode: string, tokentype: number): boolean => {
  let sig;
  if (tokentype == 20) sig = erc20signature;
  if (tokentype == 721) sig = erc721signature;

  const keys: string[] = Object.keys(sig);
  for (let i = 0; i < keys.length; i++) {
    const key: string = keys[i];
    if (fss.indexOf(bytecode, key).length != 0) {
      console.log("FOUND:", sig[key]);
    } else {
      console.log("NOT FOUND:", sig[key]);
      return false;
    }
  }
  return true;
};

exec(contractAddr);