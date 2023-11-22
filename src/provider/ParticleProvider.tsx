import { ModalProvider } from '@particle-network/connect-react-ui'
import { WalletEntryPosition } from '@particle-network/auth'
import { evmWallets } from '@particle-network/connect'
import '@particle-network/connect-react-ui/esm/index.css'
import { SupportedChainList } from 'constants/chains'

export default function ParticleProvider({ children }: { children: React.ReactNode }) {
  return (
    <ModalProvider
      options={{
        projectId: process.env.NEXT_PUBLIC_PARTICLE_WALLET_PROJECT_ID || '',
        clientKey: process.env.NEXT_PUBLIC_PARTICLE_WALLET_CLIENT_KEY || '',
        appId: process.env.NEXT_PUBLIC_PARTICLE_WALLET_APPID || '',
        chains: SupportedChainList,
        particleWalletEntry: {
          //optional: particle wallet config
          displayWalletEntry: true, //display wallet button when connect particle success.
          defaultWalletEntryPosition: WalletEntryPosition.BR,
          supportChains: SupportedChainList,
          customStyle: {} //optional: custom wallet style
        },
        wallets: evmWallets({
          projectId: process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID || '', //replace with walletconnect projectId
          showQrModal: false
        })
      }}
      theme={'auto'}
      language={'en'} //optional：localize, default en
      walletSort={['Particle Auth', 'Wallet']} //optional：walelt order
      particleAuthSort={[
        //optional：display particle auth items and order
        'email',
        'phone',
        'google',
        'apple',
        'facebook'
      ]}
    >
      {children}
    </ModalProvider>
  )
}
