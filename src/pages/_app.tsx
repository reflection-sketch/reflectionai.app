import 'styles/globals.css'
import type { AppProps } from 'next/app'
import ParticleProvider from 'provider/ParticleProvider'
import StateProvider from 'provider/StateProvider'
import ApplicationUpdater from 'state/application/updater'

function Updater() {
  return (
    <>
      <ApplicationUpdater />
    </>
  )
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ParticleProvider>
      <StateProvider>
        <Updater />
        <Component {...pageProps} />
      </StateProvider>
    </ParticleProvider>
  )
}
