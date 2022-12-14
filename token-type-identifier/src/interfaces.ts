export const erc20signature = {
  "18160ddd": "totalSupply",
  dd62ed3e: "allowance",
  "70a08231": "balanceOf",
  a9059cbb: "transfer",
  "23b872dd": "transferFrom",
  "95ea7b3": "approve", // 095ea7b3
  ddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef:
    "e_transfer",
  "8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925":
    "e_approval",
};

export const erc721signature = {
  b88d4fde: "safeTransferFrom",
  "17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31":
    "e_approvalForAll",
  "42842e0e": "safeTransferFrom",
  "70a08231": "balanceOf",
  "6352211e": "ownerOf",
  "23b872dd": "transferFrom",
  "95ea7b3": "approve", // 0 하나 제거
  a22cb465: "setApprovalForAll",
  "81812fc": "getApproved", // 0 하나 제거
  e985e9c5: "isApprovedForAll",
  "1ffc9a7": "supportsInterface", // 01ffc9a7
  ddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef:
    "e_transfer",
  "8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925":
    "e_approval",
};

export const erc1155signature = {
  "2eb2c2d6":
    "safeBatchTransferFrom(address,address,uint256[],uint256[],bytes)",
  "4e1273f4": "balanceOfBatch(address[],uint256[])",
  f242432a: "safeTransferFrom(address,address,uint256,uint256,bytes)",
  fdd58e: "balanceOf(address,uint256)", // 0 둘 제거
  "1ffc9a7": "supportsInterface(bytes4)", // 0 하나 제거
  a22cb465: "setApprovalForAll(address,bool)",
  e985e9c5: "isApprovedForAll(address,address)",
  // c3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62:
  //   "e_transferSingle",
  // "4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb":
  //   "e_transferBatch",
  // "17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31":
  //   "e_approvalForAll",
  // "6bb7ff708619ba0610cba295a58592e0451dee2622938c8755667688daf3529b": "e_uri",
};
