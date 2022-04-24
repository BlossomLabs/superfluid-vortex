'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// ETHERSCAN - Mainnet, Rinkeby, etc
const ETHERSCAN_NETWORK_TYPES = new Map([['main', ''], ['kovan', 'kovan.'], ['rinkeby', 'rinkeby.'], ['ropsten', 'ropsten.'], ['goerli', 'goerli.']]);
const ETHERSCAN_TYPES = new Map([['block', 'block'], ['transaction', 'tx'], ['address', 'address'], ['token', 'token']]); // BLOCKSCOUT - xDai

const BLOCKSCOUT_NETWORK_TYPES = new Map([['xdai', 'xdai'], ['sokol', 'sokol']]);
const BLOCKSCOUT_TYPES = new Map([['block', 'block'], ['transaction', 'tx'], ['address', 'address'], ['token', 'token']]); // POLYGONSCAN - Polygon

const POLYGONSCAN_NETWORK_TYPES = new Map([['polygon', ''], ['mumbai', 'mumbai.']]);
const POLYGONSCAN_TYPES = new Map([['block', 'block'], ['transaction', 'tx'], ['address', 'address'], ['token', 'token']]); // ARBISCAN - Arbitrum

const ARBISCAN_NETWORK_TYPES = new Map([['arbitrum', ''], ['arbtest', 'testnet.']]);
const ARBISCAN_TYPES = new Map([['block', 'block'], ['transaction', 'tx'], ['address', 'address'], ['token', 'token']]);

exports.ARBISCAN_NETWORK_TYPES = ARBISCAN_NETWORK_TYPES;
exports.ARBISCAN_TYPES = ARBISCAN_TYPES;
exports.BLOCKSCOUT_NETWORK_TYPES = BLOCKSCOUT_NETWORK_TYPES;
exports.BLOCKSCOUT_TYPES = BLOCKSCOUT_TYPES;
exports.ETHERSCAN_NETWORK_TYPES = ETHERSCAN_NETWORK_TYPES;
exports.ETHERSCAN_TYPES = ETHERSCAN_TYPES;
exports.POLYGONSCAN_NETWORK_TYPES = POLYGONSCAN_NETWORK_TYPES;
exports.POLYGONSCAN_TYPES = POLYGONSCAN_TYPES;
//# sourceMappingURL=provider-types.js.map
