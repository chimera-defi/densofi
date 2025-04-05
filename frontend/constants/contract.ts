export const NFT_MINTER_SEPOLIA_ADDRESS =
  "0x338e3e152689E5Ab9cc66538D7A2F3785C30ee25";

export const TOKEN_MINTER_SEPOLIA_ADDRESS =
  "0x50e2744ec42865918f9f3657a39d4421639d0177";

export const NFT_MINTER_ABI = [{"type":"constructor","inputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"DEFAULT_ADMIN_ROLE","inputs":[],"outputs":[{"name":"","type":"bytes32","internalType":"bytes32"}],"stateMutability":"view"},{"type":"function","name":"MINTER_ROLE","inputs":[],"outputs":[{"name":"","type":"bytes32","internalType":"bytes32"}],"stateMutability":"view"},{"type":"function","name":"RESOLVER","inputs":[],"outputs":[{"name":"","type":"address","internalType":"address"}],"stateMutability":"view"},{"type":"function","name":"balanceOf","inputs":[{"name":"account","type":"address","internalType":"address"},{"name":"id","type":"uint256","internalType":"uint256"}],"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"view"},{"type":"function","name":"balanceOfBatch","inputs":[{"name":"accounts","type":"address[]","internalType":"address[]"},{"name":"ids","type":"uint256[]","internalType":"uint256[]"}],"outputs":[{"name":"","type":"uint256[]","internalType":"uint256[]"}],"stateMutability":"view"},{"type":"function","name":"getRoleAdmin","inputs":[{"name":"role","type":"bytes32","internalType":"bytes32"}],"outputs":[{"name":"","type":"bytes32","internalType":"bytes32"}],"stateMutability":"view"},{"type":"function","name":"grantRole","inputs":[{"name":"role","type":"bytes32","internalType":"bytes32"},{"name":"account","type":"address","internalType":"address"}],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"hasRole","inputs":[{"name":"role","type":"bytes32","internalType":"bytes32"},{"name":"account","type":"address","internalType":"address"}],"outputs":[{"name":"","type":"bool","internalType":"bool"}],"stateMutability":"view"},{"type":"function","name":"isApprovedForAll","inputs":[{"name":"account","type":"address","internalType":"address"},{"name":"operator","type":"address","internalType":"address"}],"outputs":[{"name":"","type":"bool","internalType":"bool"}],"stateMutability":"view"},{"type":"function","name":"mint","inputs":[{"name":"name","type":"string","internalType":"string"}],"outputs":[{"name":"tokenId","type":"uint256","internalType":"uint256"}],"stateMutability":"nonpayable"},{"type":"function","name":"mintViaResolver","inputs":[{"name":"name","type":"string","internalType":"string"}],"outputs":[{"name":"tokenId","type":"uint256","internalType":"uint256"}],"stateMutability":"nonpayable"},{"type":"function","name":"renounceRole","inputs":[{"name":"role","type":"bytes32","internalType":"bytes32"},{"name":"callerConfirmation","type":"address","internalType":"address"}],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"revokeRole","inputs":[{"name":"role","type":"bytes32","internalType":"bytes32"},{"name":"account","type":"address","internalType":"address"}],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"safeBatchTransferFrom","inputs":[{"name":"from","type":"address","internalType":"address"},{"name":"to","type":"address","internalType":"address"},{"name":"ids","type":"uint256[]","internalType":"uint256[]"},{"name":"values","type":"uint256[]","internalType":"uint256[]"},{"name":"data","type":"bytes","internalType":"bytes"}],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"safeTransferFrom","inputs":[{"name":"from","type":"address","internalType":"address"},{"name":"to","type":"address","internalType":"address"},{"name":"id","type":"uint256","internalType":"uint256"},{"name":"value","type":"uint256","internalType":"uint256"},{"name":"data","type":"bytes","internalType":"bytes"}],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"setApprovalForAll","inputs":[{"name":"operator","type":"address","internalType":"address"},{"name":"approved","type":"bool","internalType":"bool"}],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"stringToBytes32","inputs":[{"name":"source","type":"string","internalType":"string"}],"outputs":[{"name":"result","type":"bytes32","internalType":"bytes32"}],"stateMutability":"pure"},{"type":"function","name":"supportsInterface","inputs":[{"name":"interfaceId","type":"bytes4","internalType":"bytes4"}],"outputs":[{"name":"","type":"bool","internalType":"bool"}],"stateMutability":"view"},{"type":"function","name":"tokenName","inputs":[{"name":"tokenId","type":"uint256","internalType":"uint256"}],"outputs":[{"name":"","type":"string","internalType":"string"}],"stateMutability":"view"},{"type":"function","name":"uri","inputs":[{"name":"tokenId","type":"uint256","internalType":"uint256"}],"outputs":[{"name":"","type":"string","internalType":"string"}],"stateMutability":"view"},{"type":"event","name":"ApprovalForAll","inputs":[{"name":"account","type":"address","indexed":true,"internalType":"address"},{"name":"operator","type":"address","indexed":true,"internalType":"address"},{"name":"approved","type":"bool","indexed":false,"internalType":"bool"}],"anonymous":false},{"type":"event","name":"NFTMinted","inputs":[{"name":"tokenId","type":"uint256","indexed":true,"internalType":"uint256"},{"name":"to","type":"address","indexed":true,"internalType":"address"},{"name":"name","type":"string","indexed":false,"internalType":"string"}],"anonymous":false},{"type":"event","name":"RoleAdminChanged","inputs":[{"name":"role","type":"bytes32","indexed":true,"internalType":"bytes32"},{"name":"previousAdminRole","type":"bytes32","indexed":true,"internalType":"bytes32"},{"name":"newAdminRole","type":"bytes32","indexed":true,"internalType":"bytes32"}],"anonymous":false},{"type":"event","name":"RoleGranted","inputs":[{"name":"role","type":"bytes32","indexed":true,"internalType":"bytes32"},{"name":"account","type":"address","indexed":true,"internalType":"address"},{"name":"sender","type":"address","indexed":true,"internalType":"address"}],"anonymous":false},{"type":"event","name":"RoleRevoked","inputs":[{"name":"role","type":"bytes32","indexed":true,"internalType":"bytes32"},{"name":"account","type":"address","indexed":true,"internalType":"address"},{"name":"sender","type":"address","indexed":true,"internalType":"address"}],"anonymous":false},{"type":"event","name":"TransferBatch","inputs":[{"name":"operator","type":"address","indexed":true,"internalType":"address"},{"name":"from","type":"address","indexed":true,"internalType":"address"},{"name":"to","type":"address","indexed":true,"internalType":"address"},{"name":"ids","type":"uint256[]","indexed":false,"internalType":"uint256[]"},{"name":"values","type":"uint256[]","indexed":false,"internalType":"uint256[]"}],"anonymous":false},{"type":"event","name":"TransferSingle","inputs":[{"name":"operator","type":"address","indexed":true,"internalType":"address"},{"name":"from","type":"address","indexed":true,"internalType":"address"},{"name":"to","type":"address","indexed":true,"internalType":"address"},{"name":"id","type":"uint256","indexed":false,"internalType":"uint256"},{"name":"value","type":"uint256","indexed":false,"internalType":"uint256"}],"anonymous":false},{"type":"event","name":"URI","inputs":[{"name":"value","type":"string","indexed":false,"internalType":"string"},{"name":"id","type":"uint256","indexed":true,"internalType":"uint256"}],"anonymous":false},{"type":"error","name":"AccessControlBadConfirmation","inputs":[]},{"type":"error","name":"AccessControlUnauthorizedAccount","inputs":[{"name":"account","type":"address","internalType":"address"},{"name":"neededRole","type":"bytes32","internalType":"bytes32"}]},{"type":"error","name":"ERC1155InsufficientBalance","inputs":[{"name":"sender","type":"address","internalType":"address"},{"name":"balance","type":"uint256","internalType":"uint256"},{"name":"needed","type":"uint256","internalType":"uint256"},{"name":"tokenId","type":"uint256","internalType":"uint256"}]},{"type":"error","name":"ERC1155InvalidApprover","inputs":[{"name":"approver","type":"address","internalType":"address"}]},{"type":"error","name":"ERC1155InvalidArrayLength","inputs":[{"name":"idsLength","type":"uint256","internalType":"uint256"},{"name":"valuesLength","type":"uint256","internalType":"uint256"}]},{"type":"error","name":"ERC1155InvalidOperator","inputs":[{"name":"operator","type":"address","internalType":"address"}]},{"type":"error","name":"ERC1155InvalidReceiver","inputs":[{"name":"receiver","type":"address","internalType":"address"}]},{"type":"error","name":"ERC1155InvalidSender","inputs":[{"name":"sender","type":"address","internalType":"address"}]},{"type":"error","name":"ERC1155MissingApprovalForAll","inputs":[{"name":"operator","type":"address","internalType":"address"},{"name":"owner","type":"address","internalType":"address"}]}];

