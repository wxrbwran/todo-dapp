import { HardhatUserConfig } from 'hardhat/config';
import '@nomicfoundation/hardhat-toolbox';
import dotenv from 'dotenv';

dotenv.config();

const config: HardhatUserConfig = {
  solidity: '0.8.19',
  paths: {
    artifacts: './src/artifacts', // 编译生成的合约 artitacts 存放目录
    // cache: './cache', // 编译缓存目录
    sources: './contracts', // 合约源代码目录
    tests: './test' // 测试文件目录
  },
  networks: {
    goerli: {
      url: process.env.ALCHEMY_URL,
      accounts: [process.env.WALLET_PRIVATE_KEY!]
    }
  }
};

export default config;
