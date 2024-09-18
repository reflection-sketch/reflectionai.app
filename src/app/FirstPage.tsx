'use client'
import { Box, styled, Stack, Typography } from '@mui/material'
import useBreakpoint from 'hooks/useBreakpoint'
import ProjectName from 'assets/header/projectName.png'
import Node from 'assets/home/first/node.png'
import Image from 'components/Image'
import ArrowSvg from '@mui/icons-material/ArrowForward'
import { useEffect, useState } from 'react'
import StarUp from 'components/StarUp'
import Icon from 'assets/home/first/icon.png'
import BgFirst from 'assets/home/first/bgFirst.png'
import SecondPage from './SecondPage'
import { CSSTransition } from 'react-transition-group'

const arr = [
  {
    text: 'Explore AI Models Now',
    width: 170,
    step: 21
  }
]
export default function Page({ show }: { show: boolean }) {
  const isMd = useBreakpoint('md')
  const [textNum, setTextNum] = useState(0)
  const [textArr, setTextArr] = useState(arr[textNum])
  const [isDelay, setIsDelay] = useState(false)
  const [zIndex, setZIndex] = useState(4)
  useEffect(() => {
    // Set a timer to update textWidth after 2 seconds
    const timer = setTimeout(() => {
      setIsDelay(true)
    }, 1500)
    const timer1 = setTimeout(() => {
      setZIndex(-1)
    }, 1500)
    return () => {
      clearTimeout(timer)
      clearTimeout(timer1)
    }
  }, [])
  useEffect(() => {
    if (!isDelay) return
    // Function to update textNum and corresponding text and textWidth
    const updateText = () => {
      setTextNum(prevTextNum => {
        const newTextNum = (prevTextNum + 1) % arr.length
        setTextArr(arr[newTextNum])
        return newTextNum
      })
    }
    const intervalId = setInterval(updateText, 8000)
    return () => clearInterval(intervalId)
  }, [isDelay])

  return (
    <Stack
      width={'100%'}
      alignItems={'center'}
      sx={{
        height: isMd ? 750 : 'auto',
        width: isMd ? 1014 : '100%',
        overflow: 'hidden',
        background: `url(${BgFirst.src}) no-repeat`,
        backgroundSize: 'cover',
        position: 'relative'
      }}
    >
      {isMd && (
        <Box
          sx={{
            width: '100vw',
            height: 180,
            background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, #000 100%)',
            position: 'absolute',
            bottom: 0
          }}
        ></Box>
      )}
      {!isMd && <Cover sx={{ zIndex: zIndex }} />}
      <Box sx={{ position: 'relative', maxWidth: 1440, width: isMd ? '100vw' : '100%' }}>
        <StarUp />
      </Box>
      <CSSTransition in={isDelay} timeout={2000} classNames="radius-transition">
        <RadiusBox />
      </CSSTransition>
      <Box
        marginTop={isMd ? 188 : 128}
        width={99}
        height={99}
        sx={{ borderRadius: '50%', border: '1px solid rgba(255, 255, 255, 0.25)', position: 'relative' }}
      >
        <Image src={Icon.src} alt="" style={{ position: 'absolute', left: 11, top: 20 }} />
      </Box>
      <Image src={ProjectName.src} alt="" width={127} height={43} />

      <Typography1 width={856} sx={{ margin: isMd ? '66px 0 77px' : '61px 0 7px' }}>
        Decentralized Platform for AI Models Collaboration & Trading
      </Typography1>

      <StartBox>
        <StartText width={textArr.width} step={textArr.step}>
          {textArr.text}
        </StartText>
        <StartButton>
          {!isMd && (
            <a href="https://app.reflectionai.app/">
              <Typography variant="h4" color={'#FFF'}>
                Get Started
              </Typography>
            </a>
          )}
          <ArrowSvg sx={{ fontSize: 16 }} />
        </StartButton>
      </StartBox>
      <a href="https://node.reflectionai.app/">
        <Stack style={{ zIndex: 999, position: 'relative' }} flexDirection={'row'} alignItems={'center'} gap={8}>
          <Image src={Node.src} alt="" width={20} />
          <Typography variant="h4" color={'#fff'} fontWeight={700}>
            Just to Buy Node &gt;&gt;
          </Typography>
        </Stack>
      </a>
      {!isMd && <SecondPage show={show} />}
    </Stack>
  )
}

