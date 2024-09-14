'use client'
import { Box, styled, Stack, Typography } from '@mui/material'
import useBreakpoint from 'hooks/useBreakpoint'
import Image from 'components/Image'
// import BgSecond from 'assets/home/second/bgSecond.png'
import DeskSecond from 'assets/home/second/deskSecond.png'
import ShadowSecond from 'assets/home/second/shadowSecond.png'
import ThreeStar from 'assets/home/second/threeStar.png'
import ClearIcon from '@mui/icons-material/Clear'
import { CSSTransition } from 'react-transition-group'
import { useEffect, useState } from 'react'
import useDebounce from 'hooks/useDebounce'

export default function Page({ show }: { show: boolean }) {
  const isSm = useBreakpoint('sm')
  isSm
  const isShow = useDebounce(show, 200)
  const [text1Show, setText1Show] = useState(false)
  const [text2Show, setText2Show] = useState(false)
  const [text3Show, setText3Show] = useState(false)
  const [text4Show, setText4Show] = useState(false)
  const [text5Show, setText5Show] = useState(false)
  const [text6Show, setText6Show] = useState(false)
  const [btShow, setBtShow] = useState(false)
  useEffect(() => {
    if (!show) return
    const timer = setTimeout(() => {
      setText1Show(true)
    }, 2000)
    const timer2 = setTimeout(() => {
      setText2Show(true)
    }, 5000)
    const timer3 = setTimeout(() => {
      setText3Show(true)
    }, 8000)
    const timer4 = setTimeout(() => {
      setText4Show(true)
    }, 11000)
    const timer5 = setTimeout(() => {
      setText5Show(true)
    }, 14000)
    const timer6 = setTimeout(() => {
      setText6Show(true)
    }, 17000)
    const timer7 = setTimeout(() => {
      setBtShow(true)
    }, 18000)
    return () => {
      clearTimeout(timer)
      clearTimeout(timer2)
      clearTimeout(timer3)
      clearTimeout(timer4)
      clearTimeout(timer5)
      clearTimeout(timer6)
      clearTimeout(timer7)
    }
  }, [show])
  return (
    <Stack
      width={'100%'}
      alignItems={'center'}
      sx={{
        height: 1024,
        // overflow: 'hidden',
        // background: `url(${BgSecond.src}) no-repeat`,
        position: 'relative'
      }}
    >
      <Box sx={{ position: 'absolute', top: 245, left: '50%', transform: 'translateX(-50%)', zIndex: 1 }}>
        <CSSTransition in={isShow} timeout={2000} classNames="desk-transition">
          <Image src={DeskSecond.src} alt="" style={{ width: 896.7, height: 639.2 }} />
        </CSSTransition>
      </Box>

      <CSSTransition in={isShow} timeout={2000} classNames="shadow-transition" unmountOnExit>
        <Image src={ShadowSecond.src} alt="" style={{ position: 'absolute', top: 100, left: 280, zIndex: 2 }} />
      </CSSTransition>
      <CSSTransition in={isShow} timeout={2000} classNames="form-transition" unmountOnExit>
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
          <Box
            sx={{
              width: '100%',
              padding: '20px 30px 31px'
            }}
          >
            <Typography variant="h6" mb={10}>
              Required Functionality
            </Typography>
            <FormInput height={102}>
              <CSSTransition in={text1Show} timeout={3000} classNames="text1-transition" unmountOnExit>
                <Text>An AI-powered system capable of automatically detecting on</Text>
              </CSSTransition>
              <CSSTransition in={text2Show} timeout={3000} classNames="text1-transition" unmountOnExit>
                <Text>-chain mining opportunities and assisting with automated st</Text>
              </CSSTransition>
              <CSSTransition in={text3Show} timeout={3000} classNames="text1-transition" unmountOnExit>
                <Text>aking of ETH, BTC, and USDT. The goal is to potentially achieve</Text>
              </CSSTransition>
              <CSSTransition in={text4Show} timeout={3000} classNames="text1-transition" unmountOnExit>
                <Text>higher annualized yields while maintaining a lower risk profile.</Text>
              </CSSTransition>
            </FormInput>
            <Typography variant="h6" mb={10}>
              Platform Requirements
            </Typography>
            <FormInput height={102}>
              <CSSTransition in={text5Show} timeout={3000} classNames="text1-transition" unmountOnExit>
                <Text>{`Support for both BSC (Binance Smart Chain) and ETH (Ethere`}</Text>
              </CSSTransition>
              <CSSTransition in={text6Show} timeout={1000} classNames="text2-transition" unmountOnExit>
                <Text>{`um) networks.`}</Text>
              </CSSTransition>
            </FormInput>
            <CSSTransition in={btShow} timeout={1000} classNames="bt-transition">
              <ButtonBox>Generate</ButtonBox>
            </CSSTransition>
          </Box>
        </FormBox>
      </CSSTransition>
    </Stack>
  )
}

const FormBox = styled(Box)`
  width: 430px;
  flex-shrink: 0;
  margin: 400px auto 0;
  border-radius: 28px;
  border: 1px solid rgba(154, 154, 154, 0.5);
  background: rgba(12, 12, 12, 0.5);
  backdrop-filter: blur(10px);
  z-index: 3;
  overflow: hidden;
`

export const FormInput = styled(Box)`
  width: 100%;
  border-radius: 15px;
  background: rgba(255, 255, 255, 0.05);
  padding: 10px;
  margin-bottom: 16px;
  padding: 13px;
`

export const ButtonBox = styled(Box)`
  width: 100%;
  height: 32px;
  text-align: center;
  border-radius: 10px;
  background: linear-gradient(0deg, #fff 0%, #fff 100%),
    radial-gradient(50% 50% at 50% 50%, rgba(153, 153, 153, 0.01) 74.98%, rgba(255, 255, 255, 0.03) 100%);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  color: #000;
  font-size: 12px;
  font-style: normal;
  font-weight: 900;
  line-height: 32px;
  letter-spacing: -0.84px;
  margin-top: 21px;
  cursor: pointer;
  :hover {
    opacity: 0.5;
  }
`

const Text = styled(Typography)`
  color: #8f8f8f;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  overflow: hidden;
  white-space: nowrap;
`
