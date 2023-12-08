import {
  CssBaseline,
  PaletteMode,
  StyledEngineProvider,
  Theme,
  ThemeOptions,
  ThemeProvider,
  createTheme,
  darken,
  styled
} from '@mui/material'
import { CommonColors } from '@mui/material/styles/createPalette'
import { TypographyOptions } from '@mui/material/styles/createTypography'
import React, { useEffect, useMemo } from 'react'
import { useUpdateThemeMode } from 'state/application/hooks'

const fontFamily = 'Sharp Grotesk DB Cyr Book 20'

export const TypographyComponent = {
  fontFamily: [`"${fontFamily}"`, 'sans-serif'].join(','),
  h1: { fontSize: 36, lineHeight: 46 / 36 },
  h2: { fontSize: 22, lineHeight: 28 / 22 },
  h3: { fontSize: 18, lineHeight: 26 / 18 },
  h4: { fontSize: 16, lineHeight: 24 / 16 },
  h5: { fontSize: 14, lineHeight: 22 / 14 },
  h6: { fontSize: 12, lineHeight: 15 / 12 },
  caption: { fontSize: 12, lineHeight: 32 / 24 },
  body1: { fontSize: 14, lineHeight: 20 / 14 },
  body2: { fontSize: 12, lineHeight: 15 / 12 }
} as TypographyOptions

const buildVar = function (name: string) {
  const NAMESPACE = '--ps-'
  return `${NAMESPACE}${name}`
}

export const ColorOptions = {
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

const themeLightColors = {
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

const themeDarkColors = {
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

export const getThemeColors = (mode: PaletteMode) => (mode === 'light' ? themeLightColors : themeDarkColors)

const getDesignTokens = (mode: PaletteMode): ThemeOptions => ({
  components: {
    MuiCssBaseline: {
      styleOverrides: (theme: Theme) => {
        const common = theme.palette.common
        const vars = Object.keys(common).reduce((prev: any, next) => {
          prev[buildVar(next)] = common[next as unknown as keyof CommonColors]
          return prev
        }, {})

        return {
          html: {
            ...vars,
            '*: hover': {
              transition: '0.2s'
            }
          },
          body: {
            fontFamily,
            fontSize: 14,
            color: ColorOptions[mode].black
          },
          a: {
            textDecoration: 'none',
            color: 'inherit'
          },
          picture: { display: 'inline-flex' },
          input: {
            '&::placeholder': {},
            '&:-webkit-autofill, &:-webkit-autofill:focus': {
              transition: 'background-color 600000s 0s, color 600000s 0s'
            }
          }
        }
      }
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          height: 54,
          'fieldset legend': {
            display: 'none!important'
          },
          '&.Mui-focused': {
            fieldset: {
              borderColor: 'currentColor!important',
              borderWidth: '1px!important'
            }
          }
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 8
        }
      }
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {}
      }
    },
    MuiInputAdornment: {
      styleOverrides: {
        root: {
          '&:not(.MuiInputAdornment-hiddenLabel)': {
            marginTop: '0 !important'
          }
        }
      }
    },
    MuiAutocomplete: {
      styleOverrides: {
        root: {
          '& input': {
            paddingTop: '14px !important'
          }
        },
        popper: {
          paddingTop: 8,
          paddingBottom: 8
        },
        paper: {
          borderRadius: 8,
          boxShadow: 'none'
        },

        option: {
          height: 50
        },
        listbox: {
          '&::-webkit-scrollbar': {
            width: 6
          },
          '&::-webkit-scrollbar-thumb': {
            borderRadius: 4
          }
        }
      }
    },
    MuiContainer: {
      defaultProps: {
        maxWidth: 'xl',
        disableGutters: true
      }
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          '.MuiFormLabel-root + div': {
            'textarea.MuiOutlinedInput-input': {
              paddingTop: '0px!important'
            },
            '.MuiOutlinedInput-input': {
              paddingTop: '18px!important',
              paddingBottom: '0px!important'
            }
          }
        }
      }
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          '& .MuiInputBase-root': {
            marginTop: 0
          }
        }
      }
    },
    MuiButton: {
      defaultProps: {
        disableRipple: true
      },
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontSize: 14,
          fontFamily,
          lineHeight: '20px',
          transition:
            'background-color 400ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms'
        },
        sizeLarge: {
          height: 72,
          borderRadius: 8
        },
        sizeMedium: {
          height: 60,
          borderRadius: 8
        },
        sizeSmall: {
          height: 36,
          borderRadius: 8
        },
        textPrimary: {},
        containedPrimary: {
          boxShadow: 'none'
        },
        outlinedPrimary: {},
        containedSecondary: {
          boxShadow: 'none'
        },
        outlinedSecondary: {}
      }
    },
    MuiSelect: {
      defaultProps: {
        MenuProps: {
          PaperProps: {
            sx: {
              marginTop: 16,
              borderRadius: 20,
              maxHeight: 350,
              boxShadow: 'none',
              '& .MuiMenu-list .MuiListSubheader-sticky': {
                fontSize: 12,
                lineHeight: 20 / 12,
                marginTop: 10,
                marginBottom: 10
              }
            }
          },
          MenuListProps: {
            sx: {
              padding: '6px !important'
            }
          }
        }
      },
      styleOverrides: {
        root: {
          borderRadius: 8,
          border: 0,
          '&:before': {
            border: 0
          },
          '&:after': {
            border: 0
          }
        },
        select: {
          '&:focus': {
            background: 'none'
          }
        },
        icon: {
          right: 14
        }
      }
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          borderRadius: 5
        }
      }
    },
    MuiPagination: {
      styleOverrides: {
        root: {
          '& .MuiPagination-ul': {
            // alignItems: 'baseline'
          },

          '& .MuiPaginationItem-root': {
            height: 32,
            borderRadius: 6,
            width: 32,
            margin: '0 12px'
          }
        }
      }
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily
        }
      }
    }
  },
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
    common: { ...ColorOptions[mode] },
    ...getThemeColors(mode)
  }
  // gradient: {
  //   gradient1: '#ffffff linear-gradient(154.62deg, #77C803 9.44%, #28A03E 59.25%);'
  // },
})

type IMuiThemeProviderProps = {
  children: React.ReactNode
}
export const MuiThemeProvider: React.FC<IMuiThemeProviderProps> = ({ children }) => {
  const { mode, setThemeMode, getLocalThemeMode } = useUpdateThemeMode()

  useEffect(() => {
    const localThemeMode = getLocalThemeMode()
    if (localThemeMode !== mode) {
      setThemeMode(localThemeMode)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode])

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

export const HideOnMobile = styled('div', {
  shouldForwardProp: () => true
})<{ breakpoint?: 'sm' | 'md' | 'lg' }>(({ theme, breakpoint }) => ({
  [theme.breakpoints.down(breakpoint ?? 'sm')]: {
    display: 'none'
  }
}))

export const ShowOnMobile = styled('div', {
  shouldForwardProp: () => true
})<{ breakpoint?: 'sm' | 'md' }>(({ theme, breakpoint }) => ({
  display: 'none',
  [theme.breakpoints.down(breakpoint ?? 'sm')]: {
    display: 'block'
  }
}))
