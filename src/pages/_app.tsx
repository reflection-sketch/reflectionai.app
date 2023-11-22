import { ThemeProvider } from '@mui/material/styles'
import GoogleAnalyticsReporter from 'components/analytics/GoogleAnalyticsReporter'
import type { AppProps } from 'next/app'
import muiTheme from 'provider/MuiThemeProvider'
import ParticleProvider from 'provider/ParticleProvider'
import StateProvider from 'provider/StateProvider'
import ApplicationUpdater from 'state/application/updater'
import TransactionsUpdater from 'state/transactions/updater'
import { MulticallUpdater } from 'state/multicall'

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
        <ThemeProvider theme={muiTheme}>
          <Updater />
          <GoogleAnalyticsReporter />
          <Component {...pageProps} />
        </ThemeProvider>
      </StateProvider>
    </ParticleProvider>
  )
}
