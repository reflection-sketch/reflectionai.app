import { ChainId, ChainInfo } from '@particle-network/chains'
import { useNetwork, useAccountInfo } from '@particle-network/connect-react-ui'
import { useMemo } from 'react'
import { providers } from 'ethers'

export function useActiveWeb3React(): {
  chainId?: ChainId
  account?: string
  chainInfo?: ChainInfo
  library?: providers.Web3Provider
  connectId?: string
} {
  const { chain } = useNetwork()
  const { account, connectId, particleProvider } = useAccountInfo()

  const provider = useMemo(() => {
    if (!particleProvider) return undefined
    return new providers.Web3Provider(particleProvider as any)
  }, [particleProvider])

  return useMemo(
    () => ({
      connectId,
      account,
      chainInfo: chain,
      chainId: chain?.id,
      library: provider
    }),
    [account, chain, connectId, provider]
  )
}
