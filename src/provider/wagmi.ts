import { configureChains, createConfig } from 'wagmi'
import { alchemyProvider } from 'wagmi/providers/alchemy'
// import { infuraProvider } from 'wagmi/providers/infura'
// import { jsonRpcProvider } from '@wagmi/core/providers/jsonRpc'
import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet'
import { InjectedConnector } from 'wagmi/connectors/injected'
import { MetaMaskConnector } from 'wagmi/connectors/metaMask'
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect'
import { getDefaultConfig } from 'connectkit'
import { CHAINS, SUPPORT_NETWORK_CHAIN_IDS } from 'constants/chains'

// Configure chains & providers with the Alchemy provider.
// Two popular providers are Alchemy (alchemy.com) and Infura (infura.io)
export const projectId = process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID || ''
const { chains, publicClient, webSocketPublicClient } = configureChains(
  SUPPORT_NETWORK_CHAIN_IDS.map(item => CHAINS[Number(item) as keyof typeof CHAINS]),
  [
    alchemyProvider({ apiKey: '74_McmNwAy18tBibLLM2aFmRdiihOcwa' })
    // infuraProvider({ apiKey: '74_McmNwAy18tBibLLM2aFmRdiihOcwa' })
  ]
)

// Set up client
export const wagmiConfig = createConfig({
  ...getDefaultConfig({
    appName: 'App Name',
    chains,
    walletConnectProjectId: projectId
  }),
  ...{
    autoConnect: true,
    connectors: [
      new MetaMaskConnector({ chains }),
      new CoinbaseWalletConnector({
        chains,
        options: {
          appName: 'wagmi'
        }
      }),
      new WalletConnectConnector({
        chains,
        options: {
          projectId,
          showQrModal: false
        }
      }),
      new InjectedConnector({
        chains,
        options: {
          name: 'Injected',
          shimDisconnect: true
        }
      })
    ],
    publicClient,
    webSocketPublicClient
  }
})
