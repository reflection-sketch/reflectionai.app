import { ModalProvider } from '@particle-network/connect-react-ui'
import { WalletEntryPosition } from '@particle-network/auth'
import { Ethereum, EthereumSepolia } from '@particle-network/chains'
import { evmWallets } from '@particle-network/connect'
import '@particle-network/connect-react-ui/esm/index.css'

export default function ParticleProvider({ children }: { children: React.ReactNode }) {
  return (
    <ModalProvider
      options={{
        projectId: '7b96ff1f-6628-442d-91d8-20874cf19ab2',
        clientKey: 'cXZeTagloKdoWn13nsoXUqn5dYhFLtFbO88nTXCi',
        appId: '0b4cabf4-e7f0-4d3a-a32b-363273857aa1',
        chains: [EthereumSepolia, Ethereum],
        particleWalletEntry: {
          //optional: particle wallet config
          displayWalletEntry: true, //display wallet button when connect particle success.
          defaultWalletEntryPosition: WalletEntryPosition.BR,
          supportChains: [EthereumSepolia, Ethereum],
          customStyle: {} //optional: custom wallet style
        },
        wallets: evmWallets({
          projectId: '41301e8365d2d65b321281fd10eab138', //replace with walletconnect projectId
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
