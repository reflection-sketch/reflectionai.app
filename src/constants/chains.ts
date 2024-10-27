import { bsc, bscTestnet, Chain, mainnet, sepolia } from 'viem/chains'

export type ChainInfo = Chain

export enum SupportedChainId {
  BSC = 56,
  BSC_TEST = 97,
  MAINNET = 1,
  SEPOLIA = 11155111
}

export const CHAINS: { [key in SupportedChainId]: ChainInfo } = {
  [SupportedChainId.BSC]: bsc,
  [SupportedChainId.BSC_TEST]: bscTestnet,
  [SupportedChainId.MAINNET]: mainnet,
  [SupportedChainId.SEPOLIA]: sepolia
}

type IEnvironment = 'testnet' | 'dev' | 'prod'
export const CURRENT_ENVIRONMENT = (process.env.NEXT_PUBLIC_VERSION_ENVIRONMENT || 'dev') as IEnvironment

export const NETWORK_CHAIN_ID = Number(process.env.NEXT_PUBLIC_DEFAULT_CHAIN_ID) || SupportedChainId.BSC

export const SUPPORT_NETWORK_CHAIN_IDS: SupportedChainId[] = process.env.NEXT_PUBLIC_CHAIN_IDS
  ? process.env.NEXT_PUBLIC_CHAIN_IDS.split(',').map(v => Number(v) as SupportedChainId)
  : [SupportedChainId.BSC]

export const SupportedChainsInfo: { [x in SupportedChainId]: ChainInfo } = (() => {
  const list: { [x in SupportedChainId]: ChainInfo } = {} as { [x in SupportedChainId]: ChainInfo }
  for (const item of SUPPORT_NETWORK_CHAIN_IDS) {
    const chain = CHAINS[item]
    if (!chain) {
      throw new Error('Unsupported ChainId')
    }
    list[item] = chain
  }
  return list
})()

export const SupportedChainList = SUPPORT_NETWORK_CHAIN_IDS.map(chain => CHAINS[chain]).filter(i => i) as ChainInfo[]
