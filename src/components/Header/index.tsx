import CloseIcon from '@mui/icons-material/Close'
import { Box, Drawer, Stack, SwipeableDrawer, Typography, styled } from '@mui/material'
import ProjectIcon from 'assets/header/projectIcon.png'
import ProjectName from 'assets/header/projectName.png'
import PointSvg from 'assets/header/point.svg'
// import MenuSvg from 'assets/svg/menu.svg'
// import BouncebitSvg from 'assets/svg/bouncebitApp.svg'
// import WhiteHeaderLogoSvg from 'assets/svg/white-logo.svg'
import useBreakpoint from 'hooks/useBreakpoint'
import dynamic from 'next/dynamic'
import { useRouter, usePathname } from 'next/navigation'
// import Link from 'next/link'
const Web3Status = dynamic(() => import('./Web3Status'), { ssr: false })
import Image from 'components/Image'
// import { ROUTES } from 'constants/routes'

// const StyledLogo = styled(WhiteHeaderLogoSvg)(() => ({
//   cursor: 'pointer',
//   '& g': {
//     '& g': {
//       fill: 'var(--ps-text-100)'
//     }
//   }
// }))

const StyleLabel = styled(Typography)(({}) => ({
  width: 'fit-content',
  textDecoration: 'none',
  cursor: 'pointer',
  color: '#EFE2D4',
  fontWeight: 400
}))

interface RouteLinkParams {
  label: string
  link: string
  active: string
  type: 'link' | 'menu' | 'outLink'
  children?: RouteLinkParams[]
  icon?: React.ReactNode
}

const MenuDrawer = ({
  open,
  handleClose,
  links,
  isMd,
  onOpen
}: {
  open: boolean
  handleClose: () => void
  links: RouteLinkParams[]
  isMd?: boolean
  onOpen?: () => void
}) => {
  const router = useRouter()
  const pathname = usePathname()
  const LinkAppItems = ({ list, isChildren }: { list: RouteLinkParams[]; isChildren?: boolean }) => {
    return (
      <Stack
        direction={'column'}
        // gap={{ xs: isChildren ? 20 : 24, md: isChildren ? 20 : 0 }}
        sx={{ padding: isChildren ? '16px' : '0 16px', transition: 'all 0.5s' }}
      >
        {list.map((item: RouteLinkParams, index: number) => {
          return (
            <Box
              key={'route' + index}
              gap={12}
              padding={'16px 0'}
              display={item.label === 'Home' ? 'none' : 'flex'}
              alignItems={'center'}
              onClick={() => {
                if ((item.type === 'link' || item.type === 'menu') && pathname !== item.link) {
                  router.push(item.link)
                  handleClose()
                }
                if (item.type === 'outLink') {
                  window.open(item.link, '_blank')
                  handleClose()
                }
              }}
            >
              {item.icon}
              <Typography
                variant="body1"
                sx={{
                  color: 'var(--ps-text-100)',
                  fontWeight: 600
                }}
              >
                {item.label}
              </Typography>
            </Box>
          )
        })}
      </Stack>
    )
  }
  if (isMd) {
    return (
      <Drawer anchor="top" open={open}>
        <Box sx={{ minHeight: '100vh', background: 'var(--ps-neutral)' }}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '22px 16px'
            }}
          >
            {/* <BouncebitSvg
              onClick={() => {
                if (pathname !== '/') {
                  router.push('/')
                  handleClose()
                }
              }}
            /> */}
            <CloseIcon sx={{ color: 'var(--ps-text-100)' }} onClick={handleClose} />
          </Box>
          <LinkAppItems list={links} />
        </Box>
      </Drawer>
    )
  }
  return (
    <SwipeableDrawer
      anchor="top"
      open={open}
      onOpen={() => {
        onOpen?.()
      }}
      onClose={() => handleClose()}
      sx={{
        '.MuiPaper-root': {
          marginTop: '70px'
        }
      }}
    >
      <Box sx={{ minHeight: '50vh', position: 'relative', background: 'var(--ps-text-primary)' }}>
        <Box maxWidth={1200} margin={'20px auto'}>
          <LinkAppItems list={links} />
        </Box>
      </Box>
    </SwipeableDrawer>
  )
}

