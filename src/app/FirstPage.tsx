'use client'
import { Box, styled, Stack, Typography } from '@mui/material'
import useBreakpoint from 'hooks/useBreakpoint'
import ProjectName from 'assets/header/projectName.png'
import Telegram from 'assets/home/first/telegram.png'
import Image from 'components/Image'
import ArrowSvg from 'assets/header/arrow.svg'
import { useEffect, useState } from 'react'
import StarUp from 'components/StarUp'
import Icon from 'assets/home/first/icon.png'
import BgFirst from 'assets/home/first/bgFirst.png'
import DeskFirst from 'assets/home/first/deskFirst.png'

const textArray = ['Search Your AI Models.', 'Search Your AI Models22.', 'Search Your AI Models333.']
const textWidthArray = [170.5, 189, 198]
export default function Page() {
  const isSm = useBreakpoint('sm')
  isSm
  const [textNum, setTextNum] = useState(0)
  const [isDelay, setIsDelay] = useState(false)
  const [textWidth, setTextWidth] = useState(textWidthArray[textNum])
  const [text, setText] = useState(textArray[textNum])
  useEffect(() => {
    // Set a timer to update textWidth after 2 seconds
    const timer = setTimeout(() => {
      setIsDelay(true)
    }, 1500)
    return () => clearTimeout(timer)
  }, [])
  useEffect(() => {
    if (!isDelay) return
    // Function to update textNum and corresponding text and textWidth
    const updateText = () => {
      setTextNum(prevTextNum => {
        const newTextNum = (prevTextNum + 1) % textArray.length
        setText(textArray[newTextNum])
        setTextWidth(textWidthArray[newTextNum])
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
        height: 1024,
        overflow: 'hidden',
        background: `url(${BgFirst.src})`,
        position: 'relative'
      }}
    >
      <Cover />
      <StarUp />
      <RadiusBox />
      <DeskImg src={DeskFirst.src} alt="" />
      <Box
        marginTop={128}
        width={99}
        height={99}
        sx={{ borderRadius: '50%', border: '1px solid rgba(255, 255, 255, 0.25)', position: 'relative' }}
      >
        <Image src={Icon.src} alt="" style={{ position: 'absolute', left: 11, top: 20 }} />
      </Box>
      <Image src={ProjectName.src} alt="" width={127} height={43} />
      <Typography1 variant="h1" sx={{ margin: '61px 0 7px' }}>
        Your next AI Model is
      </Typography1>
      <Typography1 variant="h1">just one click away.</Typography1>
      <StartBox>
        <StartText width={textWidth}>{text}</StartText>
        <StartButton>
          <Typography variant="h4" color={'#FFF'}>
            Get Start
          </Typography>
          <ArrowSvg />
        </StartButton>
      </StartBox>
      <Stack flexDirection={'row'} alignItems={'center'} gap={8}>
        <Image src={Telegram.src} alt="" />
        <Typography variant="h4" color={'#fff'} fontWeight={700}>
          Open Telegram MiniApp
        </Typography>
      </Stack>
    </Stack>
  )
}

const RadiusBox = styled(Box)`
  width: 1487px;
  height: 1486px;
  flex-shrink: 0;
  border-radius: 1487px;
  opacity: 0.3;
  background: radial-gradient(
    50% 50% at 50% 50%,
    rgba(255, 255, 255, 0) 53%,
    rgba(247, 247, 247, 0.08) 64%,
    rgba(240, 240, 240, 0.13) 76%,
    rgba(233, 233, 233, 0.31) 84.5%,
    rgba(225, 225, 225, 0.57) 92.5%,
    #d9d9d9 100%
  );
  box-shadow: 0px -20px 40px 0px rgba(255, 255, 255, 0.6);
  position: absolute;
  top: 176px;
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
`

const StartButton = styled(Box)`
  display: flex;
  width: 138px;
  height: 45px;
  padding: 20px 19px;
  justify-content: space-between;
  align-items: center;
  border-radius: 15px;
  border: 2px solid #fff;
  cursor: pointer;
  // :hover {
  //   background:linear-gradient(132deg, #823A12 -6.89%, #000 41.37%, #000 58.65%, #2C6EBE 122.98%);
  // }
`

const StartText = styled(Typography)(({ width }: { width: number | string }) => ({
  width: 0,
  fontSize: 16,
  fontStyle: 'normal',
  fontWeight: 500,
  lineHeight: 'normal',
  color: '#abaebc',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  animation: 'blink 8s linear infinite 1.5s',
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
  height: 1024px;
  background: #000;
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  animation-duration: 1.5s;
  animation-name: black;
  animation-iteration-count: 1;
  z-index: 4;
  @keyframes black {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
`

const DeskImg = styled(Image)`
  position: absolute;
  bottom: 0;
  left: 268px;
  animation-duration: 1s;
  animation-name: up;
  animation-iteration-count: 1;
  animation-timing-function: linear;
  @keyframes up {
    from {
      transform: translateY(134px);
    }
    to {
      transform: translateY(0);
    }
  }
`
