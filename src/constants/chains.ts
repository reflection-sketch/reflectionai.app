import { ChainInfo, chains } from '@particle-network/chains'

export enum SupportedChainId {
  MAINNET = 1,
  SEPOLIA = 11155111
}

export const SupportedChainIds: SupportedChainId[] = process.env.NEXT_PUBLIC_CHAIN_IDS
  ? process.env.NEXT_PUBLIC_CHAIN_IDS.split(',').map(v => Number(v) as SupportedChainId)
  : [SupportedChainId.MAINNET]

export const DEFAULT_CHAIN_ID = Number(process.env.NEXT_PUBLIC_DEFAULT_CHAIN_ID) || SupportedChainId.MAINNET

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

export const SupportedChainList = SupportedChainIds.map(chain => chains.getEVMChainInfoById(chain)).filter(
  i => i
) as ChainInfo[]
