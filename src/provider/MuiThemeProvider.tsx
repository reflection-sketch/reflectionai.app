import { CssBaseline, StyledEngineProvider, ThemeProvider, createTheme } from '@mui/material'
import React, { useEffect, useMemo } from 'react'
import { useUpdateThemeMode } from 'state/application/hooks'
import { getDesignSystemTheme } from 'themes'

const MuiThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { mode, setThemeMode, getLocalThemeMode } = useUpdateThemeMode()

  useEffect(() => {
    const localThemeMode = getLocalThemeMode()
    if (localThemeMode !== mode) {
      setThemeMode(localThemeMode)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const theme = useMemo(() => createTheme(getDesignSystemTheme(mode)), [mode])

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline enableColorScheme />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  )
}
export default MuiThemeProvider
