import { PaletteMode, ThemeOptions } from '@mui/material'
import { TypographyOptions } from '@mui/material/styles/createTypography'
import { defaultThemeColorOptions, defaultThemeDarkColors, defaultThemeLightColors } from './color'
import { getDefaultComponents } from './components'

export const fontFamily = 'DM Sans'

const TypographyComponent = {
  fontFamily: [`"${fontFamily}"`, 'sans-serif'].join(','),
  h1: { fontSize: 65, lineHeight: '64px' },
  h2: { fontSize: 48, lineHeight: 'normal' },
  h3: { fontSize: 26, lineHeight: 'normal' },
  h4: { fontSize: 16, lineHeight: 'normal' },
  h5: { fontSize: 14, lineHeight: 'normal' },
  h6: { fontSize: 12, lineHeight: 'normal' },
  caption: { fontSize: 12, lineHeight: 'normal' },
  body1: { fontSize: 14, lineHeight: 'normal' },
  body2: { fontSize: 12, lineHeight: 'normal' }
} as TypographyOptions

const getThemeColors = (mode: PaletteMode) => (mode === 'light' ? defaultThemeLightColors : defaultThemeDarkColors)

export const getDesignSystemTheme = (mode: PaletteMode): ThemeOptions => ({
  components: getDefaultComponents(defaultThemeColorOptions[mode].black, fontFamily),
  typography: TypographyComponent,
  spacing: 1,
  shape: {
    borderRadius: 1
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 640,
      md: 860,
      lg: 1200,
      xl: 1440
    }
  },
  palette: {
    mode,
    common: { ...defaultThemeColorOptions[mode] },
    ...getThemeColors(mode)
  }
  // gradient: {
  //   gradient1: '#ffffff linear-gradient(154.62deg, #77C803 9.44%, #28A03E 59.25%);'
  // },
})
