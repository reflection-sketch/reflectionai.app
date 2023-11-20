import { ChainInfo } from '@particle-network/chains'
import { useNetwork, useAccountInfo } from '@particle-network/connect-react-ui'
import { useMemo } from 'react'
import { providers } from 'ethers'
import { EVMProvider } from '@particle-network/auth'
import { DEFAULT_CHAIN_ID, SupportedChainId } from 'constants/chains'

export function useActiveWeb3React(): {
  chainId?: SupportedChainId
  account?: string
  chainInfo?: ChainInfo
  library?: providers.Web3Provider
  connectId?: string
} {
  const { chain } = useNetwork()
  const { account, connectId, particleProvider } = useAccountInfo()

  const provider = useMemo(() => {
    if (!particleProvider) return undefined
    const network = {
      name: chain?.name || '',
      chainId: chain?.id || DEFAULT_CHAIN_ID
    }
    return new providers.Web3Provider(particleProvider as EVMProvider, network)
  }, [chain?.id, chain?.name, particleProvider])

  return useMemo(
    () => ({
      connectId,
      account,
      chainInfo: chain,
      chainId: chain?.id || DEFAULT_CHAIN_ID,
      library: provider
    }),
    [account, chain, connectId, provider]
  )
}