const LinkItem = ({ item, isMd }: { item: RouteLinkParams; isMd: boolean }) => {
  const router = useRouter()
  const pathname = usePathname() || ''
  const isActive = (active: string) => {
    if (pathname === '/' && active === '/') {
      return true
    } else {
      if (active === '/') {
        return false
      }
      return pathname.indexOf(active) > -1
    }
  }
  return (
    <Box>
      {(item.type === 'link' || item.type === 'outLink') && (
        <>
          <StyleLabel
            sx={{
              fontSize: isMd ? 12 : 16,
              color: isActive(item.active) ? '#EFE2D4' : '#EFE2D4',
              background: isActive(item.active) ? 'unset' : 'unset'
            }}
            onClick={() => {
              if (item.type === 'link') {
                if (pathname !== item.link) {
                  router.push(item.link)
                }
              } else {
                window.open(item.link, '_blank')
              }
            }}
          >
            {item.label}
          </StyleLabel>
        </>
      )}
      {/* {item.type === 'menu' && (
        <Stack
          flexDirection={'row'}
          alignItems={'center'}
          padding={'28px 24px'}
          sx={{
            color: isActive(item.active) ? 'var(--ps-text-100)' : 'var(--ps-text-40)',
            background: isActive(item.active) ? 'var(--ps-text-primary)' : 'unset',
            cursor: 'pointer',
            position: 'relative',
            '& svg': {
              transform: 'rotate(90deg) scale(.8)',
              '& path': {
                fill: 'var(--ps-text-40)'
              }
            },
            '&:hover': {
              '& .label': {
                color: 'var(--ps-text-100)'
              },
              '& svg': {
                '& path': {
                  fill: 'var(--ps-text-100)'
                }
              },
              '& .children': {
                display: 'block'
              }
            }
          }}
        >
          <StyleLabel
            sx={{
              fontSize: isMd ? 12 : 16
            }}
          >
            {item.label}
          </StyleLabel>
          <Box
            sx={{
              display: 'none',
              position: 'absolute',
              top: '100%',
              borderRadius: '0 0 8px 8px',
              background: 'var(--ps-text-primary)',
              boxShadow: '2px 4px 8px 0px rgba(0, 0, 0, 0.08)',
              left: 0
            }}
          >
            {item.children?.map((temp: RouteLinkParams, index: number) => {
              return (
                <StyleLabel
                  key={index}
                  padding={'16px 24px'}
                  onClick={() => {
                    if (temp.type === 'link') {
                      router.push(temp.link)
                    } else {
                      window.open(temp.link, '_blank')
                    }
                  }}
                  sx={{
                    fontSize: isMd ? 12 : 16
                  }}
                >
                  {temp.label}
                </StyleLabel>
              )
            })}
          </Box>
        </Stack>
      )} */}
    </Box>
  )
}

