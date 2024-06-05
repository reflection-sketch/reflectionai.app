import { createConfig, http, WagmiProvider } from 'wagmi'
import { sepolia, mainnet } from 'wagmi/chains'
import React from 'react'
// import { SupportedChainList } from '../constants/chains'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { createWeb3Modal } from '@web3modal/wagmi/react'
import { coinbaseWallet, walletConnect } from 'wagmi/connectors'
export const projectId = process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID || ''

export const wagmiConfig = createConfig({
  chains: [sepolia, mainnet],
  ssr: true,
  connectors: [walletConnect({ projectId: projectId, showQrModal: false }), coinbaseWallet()],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http()
  }
})

const queryClient = new QueryClient()

createWeb3Modal({
  themeVariables: {
    '--w3m-z-index': 10000
  },
  projectId,
  wagmiConfig
  // default show wallet type
  // chains: SupportedChainList
})

export default function ConnectProvider({ children }: { children: React.ReactNode }) {
  return (
    <WagmiProvider config={wagmiConfig}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  )
}
