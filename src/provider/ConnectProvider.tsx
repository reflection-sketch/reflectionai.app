import { ConnectKitProvider } from 'connectkit'
import React from 'react'
import { wagmiConfig } from './wagmi'
import { WagmiConfig } from 'wagmi'

export default function ConnectProvider({ children }: { children: React.ReactNode }) {
  return (
    <WagmiConfig config={wagmiConfig}>
      <ConnectKitProvider theme="midnight">{children}</ConnectKitProvider>
    </WagmiConfig>
  )
}
