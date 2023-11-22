import { ThemeProvider } from '@mui/material/styles'
import type { AppProps } from 'next/app'
import muiTheme from 'provider/MuiThemeProvider'
import ParticleProvider from 'provider/ParticleProvider'
import StateProvider from 'provider/StateProvider'
import ApplicationUpdater from 'state/application/updater'
import { MulticallUpdater } from 'state/multicall'
import 'styles/globals.css'
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
        <ThemeProvider theme={muiTheme}>
          <Updater />
          <Component {...pageProps} />
        </ThemeProvider>
      </StateProvider>
    </ParticleProvider>
  )
}
