import fss from "fast-string-search";
import { bytecode } from "./longex";
import { performance } from "perf_hooks";
import { normalbytecode, shortbytecode } from "./normalex";

let key = "5CCE3832816Cf7d3b48DC";
let key2 = "dabff5f000000ffff3d05c797";

// for (let i = 0; i < 1000; i++) {
//   key += String(i);
//   console.log(fss.indexOf(bytecode, key2));
//   console.log(i);
//   //   if (fss.indexOf(bytecode, key).length == 0) {
//   //     console.log("NOT FOUND");
//   //     console.log(i);
//   //   } else {
//   //     console.log("FOUND");
//   //   }
// }

let idList: string[] = [];

function makeid(length) {
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

for (let i = 0; i < 100000; i++) {
  idList.push(makeid(40));
}

console.log("Start finding");

const st = performance.now();

let bigStr: string = "";

for (let j = 0; j < 300; j++) {
  bigStr += shortbytecode;
}

for (let i = 0; i < 100000; i++) {
  fss.indexOf(bigStr, idList[i]);
}
// for (let i = 0; i < 1000; i++) {
// //   fss.indexOf(bytecode, idList[i]);
//   fss.indexOf(normalbytecode, idList[i]);
// }
const fin = performance.now();

console.log(fin - st);
