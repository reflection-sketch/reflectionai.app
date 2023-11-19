import 'styles/globals.css'
import type { AppProps } from 'next/app'
import ParticleProvider from 'provider/ParticleProvider'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ParticleProvider>
      <Component {...pageProps} />
    </ParticleProvider>
  )
}
