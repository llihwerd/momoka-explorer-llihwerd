export const ARWEAVE_GATEWAY_URL = 'https://arweave.net';
export const IPFS_GATEWAY_URL = 'https://gateway.ipfscdn.io/ipfs';
export const BUNDLR_SPENT_API = 'https://node1.bundlr.network/bulk/account/spending/matic';

export enum LensterUrl {
  STAGING = 'https://staging.lenster.xyz',
  TESTNET = 'https://testnet.lenster.xyz',
  PRODUCTION = 'https://lenster.xyz'
}

export enum LensEndpoint {
  STAGING = 'https://staging-api-social-mumbai.lens.crtlkey.com',
  TESTNET = 'https://api-mumbai.lens.dev',
  PRODUCTION = 'https://api.lens.dev'
}

export enum VerifierNetwork {
  POLYGON = 'POLYGON',
  MUMBAI = 'MUMBAI',
  SANDBOX = 'SANDBOX'
}

export enum VerifierDeployment {
  PRODUCTION = 'PRODUCTION',
  STAGING = 'STAGING',
  LOCAL = 'LOCAL'
}

export enum FEATURE_FLAGS {
  STAGING_ENVIRONMENT = 'STAGING_ENVIRONMENT'
}

type FeatureFlag = {
  flag: string;
  enabledFor: string[];
};

export const featureFlags: FeatureFlag[] = [
  {
    flag: FEATURE_FLAGS.STAGING_ENVIRONMENT,
    enabledFor: [
      '0x4A1a2197f307222cD67A1762D9A352F64558d9Be', // wagmi
      '0x01d79BcEaEaaDfb8fD2F2f53005289CFcF483464', // sasicodes
      '0x3A5bd1E37b099aE3386D13947b6a90d97675e5e3', // yoginth
      '0x7241DDDec3A6aF367882eAF9651b87E1C7549Dff', // stani
      '0xcA1F6d7d8E902617f8Bdd87866e00f9844C40a77' // jouni
    ]
  }
];
