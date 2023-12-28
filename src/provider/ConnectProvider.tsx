import { ConnectKitProvider } from 'connectkit'
import React from 'react'
import { wagmiConfig } from './wagmi'
import { WagmiConfig } from 'wagmi'
import { useUpdateThemeMode } from 'state/application/hooks'

export default function ConnectProvider({ children }: { children: React.ReactNode }) {
  const { mode: themeMode } = useUpdateThemeMode()
  return (
    <WagmiConfig config={wagmiConfig}>
      <ConnectKitProvider theme={themeMode === 'light' ? 'nouns' : 'midnight'}>{children}</ConnectKitProvider>
    </WagmiConfig>
  )
}
