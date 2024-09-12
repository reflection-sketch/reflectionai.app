'use client'
import { Box, styled, Stack, Typography } from '@mui/material'
import useBreakpoint from 'hooks/useBreakpoint'
import Image from 'components/Image'
import BgSecond from 'assets/home/second/bgSecond.png'
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
  const isShow = useDebounce(show, 500)
  const [text1Show, setText1Show] = useState(false)
  const [text2Show, setText2Show] = useState(false)
  const [text3Show, setText3Show] = useState(false)
  const [btShow, setBtShow] = useState(false)
  useEffect(() => {
    if (!show) return
    const timer = setTimeout(() => {
      setText1Show(true)
    }, 2000)
    const timer1 = setTimeout(() => {
      setText3Show(true)
    }, 2500)
    return () => {
      clearTimeout(timer)
      clearTimeout(timer1)
    }
  }, [show])
  useEffect(() => {
    if (!text1Show) return
    const timer = setTimeout(() => {
      setText2Show(true)
    }, 3000)
    return () => clearTimeout(timer)
  }, [text1Show])
  useEffect(() => {
    if (!text2Show) return
    const timer = setTimeout(() => {
      setBtShow(true)
    }, 1000)
    return () => clearTimeout(timer)
  }, [text2Show])
  return (
    <Stack
      width={'100%'}
      alignItems={'center'}
      sx={{
        height: 1024,
        overflow: 'hidden',
        background: `url(${BgSecond.src}) no-repeat`,
        position: 'relative'
      }}
    >
      <RadiusBox />
      <CSSTransition in={isShow} timeout={2000} classNames="desk-transition">
        <Image
          src={DeskSecond.src}
          alt=""
          style={{ position: 'absolute', width: 860, height: 614, top: 237, left: 301, zIndex: 1 }}
        />
      </CSSTransition>
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
              Landing Page of
            </Typography>
            <FormInput height={102} id={'container'}>
              <CSSTransition in={text1Show} timeout={3000} classNames="text1-transition" unmountOnExit>
                <Text>Pepe,meme,money,crypto,hot,project,ACG,GameFi,De</Text>
              </CSSTransition>
              <CSSTransition in={text2Show} timeout={1000} classNames="text2-transition" unmountOnExit>
                <Text>fi,BitcoinChain.</Text>
              </CSSTransition>
            </FormInput>
            <Typography variant="h6" mb={10}>
              Landing Page of
            </Typography>
            <FormInput height={102}>
              <CSSTransition in={text3Show} timeout={1500} classNames="text3-transition" unmountOnExit>
                <Text>Hasaki,Bitcoin,Ton,telgram.</Text>
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
  bottom: 200px;
`

const FormBox = styled(Box)`
  width: 387px;
  flex-shrink: 0;
  margin: 365px auto 0;
  border-radius: 28px;
  border: 1px solid rgba(154, 154, 154, 0.5);
  background: rgba(12, 12, 12, 0.5);
  backdrop-filter: blur(10px);
  z-index: 3;
  overflow: hidden;
`

const FormInput = styled(Box)`
  width: 100%;
  border-radius: 15px;
  background: rgba(255, 255, 255, 0.05);
  padding: 10px;
  margin-bottom: 16px;
  padding: 13px;
`

const ButtonBox = styled(Box)`
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
`

const Text = styled(Typography)`
  color: #8f8f8f;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  overflow: hidden;
`
