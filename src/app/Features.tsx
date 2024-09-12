'use client'
import { styled, Stack, Typography, Box } from '@mui/material'
import useBreakpoint from 'hooks/useBreakpoint'
import { useState } from 'react'
import Star from 'assets/home/features/star.png'
import StepLineSvg from 'assets/home/features/step.svg'
import StepLine1Svg from 'assets/home/features/step1.svg'
import StepLine2Svg from 'assets/home/features/step2.svg'
import StepLine3Svg from 'assets/home/features/step3.svg'
import Desktop from 'assets/home/features/desktop.png'
import Shadow from 'assets/home/second/shadowSecond.png'
import Image from 'components/Image'
import StreamerButton from 'components/Button/Streamer'
import { CSSTransition } from 'react-transition-group'

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

export default function Page() {
  const isSm = useBreakpoint('sm')
  isSm
  const [tab, setTab] = useState(0)
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
          <Box position={'relative'} width={'100%'}>
            <Image src={Desktop.src} alt="" style={{ position: 'absolute', top: 0, left: 0, zIndex: 1 }} />
            <Image src={Shadow.src} alt="" style={{ position: 'absolute', top: -65, left: -65, zIndex: 2 }} />
          </Box>
        </CSSTransition>
      </Stack>
    </Box>
  )
}

// const RadiusBox = styled(Box)`
//   width: 1487px;
//   height: 1486px;
//   flex-shrink: 0;
//   border-radius: 1487px;
//   opacity: 0.3;
//   background: radial-gradient(50% 50% at 50% 50%, rgba(255, 255, 255, 0.00) 53%, rgba(247, 247, 247, 0.08) 64%, rgba(240, 240, 240, 0.13) 76%, rgba(233, 233, 233, 0.31) 84.5%, rgba(225, 225, 225, 0.57) 92.5%, #D9D9D9 100%);
//   box-shadow: 0px -20px 40px 0px rgba(255, 255, 255, 0.60);
//   position: absolute;
//   top: 176px;
// `

const Typography1 = styled(Typography)`
  color: #fff;
  font-weight: 900;
  line-height: 50px;
  width: 330px;
  word-break: break-word;
  margin: 22px 0 56px;
`
