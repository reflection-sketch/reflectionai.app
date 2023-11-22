import { useConnectKit } from '@particle-network/connect-react-ui'
import { SupportedChainId, SupportedChainsInfo } from 'constants/chains'
import { useActiveWeb3React } from 'hooks'
import { useCallback } from 'react'
import { triggerSwitchChain } from 'utils/triggerSwitchChain'

export function useNativeSwitchNetwork() {
  const { library, account } = useActiveWeb3React()

  return useCallback(
    (chainId?: SupportedChainId) => {
      if (!chainId) return
      triggerSwitchChain(library, chainId, account || '')
    },
    [account, library]
  )
}

export function useSwitchNetwork() {
  const connectKit = useConnectKit()

  return useCallback(
    (chainId?: SupportedChainId) => {
      if (!chainId) return
      connectKit.switchChain(SupportedChainsInfo[chainId])
    },
    [connectKit]
  )
}