const RadiusBox = styled(Box)`
  width: 1487px;
  height: 1486px;
  flex-shrink: 0;
  border-radius: 1487px;
  opacity: 0.3;
  // background: radial-gradient(
  //   50% 50% at 50% 50%,
  //   rgba(255, 255, 255, 0) 53%,
  //   rgba(247, 247, 247, 0.08) 64%,
  //   rgba(240, 240, 240, 0.13) 76%,
  //   rgba(233, 233, 233, 0.31) 84.5%,
  //   rgba(225, 225, 225, 0.57) 92.5%,
  //   #d9d9d9 100%
  // );
  background: radial-gradient(
    50% 50% at 50% 50%,
    rgba(255, 255, 255, 0) 53%,
    rgba(247, 247, 247, 0.04) 64%,
    rgba(240, 240, 240, 0.06) 76%,
    rgba(233, 233, 233, 0.16) 84.5%,
    rgba(225, 225, 225, 0.28) 92.5%,
    rgba(217, 217, 217, 0.5) 100%
  );
  // background: radial-gradient(
  //   50% 50% at 50% 50%,
  //   rgba(255, 255, 255, 0) 53%,
  //   rgba(247, 247, 247, 0.04) 64%,
  //   rgba(240, 240, 240, 0.06) 76%,
  //   rgba(233, 233, 233, 0.16) 84.5%,
  //   rgba(225, 225, 225, 0.28) 92.5%,
  //   rgba(217, 217, 217, 0.5) 100%
  // );
  // box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  // filter: blur(0px);
  box-shadow: 0px -20px 40px 0px rgba(255, 255, 255, 0.6);
  position: absolute;
  top: 176px;
  @media only screen and (max-width: 640px) {
    top: 236px;
  }
`

export const Typography1 = styled(Typography)`
  font-size: 65px;
  font-style: normal;
  font-weight: 900;
  line-height: 64px;
  letter-spacing: -2.6px;
  background: linear-gradient(90deg, #fff 2.23%, rgba(153, 153, 153, 0.25) 99.96%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
  @media only screen and (max-width: 640px) {
    width: calc(100vw - 32px);
    font-size: 28px;
    line-height: normal;
    word-break: break-word;
  }
`

const StartBox = styled(Box)`
  width: 406px;
  display: flex;
  padding: 8px 8px 8px 23px;
  margin: 48px 0 44px;
  align-items: center;
  justify-content: space-between;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(2px);
  @media only screen and (max-width: 640px) {
    width: calc(100vw - 50px);
    margin: 0 0 42px;
  }
`

const StartButton = styled(Box)`
  display: flex;
  width: 139px;
  height: 45px;
  padding: 20px 16px;
  justify-content: space-between;
  align-items: center;
  border-radius: 15px;
  border: 2px solid #fff;
  cursor: pointer;
  // :hover {
  //   background:linear-gradient(132deg, #823A12 -6.89%, #000 41.37%, #000 58.65%, #2C6EBE 122.98%);
  // }
  @media only screen and (max-width: 640px) {
    width: auto;
  }
`

const StartText = styled(Typography)(({ width, step }: { width: number | string; step: number }) => ({
  width: 0,
  fontSize: 16,
  fontStyle: 'normal',
  fontWeight: 500,
  lineHeight: 'normal',
  color: '#abaebc',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  animation: `blink 8s steps(${step},end) infinite 1.5s`,
  '@keyframes blink': {
    '0%': {
      width: 0
    },
    '40%': {
      width: width
    },
    '60%': {
      width: width
    },
    '100%': {
      width: 0
    }
  }
}))

const Cover = styled(Box)`
  width: 100%;
  height: 1676px;
  background: #000;
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  animation-duration: 1.5s;
  animation-name: black;
  animation-iteration-count: 1;
  @keyframes black {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
`
