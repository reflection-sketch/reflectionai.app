import GoogleAnalyticsReporter from 'components/analytics/GoogleAnalyticsReporter'
import type { AppProps } from 'next/app'
import MuiThemeProvider from 'provider/MuiThemeProvider'
import ParticleProvider from 'provider/ParticleProvider'
import StateProvider from 'provider/StateProvider'
import ApplicationUpdater from 'state/application/updater'
import { MulticallUpdater } from 'state/multicall'

function Updater() {
  return (
    <>
      <ApplicationUpdater />
      <MulticallUpdater />
    </>
  )
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ParticleProvider>
      <StateProvider>
        <MuiThemeProvider>
          <Updater />
          <GoogleAnalyticsReporter />
          <Component {...pageProps} />
        </MuiThemeProvider>
      </StateProvider>
    </ParticleProvider>
  )
}
