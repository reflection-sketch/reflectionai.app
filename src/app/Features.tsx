'use client'
import { styled, Stack, Typography, Box, SxProps, Theme } from '@mui/material'
import useBreakpoint from 'hooks/useBreakpoint'
import { useEffect, useState } from 'react'
import Star from 'assets/home/features/star.png'
import StepLineSvg from 'assets/home/features/step.svg'
import StepLine1Svg from 'assets/home/features/step1.svg'
import StepLine2Svg from 'assets/home/features/step2.svg'
import StepLine3Svg from 'assets/home/features/step3.svg'
import Line from 'assets/home/features/line.svg'
import Desktop from 'assets/home/features/desktop.png'
import Shadow from 'assets/home/second/shadowSecond.png'
import Image from 'components/Image'
import StreamerButton from 'components/Button/Streamer'
import { CSSTransition } from 'react-transition-group'
import { ButtonBox, FormInput } from './SecondPage'
import ThreeStar from 'assets/home/second/threeStar.png'
import ClearIcon from '@mui/icons-material/Clear'
import StarLine from 'assets/home/features/starLine.png'
import DeskSecond from 'assets/home/second/deskSecond.png'

export const FormCm = ({ sx }: { sx?: SxProps<Theme> }) => {
  const isMd = useBreakpoint('md')
  return (
    <FormBox sx={{ ...sx }}>
      <Box
        display={'flex'}
        alignItems={'center'}
        justifyContent={'space-between'}
        width={'100%'}
        padding={isMd ? '11px 7px' : '11px 26px 7px 11px'}
        bgcolor={'rgba(217, 217, 217, 0.05)'}
      >
        <Box display={'flex'} alignItems={'center'}>
          <Image src={ThreeStar.src} alt="" width={isMd ? 20 : 40} height={isMd ? 20 : 41} />
          <Typography variant="h4" fontSize={isMd ? 14 : 18} fontWeight={900} color={'#fff'}>
            The Reflection AI
          </Typography>
        </Box>
        <ClearIcon style={{ fontSize: isMd ? 16 : 24 }} />
      </Box>
      <Box
        sx={{
          width: '100%',
          padding: isMd ? '11px 16px' : '20px 30px 31px'
        }}
      >
        <Typography variant="h6" mb={10}>
          Required Functionality
        </Typography>
        <FormInput>
          <Typography variant="h6" sx={{ wordBreak: 'break-word' }}>
            An AI-powered system capable of automatically detecting on-chain mining opportunities and assisting with
            automated staking of ETH, BTC, and USDT. The goal is to potentially achieve higher annualized yields while
            maintaining a lower risk profile.
          </Typography>
        </FormInput>
        <Typography variant="h6" mb={10}>
          Platform Requirements
        </Typography>
        <FormInput>
          <Typography
            variant="h6"
            sx={{ wordBreak: 'break-word' }}
          >{`Support for both BSC (Binance Smart Chain) and ETH (Ethereum) networks.`}</Typography>
        </FormInput>
        <ButtonBox>Generate</ButtonBox>
      </Box>
    </FormBox>
  )
}

const TabList = [
  {
    title: 'AI Marketplace',
    text: 'Reflection aims to accelerate AI progress through a decentralized ecosystem connecting creators and users'
  },
  {
    title: 'AI Mini-App Store',
    text: 'Discover & deploy AI-powered apps that integrate multiple models, offering solutions for various industries.'
  },
  {
    title: 'DID Quest Platform',
    text: 'Engage in AI-powered tasks and challenges, earn rewards, and contribute to model training while interacting with project partners in our decentralized ecosystem.'
  }
]

const end = 100
const duration = 10000
const stepTime = 20
const steps = Math.ceil(duration / stepTime)

