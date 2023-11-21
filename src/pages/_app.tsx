import 'styles/globals.css'
import type { AppProps } from 'next/app'
import ParticleProvider from 'provider/ParticleProvider'
import StateProvider from 'provider/StateProvider'
import ApplicationUpdater from 'state/application/updater'
import TransactionsUpdater from 'state/transactions/updater'
import { MulticallUpdater } from 'state/multicall'
import GoogleAnalyticsReporter from 'components/analytics/GoogleAnalyticsReporter'

function Updater() {
  return (
    <>
      <ApplicationUpdater />
      <MulticallUpdater />
      <TransactionsUpdater />
    </>
  )
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ParticleProvider>
      <StateProvider>
        <Updater />
        <GoogleAnalyticsReporter />
        <Component {...pageProps} />
      </StateProvider>
    </ParticleProvider>
  )
}
