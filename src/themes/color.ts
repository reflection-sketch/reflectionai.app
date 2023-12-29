import { darken } from '@mui/material'
import { IDefaultColor } from './types'

export const defaultThemeColorOptions: IDefaultColor = {
  light: {
    white: '#fff',
    black: '#121212',
    blue: 'blue'
  },
  dark: {
    white: '#000',
    black: '#fff',
    blue: 'blue'
  }
}

export const defaultThemeLightColors = {
  primary: {
    light: '#ADDFB5',
    main: '#1F9898',
    dark: darken('#1F9898', 0.3),
    contrastText: '#1A1C1E'
  },
  secondary: {
    light: '#31B047',
    main: '#99F7F4',
    dark: '#00E4DD',
    contrastText: '#1A1C1E'
  },
  error: {
    main: '#FA0E0E',
    light: '#FA0E0E10'
  },
  warning: {
    main: '#F0B90B'
  },
  info: {
    main: '#1F9898'
  },
  success: {
    main: '#31B047'
  },
  background: {
    default: '#F7F7F7',
    paper: '#FFFFFF',
    secondary: '#484D50'
  },
  text: {
    primary: '#333333',
    secondary: '#828282',
    disabled: '#828282'
  },
  action: {
    disabledOpacity: 0.6,
    disabledBackground: '#F7F7F7'
  }
}

export const defaultThemeDarkColors = {
  primary: {
    light: '#ADDFB5',
    main: '#D8FF20',
    dark: darken('#D8FF20', 0.2),
    contrastText: '#1A1C1E'
  },
  secondary: {
    light: '#31B047',
    main: '#99F7F4',
    dark: '#00E4DD',
    contrastText: '#ffffff'
  },
  error: {
    main: '#FA0E0E',
    light: '#FA0E0E10'
  },
  warning: {
    main: '#F0B90B'
  },
  info: {
    main: '#1F9898'
  },
  success: {
    main: '#31B047'
  },
  background: {
    default: '#343739',
    paper: '#1A1C1E'
  },
  text: {
    primary: '#E6EAEE',
    secondary: '#878D92',
    disabled: '#61666A'
  },
  action: {
    disabledOpacity: 0.6,
    disabledBackground: '#343739'
  }
}
