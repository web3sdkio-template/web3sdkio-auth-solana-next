import { Web3sdkioAuth } from "@web3sdkio/auth/next/solana";

export const { Web3sdkioAuthHandler, getUser } = Web3sdkioAuth({
  privateKey: process.env.WEB3SDKIO_AUTH_PRIVATE_KEY || "",
  domain: "example.com",
});

export default Web3sdkioAuthHandler();
