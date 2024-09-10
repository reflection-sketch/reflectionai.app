import { defaultWagmiConfig } from '@web3modal/wagmi/react/config'
import { CHAINS, SUPPORT_NETWORK_CHAIN_IDS } from 'constants/chains'
import { Chain } from 'viem'
import { cookieStorage, createStorage } from 'wagmi'

export const projectId = process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID || ''
const metadata = {
  name: 'club-interface',
  description: '',
  url: '',
  icons: []
}

export const wagmiConfig = defaultWagmiConfig({
  chains: SUPPORT_NETWORK_CHAIN_IDS.map(item => CHAINS[Number(item) as keyof typeof CHAINS]) as any as readonly [
    Chain,
    ...Chain[]
  ],
  projectId,
  storage: createStorage({
    storage: cookieStorage
  }),
  metadata,
  ssr: true
})
