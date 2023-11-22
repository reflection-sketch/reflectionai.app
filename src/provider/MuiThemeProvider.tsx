import { CssBaseline, Theme, ThemeOptions, ThemeProvider, createTheme, styled } from '@mui/material'
import { CommonColors } from '@mui/material/styles/createPalette'
import { TypographyOptions } from '@mui/material/styles/createTypography'
import React, { createContext, useCallback, useMemo, useState } from 'react'

export const TypographyComponent = {
  fontFamily: [`"Sharp Grotesk DB Cyr Book 20"`, 'sans-serif'].join(','),
  h1: { fontSize: 36, lineHeight: 46 / 36, fontFamily: '"Sharp Grotesk DB Cyr Medium 22"' },
  h2: { fontSize: 22, lineHeight: 28 / 22, fontFamily: '"Sharp Grotesk DB Cyr Medium 22"' },
  h3: { fontSize: 18, lineHeight: 26 / 18, fontFamily: '"Sharp Grotesk DB Cyr Medium 22"' },
  h4: { fontSize: 16, lineHeight: 24 / 16, fontFamily: '"Sharp Grotesk DB Cyr Medium 22"' },
  h5: { fontSize: 14, lineHeight: 22 / 14, fontFamily: '"Sharp Grotesk DB Cyr Medium 22"' },
  h6: { fontSize: 12, lineHeight: 15 / 12, fontFamily: '"Sharp Grotesk DB Cyr Medium 22"' },
  // caption: { fontSize: 12, lineHeight: 32 / 24, fontFamily: '"Sharp Grotesk DB Cyr Medium 22"' },
  body1: { fontSize: 14, lineHeight: 20 / 14, fontFamily: `"Sharp Grotesk DB Cyr Book 20"` },
  body2: { fontSize: 12, lineHeight: 15 / 12, fontFamily: `"Sharp Grotesk DB Cyr Book 20"` }
} as TypographyOptions
type PaletteMode = 'light' | 'dark'
export interface IThemeModeContext {
  toggleThemeMode: () => void
}
const buildVar = function (name: string) {
  const NAMESPACE = '--ps-'
  return `${NAMESPACE}${name}`
}
const ThemeModeContext = createContext<IThemeModeContext | null>(null)
export const ColorOptions = {
  light: {
    white: '#fff',
    black: '#121212',
    primary: '#fff',
    secondary: '#121212',
    text: '#171717',
    success: '#73D491',
    warn: '#EBBC42',
    error: '#EB4242',
    // Gray
    'gray-900': '#171717',
    'gray-800': '#404040',
    'gray-700': '#878A8E',
    'gray-600': '#908E96',
    'gray-500': '#B3B7C8',
    'gray-400': '#C5C5C5',
    'gray-300': '#D8DBE7',
    'gray-200': '#E6E6E6',
    'gray-100': '#EBECEF',
    'gray-50': '#F5F5F5',
    'gray-30': '#EDEDED',
    'border-1': 'rgba(18, 18, 18, 0.2)',
    'gray-20': '#E8E9E4',
    // Green
    green: '#73D491',
    'green-1': '#20994B',
    // Blue
    blue: '#2663FF',
    'blue-50': '#245AE7',
    'blue-100': '#2150CC',
    // yellow
    'yellow-1': '#E1F25C',
    'yellow-2': '#B5E529',
    // text-color or bg-color
    'text-1': '#626262',
    'text-2': '#959595',
    'text-3': '#121212',
    'text-4': '#20201E',
    'text-5': '#D7D6D9',
    'text-6': '#58595B',
    'text-7': '#2B51DA',
    'text-8': '#f6f7f3'
  },
  dark: {
    white: '#000',
    black: '#fff',
    primary: '#292422',
    secondary: '#292422',
    text: '#C1BFB3',
    success: '#73D491',
    warn: '#EBBC42',
    error: '#EB4242',
    'gray-900': '#171717',
    'gray-800': '#404040',
    'gray-700': '#878A8E',
    'gray-600': '#908E96',
    'gray-500': '#B3B7C8',
    'gray-400': '#C5C5C5',
    'gray-300': '#D8DBE7',
    'gray-200': '#E6E6E6',
    'gray-100': '#EBECEF',
    'gray-50': '#F5F5F5',
    'gray-30': '#EDEDED',
    'gray-20': '#E8E9E4',
    'border-1': 'rgba(18, 18, 18, 0.2)',
    // Green
    green: '#73D491',
    'green-1': '#20994B',
    // Blue
    blue: '#2663FF',
    'blue-50': '#245AE7',
    'blue-100': '#2150CC',
    // yellow
    'yellow-1': '#E1F25C',
    'yellow-2': '#B5E529',
    // text-color or bg-color
    'text-1': '#626262',
    'text-2': '#959595',
    'text-3': '#121212',
    'text-4': '#20201E',
    'text-5': '#D7D6D9',
    'text-6': '#58595B',
    'text-7': '#2B51DA',
    'text-8': '#f6f7f3'
  }
}
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
              transition: '0.3s'
            },
            '& .PSans': {
              fontFamily: 'Inter'
            }
          },
          body: {
            fontFamily: `"Sharp Grotesk DB Cyr Book 20"`,
            fontSize: 14,
            color: ColorOptions[mode].text,
            background: '#F6F7F3'
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
          border: '1px solid var(--ps-white)',
          '&:hover': {
            borderColor: 'var(--ps-yellow-1)'
          },
          backgroundColor: 'var(--ps-white)',
          'fieldset legend': {
            display: 'none!important'
          },
          '.MuiOutlinedInput-notchedOutline': {
            borderColor: 'var(--ps-gray-300)',
            top: 0
          },
          '&.Mui-focused': {
            fieldset: {
              borderColor: 'currentColor!important',
              borderWidth: '1px!important'
            }
          },
          '&.Mui-error': {
            color: 'var(--ps-error)',
            borderColor: 'var(--ps-error)'
          },
          '&.Mui-disabled': {
            '.Mui-disabled': {
              color: 'var(--ps-gray-300)',
              WebkitTextFillColor: 'var(--ps-gray-300)'
            }
          },
          '&.MuiInputBase-multiline': {
            height: 'auto',
            position: 'relative',
            padding: '20px 20px 36px',
            boxSizing: 'border-box',
            '& .endAdorn': {
              position: 'absolute',
              bottom: 16,
              right: 20,
              color: 'var(--ps-gray-700)'
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
        root: {
          color: 'var(--ps-gray-700)',
          display: 'flex',
          '&.MuiInputLabel-animated': {
            transform: 'translate(14px, 20px) scale(1)'
          },
          '&.MuiInputLabel-animated.Mui-focused': {
            transform: 'translate(14px, 12px) scale(0.75)'
          },
          '&.MuiInputLabel-animated.MuiFormLabel-filled': {
            transform: 'translate(14px, 12px) scale(0.75)'
          },
          '&.Mui-focused': {
            color: 'var(--ps-gray-700)'
          },
          '&.Mui-error': {
            color: ' var(--ps-error)'
          }
        }
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
          backgroundColor: 'var(--ps-white)',
          border: '1px solid var(--ps-gray-300)',
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
            background: 'var(--ps-gray-200)',
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
          color: 'var(--ps-text)',
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
          fontFamily: `'Inter'`,
          lineHeight: '20px',
          transition:
            'background-color 400ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
          '&:disabled': {
            // border: '1px solid var(--ps-text-5)',
            background: 'var(--ps-text-5)',
            color: 'var(--ps-white)'
          },
          '&:hover': {
            background: 'var(--ps-yellow-1)'
            // border: '1px solid var(--ps-yellow-1)'
          },
          '&:active': {
            background: 'var(--ps-yellow-1)',
            // border: '1px solid var(--ps-yellow-1)',
            color: 'var(--ps-primary)'
          }
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
        textPrimary: {
          // background: 'var(--ps-gray-50)',
          color: '#000000',
          '&:hover': {
            background: 'var(--ps-yellow-1)'
          },
          '&:active': {
            background: 'var(--ps-yellow-1)',
            color: '#000000'
          }
        },
        containedPrimary: {
          background: 'var(--ps-yellow-1)',
          color: 'var(--ps-text-3)',
          boxShadow: 'none',
          '&:hover': {
            boxShadow: 'none',
            background: 'var(--ps-gray-900)',
            borderColor: 'var(--ps-yellow-1)',
            color: 'var(--ps-white)'
          },
          '&:active': {
            background: 'var(--ps-gray-900)',
            color: 'var(--ps-white)'
          },
          '&:disabled': {
            border: '1px solid var(--ps-text-5)',
            background: 'var(--ps-text-5)',
            color: 'var(--ps-white)'
          }
        },
        outlinedPrimary: {
          border: '1px solid var(--ps-gray-20)',
          background: 'var(--ps-primary)',
          color: 'var(--ps-gray-900)',
          '&:hover': {
            background: 'var(--ps-yellow-1)',
            border: '1px solid var(--ps-yellow-1)'
          },
          '&:active': {
            background: 'var(--ps-yellow-1)',
            border: '1px solid var(--ps-yellow-1)',
            color: 'var(--ps-primary)'
          },
          '&:disabled': {
            border: '1px solid var(--ps-text-5)',
            background: 'var(--ps-text-5)',
            color: 'var(--ps-white)'
          }
        },
        containedSecondary: {
          background: 'var(--ps-gray-900)',
          color: 'var(--ps-white)',
          boxShadow: 'none',
          '&:hover': {
            boxShadow: 'none',
            background: 'var(--ps-yellow-1)',
            color: 'var(--ps-text-3)'
          }
        },
        outlinedSecondary: {
          border: '1px solid var(--ps-gray-20)',
          backgroundColor: 'var(--ps-white)',
          '&:hover': {
            border: '1px solid var(--ps-yellow-1)',
            backgroundColor: 'var(--ps-white)'
          },
          '&:active': {
            border: '1px solid var(--ps-yellow-1)',
            backgroundColor: 'var(--ps-white)'
          }
        }
      }
    },
    MuiSelect: {
      defaultProps: {
        MenuProps: {
          PaperProps: {
            sx: {
              marginTop: 16,
              border: '1px solid #E4E4E4',
              borderRadius: 20,
              maxHeight: 350,
              boxShadow: 'none',
              '&:focus': {
                border: '1px solid var(--ps-yellow-1)'
              },
              '& .MuiMenu-list .MuiListSubheader-sticky': {
                color: '#878A8E',
                fontSize: 12,
                lineHeight: 20 / 12,
                marginTop: 10,
                marginBottom: 10
              }
            }
          },
          MenuListProps: {
            sx: {
              padding: '6px !important',
              '& .MuiMenuItem-root.Mui-selected': {
                justifyContent: 'space-between',
                color: '#121212',
                height: 48,
                borderRadius: 100,
                background: '#E1F25C'
                // '&::after': {
                //   content: `' '`,
                //   width: 20,
                //   height: 20,
                //   background: `url(${CheckedSVG}) no-repeat center`
                // },
              },
              '& .MuiMenuItem-root': {
                color: '#121212',
                height: 48
              },
              '& .MuiMenuItem-root:hover': {
                color: '#A4D220',
                background: 'transparent'
              }
            }
          }
        }
      },
      styleOverrides: {
        root: {
          borderRadius: 8,
          background: 'var(--ps-white)',
          border: 0,
          fieldset: { borderColor: 'var(--ps-text-8)' },
          '&:before': {
            border: 0
          },
          '&:after': {
            border: 0
          },
          '&:hover, &:active, &:focus': {
            background: 'var(--ps-text-8)',
            border: '1px solid var(--ps-yellow-1)',
            fieldset: { borderColor: 'unset !important', borderWidth: 0, border: 0 },
            '&:not(.Mui-disabled):before': {
              border: 'none'
            }
          },
          '&.Mui-focused': {
            background: 'var(--ps-white)',
            border: '1px solide var(--ps-yellow-1)',
            fieldset: { borderColor: 'var(--ps-yellow-1) !important', borderWidth: 'unset !impoartant' }
          },
          '&.Mui-disabled': {
            background: 'var(--ps-white)'
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
          color: '#000000',
          borderRadius: 5,
          padding: '7px 10px',
          '&.Mui-checked': {
            color: '#2663FF'
          }
        }
      }
    },
    MuiPagination: {
      styleOverrides: {
        root: {
          '& .MuiPagination-ul': {
            // alignItems: 'baseline'
          },
          ' .MuiPagination-ul>li:not(:first-of-type):not(:last-child) .MuiPaginationItem-root': {
            border: 0,
            color: 'var(--ps-text-3)',
            fontFamily: `'Inter'`,
            fontWight: 400,
            fontSize: 16,
            '&.Mui-selected': {
              color: 'var(--ps-text-3)',
              background: 'var(--ps-yellow-1)'
            },
            '&:hover': {
              backgroundColor: 'var(--ps-text-1)',
              color: '#fff'
            }
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
          fontFamily: `'Inter'`
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
    ...{
      divider: ColorOptions[mode].text,
      primary: {
        main: ColorOptions[mode].primary,
        contrastText: ColorOptions[mode].text
      },
      secondary: {
        main: ColorOptions[mode].secondary,
        contrastText: ColorOptions[mode].text
      },
      info: {
        main: ColorOptions[mode]['gray-50'],
        contrastText: ColorOptions[mode]['gray-700']
      },
      success: {
        main: ColorOptions[mode].success,
        contrastText: ColorOptions[mode].text
      },
      warning: {
        main: ColorOptions[mode].warn,
        contrastText: ColorOptions[mode].text
      },
      error: {
        main: ColorOptions[mode].error,
        contrastText: ColorOptions[mode].text
      }
    }
  }
  // gradient: {
  //   gradient1: '#ffffff linear-gradient(154.62deg, #77C803 9.44%, #28A03E 59.25%);'
  // },
  // height: {
  //   header: '76px',
  //   mobileHeader: '51px',
  //   footer: '60px'
  // },
  // width: {
  //   sidebar: '250px',
  //   maxContent: '1110px'
  // }
})
export const useMuiThemes = () => {
  const [mode, setMode] = useState<PaletteMode>('light')
  const toggleThemeMode = useCallback(() => {
    setMode(mode === 'light' ? 'dark' : 'light')
  }, [mode])
  const themes = useMemo(() => {
    const theme = getDesignTokens(mode)
    return createTheme(theme)
  }, [mode])

  return {
    themes,
    toggleThemeMode
  }
}
type IMuiThemeProviderProps = {
  children: React.ReactNode
}
export const MuiThemeProvider: React.FC<IMuiThemeProviderProps> = ({ children }) => {
  const { themes, toggleThemeMode } = useMuiThemes()
  return (
    <ThemeModeContext.Provider value={{ toggleThemeMode }}>
      <ThemeProvider theme={themes}>
        <CssBaseline enableColorScheme />
        {children}
      </ThemeProvider>
    </ThemeModeContext.Provider>
  )
}

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
export default MuiThemeProvider
