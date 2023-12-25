import GoogleAnalyticsReporter from 'components/analytics/GoogleAnalyticsReporter'
import type { AppProps } from 'next/app'
import MuiThemeProvider from 'provider/MuiThemeProvider'
import ParticleProvider from 'provider/ParticleProvider'
import StateProvider from 'provider/StateProvider'
import { ModalProvider } from 'provider/ModalProvider'
import ApplicationUpdater from 'state/application/updater'
import TransactionsUpdater from 'state/transactions/updater'
import { MulticallUpdater } from 'state/multicall'
import BigNumber from 'bignumber.js'
import Popups from 'components/essential/Popups'

BigNumber.config({ EXPONENTIAL_AT: [-20, 40], ROUNDING_MODE: BigNumber.ROUND_DOWN })

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
        <MuiThemeProvider>
          <Updater />
          <Popups />
          <GoogleAnalyticsReporter />
          <ModalProvider>
            <Component {...pageProps} />
          </ModalProvider>
        </MuiThemeProvider>
      </StateProvider>
    </ParticleProvider>
  )
}