export default function Header({
  mobileStyle,
  open,
  setOpen
}: {
  mobileStyle?: React.CSSProperties
  open: boolean
  setOpen: (e: boolean) => void
}) {
  // const { mode } = useUpdateThemeMode()
  const router = useRouter()
  const pathname = usePathname()
  // const headerBgOpacity = useHeaderBgOpacity()

  const links: RouteLinkParams[] = [
    // {
    //   label: 'Home',
    //   link: ROUTES.home,
    //   active: '/',
    //   type: 'link'
    // },
    // {
    //   label: 'Node',
    //   link: ROUTES.home,
    //   active: '/',
    //   type: 'link'
    // }
  ]
  const isMd = useBreakpoint('md')
  // const isActive = (active: string) => {
  //   if (pathname === '/' && active === '/') {
  //     return true
  //   } else {
  //     if (active === '/') {
  //       return false
  //     }
  //     return pathname.indexOf(active) > -1
  //   }
  // }

  // ---hidden header in Clubs' functions
  const hiddenPaths = ['/clubs/persona/create', '/clubs/chat']

  const shouldHideHeader = hiddenPaths.some(path => pathname.startsWith(path))

  if (shouldHideHeader && isMd) {
    return null // not render Header
  }

  if (isMd) {
    return (
      <Box>
        <Stack
          direction={'row'}
          justifyContent={'space-between'}
          sx={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            maxWidth: '100vw',
            height: 68,
            zIndex: 999,
            padding: '0 16px',
            // background:
            //   mode === 'light'
            //     ? isClub
            //       ? headerBgOpacity
            //         ? `rgba(230,230,206,${headerBgOpacity})`
            //         : `linear-gradient(180deg, rgba(230,230,206,1) 0%, rgba(255, 255, 255, 0.00) 100%)`
            //       : `rgba(230,230,206,${headerBgOpacity})`
            //     : isClub
            //       ? headerBgOpacity
            //         ? `rgba(0,0,0,${headerBgOpacity})`
            //         : 'linear-gradient(180deg, #0D0D0D 0%, rgba(13, 13, 13, 0.00) 100%)'
            //       : `rgba(0,0,0,${headerBgOpacity})`,
            background: 'var(--ps-neutral)',
            ...mobileStyle
          }}
        >
          <Stack
            direction={'row'}
            justifyContent={'flex-start'}
            alignItems={'center'}
            onClick={() => {
              if (pathname !== '/') {
                router.push('/')
              }
            }}
          >
            <Image src={ProjectIcon.src} alt="" width={31.7} height={25.8} />
            <Image src={ProjectName.src} alt="" width={135.8} height={45} />
          </Stack>
          <Stack
            direction={'row'}
            justifyContent={'flex-end'}
            alignItems={'center'}
            gap={isMd ? 8 : 16}
            flex={isMd ? 1 : 'none'}
          >
            <Web3Status />
            {/* <MenuSvg
              onClick={() => {
                setOpen(!open)
              }}
            /> */}
          </Stack>
        </Stack>
        <MenuDrawer
          open={open}
          handleClose={() => {
            setOpen(false)
          }}
          links={links}
          isMd
        />
        {/* <List
          sx={{
            width: '100vw',
            display: 'flex',
            alignItems: 'center',
            backgroundColor: 'var(--ps-neutral)',
            boxShadow: '0px -4px 12px 0px rgba(0, 0, 0, 0.08)',
            position: 'fixed',
            bottom: 0,
            zIndex: 1030
          }}
        >
          {links.map(text => (
            <Link key={text.label} href={text.link} prefetch style={{ flex: 1, padding: '8px 0px' }}>
              <ListItem disablePadding sx={{ display: 'block' }}>
                <ListItemButton
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      marginBottom: 4,
                      '& svg': {
                        '& path': {
                          fillOpacity: isActive(text.link) ? 1 : 0.4,
                          strokeOpacity: isActive(text.link) ? 1 : 0.4
                        }
                      }
                    }}
                  >
                    {text.icon}
                  </ListItemIcon>
                  <Typography
                    variant="body2"
                    fontSize={12}
                    color={'var(--ps-text-100)'}
                    sx={{
                      display: 'inline-block',
                      whiteSpace: 'nowrap',
                      opacity: 0.4,
                      '&.active': {
                        opacity: 1
                      }
                    }}
                  >
                    {text.label}
                  </Typography>
                </ListItemButton>
              </ListItem>
            </Link>
          ))}
        </List> */}
      </Box>
    )
  }
  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        width: '100%',
        zIndex: 1201,
        marginTop: 22,
        background: 'transparent'
        // mode === 'light'
        //   ? isClub
        //     ? headerBgOpacity
        //       ? `rgba(230,230,206,${headerBgOpacity})`
        //       : `var(--ps-neutral3)`
        //     : `rgba(230,230,206,${headerBgOpacity})`
        //   : isClub
        //     ? headerBgOpacity
        //       ? `rgba(0,0,0,${headerBgOpacity})`
        //       : 'linear-gradient(180deg, #0D0D0D 0%, rgba(13, 13, 13, 0.00) 100%)'
        //     : `rgba(0,0,0,${headerBgOpacity})`
      }}
    >
      <Stack
        direction={'row'}
        justifyContent={'space-between'}
        sx={{
          position: 'relative',
          width: 1440,
          padding: '0 36px 0 54px',
          margin: '0 auto'
        }}
      >
        <Stack
          direction={'row'}
          justifyContent={'flex-start'}
          alignItems={'center'}
          onClick={() => {
            if (pathname !== '/') {
              router.push('/')
            }
          }}
        >
          <Image src={ProjectIcon.src} alt="" />
          <Image src={ProjectName.src} alt="" />
        </Stack>
        <Stack direction={'row'} gap={35} flex={1} justifyContent={'center'} alignItems={'center'}>
          {links.map((item: RouteLinkParams, j: number) => {
            return (
              <Stack key={'route' + j} direction={'row'} gap={35} justifyContent={'center'} alignItems={'center'}>
                <LinkItem item={item} isMd={isMd} />
                {j < links.length - 1 && <PointSvg />}
              </Stack>
            )
          })}
        </Stack>
        <Stack direction={'row'} justifyContent={'flex-end'} alignItems={'center'} height={'100%'}>
          <Web3Status />
        </Stack>
      </Stack>
    </Box>
  )
}