export default function Page() {
  const isMd = useBreakpoint('md')
  const [tab, setTab] = useState(0)
  const [number, setNumber] = useState(0)

  const stepValue = end / steps
  useEffect(() => {
    let start = 0
    const interval = setInterval(() => {
      start += stepValue
      if (start >= end) {
        setNumber(end)
        clearInterval(interval)
      } else {
        setNumber(Math.round(start))
      }
    }, stepTime)
    return () => clearInterval(interval)
  }, [stepValue])
  if (isMd) {
    return (
      <Stack
        width={'100vw'}
        sx={{
          padding: '80px 42px 70px',
          position: 'relative'
        }}
      >
        <Typography variant="h4" fontSize={17} fontWeight={900} color={'#1F84FF'} textAlign={'center'}>
          AI Pipeline
        </Typography>
        <Typography
          variant="h3"
          fontSize={25}
          fontWeight={900}
          color={'#fff'}
          lineHeight={'50px'}
          textAlign={'center'}
          mt={9}
          mb={34}
        >
          What is Reflection AI?
        </Typography>
        <Image src={DeskSecond.src} alt="" width={'100%'} style={{ opacity: 0.7 }} />
        <Box
          sx={{
            width: 'calc(100vw - 84px)',
            height: 92,
            background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, #000 100%)',
            position: 'absolute',
            top: 372
          }}
        ></Box>
        <Stack gap={30}>
          {TabList.map((item, index) => {
            return (
              <Stack key={index} gap={10}>
                <Typography variant="h4" fontWeight={900} color={'#fff'}>
                  {item.title}
                </Typography>
                <Typography variant="h6" color={'#fff'} sx={{ wordBreak: 'break-word' }}>
                  {item.text}
                </Typography>
              </Stack>
            )
          })}
          <StreamerButton text="Learn More" width={154} sx={{ mt: 11 }} />
        </Stack>
      </Stack>
    )
  }
  return (
    <Box display={'flex'} justifyContent={'space-between'} marginLeft={78} width={'100%'} mt={140} gap={92}>
      <Stack position={'relative'} height={1024} mt={57}>
        <Typography variant="h3" fontWeight={900} color={'#1F84FF'}>
          Our Features
        </Typography>
        <Typography1 variant="h2">What is Reflection AI?</Typography1>
        <Box display={'flex'} gap={42}>
          <Box sx={{ position: 'relative' }}>
            <StepLineSvg />
            <Image
              src={Star.src}
              alt=""
              style={{ position: 'absolute', left: -13, top: tab === 0 ? 0 : tab === 1 ? 122 : 242, zIndex: 2 }}
            />
            {tab === 0 && <StepLine1Svg style={{ position: 'absolute', left: 0, zIndex: 1 }} />}
            {tab === 1 && <StepLine2Svg style={{ position: 'absolute', left: 0, zIndex: 1 }} />}
            {tab === 2 && <StepLine3Svg style={{ position: 'absolute', left: 0, zIndex: 1 }} />}
          </Box>
          <Stack gap={48}>
            {TabList.map((item, index) => {
              return (
                <Box
                  key={index}
                  color={tab === index ? '#fff' : '#333'}
                  sx={{ cursor: 'pointer' }}
                  onClick={() => {
                    setTab(index)
                  }}
                >
                  <Typography variant="h4" fontSize={24} fontWeight={900} mb={5}>
                    {item.title}
                  </Typography>
                  <Typography variant="h4" width={454} sx={{ wordBreak: 'break-word' }}>
                    {item.text}
                  </Typography>
                </Box>
              )
            })}
            <StreamerButton text="Learn More" width={135} sx={{ mt: 2 }} />
          </Stack>
        </Box>
      </Stack>
      <Stack flex={1}>
        <CSSTransition in={tab === 0} timeout={1000} classNames="feature1">
          <Box position={'relative'} width={'100%'} sx={{ opacity: tab === 0 ? 1 : 0 }}>
            <Image src={Desktop.src} alt="" style={{ position: 'absolute', top: 0, left: 0, zIndex: 1 }} />
            <Image src={Shadow.src} alt="" style={{ position: 'absolute', top: -65, left: -65, zIndex: 2 }} />
            <FormCm />
          </Box>
        </CSSTransition>
        <CSSTransition in={tab === 1} timeout={1000} classNames="feature1">
          <Box position={'relative'} width={'100%'} sx={{ opacity: tab === 1 ? 1 : 0 }}>
            <Image src={Desktop.src} alt="" style={{ position: 'absolute', top: 0, left: 0, zIndex: 1 }} />
            <FormBox>
              <Box
                display={'flex'}
                alignItems={'center'}
                justifyContent={'space-between'}
                width={'100%'}
                padding={'11px 26px 7px 11px'}
                bgcolor={'rgba(217, 217, 217, 0.05)'}
              >
                <Box display={'flex'} alignItems={'center'}>
                  <Image src={ThreeStar.src} alt="" />
                  <Typography variant="h4" fontSize={18} fontWeight={900} color={'#fff'}>
                    The Reflection AI
                  </Typography>
                </Box>
                <ClearIcon />
              </Box>
              <Stack
                alignItems={'center'}
                sx={{
                  width: '100%',
                  padding: '50px 30px 28px'
                }}
              >
                <video loop autoPlay muted style={{ width: 1000, height: 1000, margin: '-400px 0' }}>
                  <source src="/video.webm" type="video/webm" />
                  <source src="/video.webm" type="video/mp4" />
                </video>
                <Text mb={34} mt={18}>
                  Exploring Your Mini-App possibilities...
                </Text>
                <Text mb={11} sx={{ display: 'flex', gap: 4 }}>
                  {number} %
                </Text>
                <StyledLine />
                <ButtonBox>Explore</ButtonBox>
              </Stack>
            </FormBox>
          </Box>
        </CSSTransition>
        <CSSTransition in={tab === 2} timeout={1000} classNames="feature1">
          <Box
            position={'relative'}
            width={'100%'}
            sx={{ opacity: tab === 2 ? 1 : 0, '& img': { position: 'absolute' } }}
          >
            <Image src={Desktop.src} alt="" style={{ top: 0, left: 0, zIndex: 2 }} />
            <Image src={StarLine.src} alt="" style={{ top: 50, left: -205, zIndex: 1 }} />
          </Box>
        </CSSTransition>
      </Stack>
    </Box>
  )
}

const Typography1 = styled(Typography)`
  color: #fff;
  font-weight: 900;
  line-height: 50px;
  width: 330px;
  word-break: break-word;
  margin: 22px 0 56px;
`
const FormBox = styled(Box)`
  width: 387px;
  flex-shrink: 0;
  border-radius: 28px;
  border: 1px solid rgba(154, 154, 154, 0.5);
  background: rgba(12, 12, 12, 0.5);
  backdrop-filter: blur(10px);
  z-index: 3;
  position: absolute;
  left: 190px;
  top: 185px;
  overflow: hidden;
`

const Text = styled(Typography)`
  color: rgba(255, 255, 255, 0.5);
  font-size: 18px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  letter-spacing: -0.9px;
`

const StyledLine = styled(Line)`
  transform: rotate(0deg);
  margin-bottom: 23px;
`
