import { ChainInfo, chains } from '@particle-network/chains'

export enum SupportedChainId {
  MAINNET = 1,
  SEPOLIA = 11155111
}

export const SupportedChainIds: SupportedChainId[] = [1, 11155111]

export const DEFAULT_CHAIN_ID = SupportedChainId.SEPOLIA

export const SupportedChainsInfo: { [x in SupportedChainId]: ChainInfo } = (() => {
  const list: { [x in SupportedChainId]: ChainInfo } = {} as { [x in SupportedChainId]: ChainInfo }
  for (const item of SupportedChainIds) {
    const chain = chains.getEVMChainInfoById(item)
    if (!chain) {
      throw new Error('Unsupported ChainId')
    }
    list[item] = chain
  }
  return list
})()