export const TOKEN_MINTER_ABI = [{"type":"constructor","inputs":[{"name":"_nftContract","type":"address","internalType":"address"}],"stateMutability":"nonpayable"},{"type":"function","name":"DEFAULT_ADMIN_ROLE","inputs":[],"outputs":[{"name":"","type":"bytes32","internalType":"bytes32"}],"stateMutability":"view"},{"type":"function","name":"MINTER_ROLE","inputs":[],"outputs":[{"name":"","type":"bytes32","internalType":"bytes32"}],"stateMutability":"view"},{"type":"function","name":"createTokenFromNFT","inputs":[{"name":"nftId","type":"uint256","internalType":"uint256"}],"outputs":[{"name":"tokenAddress","type":"address","internalType":"address"}],"stateMutability":"nonpayable"},{"type":"function","name":"getNFTName","inputs":[{"name":"nftId","type":"uint256","internalType":"uint256"}],"outputs":[{"name":"","type":"string","internalType":"string"}],"stateMutability":"view"},{"type":"function","name":"getRoleAdmin","inputs":[{"name":"role","type":"bytes32","internalType":"bytes32"}],"outputs":[{"name":"","type":"bytes32","internalType":"bytes32"}],"stateMutability":"view"},{"type":"function","name":"getTokenAddress","inputs":[{"name":"nftId","type":"uint256","internalType":"uint256"}],"outputs":[{"name":"","type":"address","internalType":"address"}],"stateMutability":"view"},{"type":"function","name":"grantRole","inputs":[{"name":"role","type":"bytes32","internalType":"bytes32"},{"name":"account","type":"address","internalType":"address"}],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"hasRole","inputs":[{"name":"role","type":"bytes32","internalType":"bytes32"},{"name":"account","type":"address","internalType":"address"}],"outputs":[{"name":"","type":"bool","internalType":"bool"}],"stateMutability":"view"},{"type":"function","name":"nftContract","inputs":[],"outputs":[{"name":"","type":"address","internalType":"contract NFTMinter"}],"stateMutability":"view"},{"type":"function","name":"nftToToken","inputs":[{"name":"","type":"uint256","internalType":"uint256"}],"outputs":[{"name":"","type":"address","internalType":"address"}],"stateMutability":"view"},{"type":"function","name":"onERC1155BatchReceived","inputs":[{"name":"operator","type":"address","internalType":"address"},{"name":"from","type":"address","internalType":"address"},{"name":"ids","type":"uint256[]","internalType":"uint256[]"},{"name":"values","type":"uint256[]","internalType":"uint256[]"},{"name":"data","type":"bytes","internalType":"bytes"}],"outputs":[{"name":"","type":"bytes4","internalType":"bytes4"}],"stateMutability":"pure"},{"type":"function","name":"onERC1155Received","inputs":[{"name":"operator","type":"address","internalType":"address"},{"name":"from","type":"address","internalType":"address"},{"name":"id","type":"uint256","internalType":"uint256"},{"name":"value","type":"uint256","internalType":"uint256"},{"name":"data","type":"bytes","internalType":"bytes"}],"outputs":[{"name":"","type":"bytes4","internalType":"bytes4"}],"stateMutability":"pure"},{"type":"function","name":"renounceRole","inputs":[{"name":"role","type":"bytes32","internalType":"bytes32"},{"name":"callerConfirmation","type":"address","internalType":"address"}],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"revokeRole","inputs":[{"name":"role","type":"bytes32","internalType":"bytes32"},{"name":"account","type":"address","internalType":"address"}],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"supportsInterface","inputs":[{"name":"interfaceId","type":"bytes4","internalType":"bytes4"}],"outputs":[{"name":"","type":"bool","internalType":"bool"}],"stateMutability":"view"},{"type":"function","name":"usedNFTs","inputs":[{"name":"","type":"uint256","internalType":"uint256"}],"outputs":[{"name":"","type":"bool","internalType":"bool"}],"stateMutability":"view"},{"type":"event","name":"NFTReceived","inputs":[{"name":"tokenId","type":"uint256","indexed":true,"internalType":"uint256"},{"name":"from","type":"address","indexed":false,"internalType":"address"}],"anonymous":false},{"type":"event","name":"RoleAdminChanged","inputs":[{"name":"role","type":"bytes32","indexed":true,"internalType":"bytes32"},{"name":"previousAdminRole","type":"bytes32","indexed":true,"internalType":"bytes32"},{"name":"newAdminRole","type":"bytes32","indexed":true,"internalType":"bytes32"}],"anonymous":false},{"type":"event","name":"RoleGranted","inputs":[{"name":"role","type":"bytes32","indexed":true,"internalType":"bytes32"},{"name":"account","type":"address","indexed":true,"internalType":"address"},{"name":"sender","type":"address","indexed":true,"internalType":"address"}],"anonymous":false},{"type":"event","name":"RoleRevoked","inputs":[{"name":"role","type":"bytes32","indexed":true,"internalType":"bytes32"},{"name":"account","type":"address","indexed":true,"internalType":"address"},{"name":"sender","type":"address","indexed":true,"internalType":"address"}],"anonymous":false},{"type":"event","name":"TokenCreated","inputs":[{"name":"nftId","type":"uint256","indexed":true,"internalType":"uint256"},{"name":"tokenAddress","type":"address","indexed":false,"internalType":"address"},{"name":"tokenName","type":"string","indexed":false,"internalType":"string"}],"anonymous":false},{"type":"error","name":"AccessControlBadConfirmation","inputs":[]},{"type":"error","name":"AccessControlUnauthorizedAccount","inputs":[{"name":"account","type":"address","internalType":"address"},{"name":"neededRole","type":"bytes32","internalType":"bytes32"}]}]
