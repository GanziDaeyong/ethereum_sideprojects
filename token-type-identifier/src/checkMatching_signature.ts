import fss from "fast-string-search";
import Web3 from "web3";
import {
  erc20signature,
  erc721signature,
  erc1155signature,
} from "./interfaces";

const provider =
  "https://mainnet.infura.io/v3/b0e96de9b4e745c88739d86f1202c010";
const web3 = new Web3(provider);

const contractAddr: string = process.argv[2];
// const contractAddr: string = "0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D";

const exec = async (contractAddr: string) => {
  if (!web3.utils.isAddress(contractAddr)) {
    console.log("\nINVALID CONTRACT ADDRESS\n");
    return;
  }

  const bytecode: string = await _getCode(contractAddr);
  if (bytecode.length <= 2) {
    console.log("\nEOA or Empty CA\n");
    return;
  }

  if (_checkMatching(bytecode, 20)) return;
  if (_checkMatching(bytecode, 721)) return;
  if (_checkMatching(bytecode, 1155)) return;

  console.log("\nNOT A TOKEN CONTRACT\n");
};

const _getCode = async (contractAddr: string): Promise<string> => {
  const bytecode: string = await web3.eth.getCode(contractAddr);

  return bytecode;
};

const _checkMatching = (bytecode: string, tokentype: number): boolean => {
  let sig;
  if (tokentype == 20) sig = erc20signature;
  if (tokentype == 721) sig = erc721signature;
  if (tokentype == 1155) sig = erc1155signature;

  const keys: string[] = Object.keys(sig);
  for (let i = 0; i < keys.length; i++) {
    const key: string = keys[i];
    if (fss.indexOf(bytecode, key).length == 0) {
      return false;
    }
  }
  console.log(`\nERC${tokentype}\n`);
  return true;
};

exec(contractAddr);
