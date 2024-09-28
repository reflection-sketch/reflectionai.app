'use client'

import { Box, Stack, Typography, styled } from '@mui/material'
import StreamerButton from 'components/Button/Streamer'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import TerminalIcon from '@mui/icons-material/Terminal'
import { useState } from 'react'
import { Typography1 } from './FirstPage'
import useBreakpoint from 'hooks/useBreakpoint'
const QList = [
  {
    active: 1,
    height: 169,
    title: 'What is Reflection AI?',
    text: 'Reflection AI is a decentralized platform for AI model collaboration and trading. It aims to be a comprehensive ecosystem offering, a diverse AI MiniApp marketplace, an app-specific AI model marketplace, and a DeveloperDAO to fulfil AI-driven innovation demands in centralised infrastructure.'
  },
  {
    active: 0,
    height: 274,
    title: 'How does Reflection AI work?',
    text: `Reflection AI features an AI MiniApp Store where users can discover and deploy AI-powered mini-apps tailored to their specific needs, accelerating AI integration. The platform also has an intelligent matching system that recommends the most suitable AI MiniApps based on user requirements. Users can communicate their desired AI-powered mini-app's functionality and requirements to the Reflection AI bot, which will analyze their needs and suggest suitable AI mini-apps or custom solutions. The platform is blockchain-powered and uses a token-based pricing system for AI model trading. It aims to foster a community-driven ecosystem with decentralized governance to encourage partnerships and innovation.`
  },
  {
    active: 0,
    height: 169,
    title: 'Who shall join ReflectionAI and RectDAO?',
    text: `Reflection Labs, the R&D branch of ReflectionAI, is also running RectDAO, the developer DAO for matching AI business owners/investors to AI app builders, domain knowledge dataset owners/builders, so that they can leverage ReflectionAI design, build and launch their AI-native startups.`
  },
  {
    active: 0,
    height: 190,
    title: 'How can I get involved with Reflection AI?',
    text: `You can join the Reflection AI Discord community for help and to share your ideas or feedback. You can also get involved with the project through their Airdrop Quest on various platforms such as SoQuest, Nabox, Zealy, and Taskon. Stay tuned for our upcoming launch on products, services and the RectDAO. Let’s innovate together on a WHOLE NEW paradigm!`
  }
]

export default function Page() {
  const isMd = useBreakpoint('md')
  const [list, setList] = useState(QList)
  const handleClick = (index: number) => {
    setList(prevItems =>
      prevItems.map((item, i) => (i === index ? { ...item, active: item.active === 1 ? 0 : 1 } : item))
    )
  }
  return (
    <Stack
      alignItems={'center'}
      width={'100%'}
      position={'relative'}
      mb={isMd ? 0 : 76}
      height={isMd ? 'auto' : 1621}
      overflow={'hidden'}
    >
      <RaduisBox />
      <Stack alignItems={'center'} width={'100%'} bgcolor={'#000'} paddingTop={isMd ? 129 : 0}>
        <Typography variant="h3" fontSize={isMd ? 17 : 26} color={'#1F84FF'} fontWeight={900}>
          FAQ
        </Typography>
        <Typography
          variant="h2"
          fontSize={isMd ? 25 : 48}
          color={'#fff'}
          fontWeight={900}
          marginTop={isMd ? 11 : 13}
        >{`Got questions?`}</Typography>
        <Typography
          variant="h2"
          fontSize={isMd ? 25 : 48}
          color={'#fff'}
          fontWeight={900}
          marginBottom={isMd ? 10 : 35}
        >{`Join the community.`}</Typography>
        <Typography variant="h4" fontSize={isMd ? 12 : 16} color={'#fff'} sx={{ opacity: 0.5 }}>
          Our Discord community and staff are here to help!
        </Typography>
        <Typography variant="h4" fontSize={isMd ? 12 : 16} color={'#fff'} sx={{ opacity: 0.5 }}>
          Your feedback will help Reflection AI improve in future versions.
        </Typography>
        <StreamerButton text={'Join Discord'} width={146} sx={{ margin: isMd ? '30px 0 48px' : '40px 0 61px' }} />
        <Stack gap={15} mb={isMd ? 0 : 65}>
          {list.map((item, index) => {
            return (
              <QBox
                key={index}
                width={isMd ? 'calc(100vw - 40px)' : 716}
                height={isMd ? 'auto' : item.height}
                padding={isMd ? '19px 19px 17px 22px' : '11px 18px 13px 11px'}
                active={item.active}
                onClick={() => {
                  handleClick(index)
                }}
              >
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                  <RowBox>
                    {!isMd && (
                      <Box
                        display={'flex'}
                        alignItems={'center'}
                        justifyContent={'center'}
                        borderRadius="50%"
                        bgcolor={'#5D627D'}
                        padding={'8px 9px'}
                      >
                        <TerminalIcon />
                      </Box>
                    )}
                    <Title>{item.title}</Title>
                  </RowBox>
                  {item.active ? <RemoveIcon /> : <AddIcon />}
                </Box>

                <Box margin={isMd ? '19px 0 17px' : '10px 18px 11px 56px'}>
                  <Text>{item.text}</Text>
                </Box>
              </QBox>
            )
          })}
        </Stack>
      </Stack>

      <Stack
        alignItems={'center'}
        justifyContent={'flex-end'}
        width={'100%'}
        height={isMd ? 253 : 413}
        sx={{ background: 'linear-gradient(180deg, #000 0%, rgba(0, 0, 0, 0.00) 100%)' }}
      >
        {isMd ? (
          <Typography1>{`Your next big idea's just one prompt away.`}</Typography1>
        ) : (
          <>
            <Typography1>Your next AI Model is just</Typography1>
            <Typography1>one click away.</Typography1>
          </>
        )}
        <Box mt={isMd ? 23 : 42} width={isMd ? 274 : 685}>
          {isMd ? (
            <Typography2 width={283}>
              MemeCoin&nbsp;&nbsp;•&nbsp;&nbsp;DogsCoin&nbsp;&nbsp;•&nbsp;&nbsp;PePe
              Coin&nbsp;&nbsp;•&nbsp;&nbsp;MemeCoin
            </Typography2>
          ) : (
            <Typography2 width={685}>
              ing Models&nbsp;&nbsp;•&nbsp;&nbsp;Finance Models&nbsp;&nbsp;•&nbsp;&nbsp;Learning
              Models&nbsp;&nbsp;•&nbsp;&nbsp;Socia
            </Typography2>
          )}
        </Box>
      </Stack>
      <a href="https://app.reflectionai.app/">
        <StreamerButton
          text={'Get Started'}
          fontSize={29}
          width={219}
          height={80}
          gap={16}
          scale={1.5}
          sx={{ margin: isMd ? '33px 0 84px' : '55px 0 142px' }}
        />
      </a>
    </Stack>
  )
}

const QBox = styled(Box)(({ active, height }: { active: number; height: number | string }) => ({
  height: active ? height : 64,
  borderRadius: 10,
  background: 'rgba(255, 255, 255, 0.25)',
  cursor: 'pointer',
  overflow: 'hidden',
  transition: 'height 1s linear'
}))

const Title = styled(Typography)`
  color: #fff;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`

const Text = styled(Typography)`
  color: #fff;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  opacity: 0.5;
`
const RowBox = styled(Box)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 12px;
`

const RaduisBox = styled(Box)`
  width: 1487px;
  height: 1486px;
  flex-shrink: 0;
  border-radius: 1487px;
  border: 1px solid #fff;
  opacity: 0.3;
  background: radial-gradient(
    68.64% 68.64% at 50% 31.36%,
    rgba(255, 255, 255, 0) 53%,
    rgba(247, 247, 247, 0.08) 64%,
    rgba(240, 240, 240, 0.13) 76%,
    rgba(233, 233, 233, 0.31) 84.5%,
    rgba(225, 225, 225, 0.57) 92.5%,
    #d9d9d9 100%
  );
  box-shadow: 0px -20px 40px 0px rgba(255, 255, 255, 0.6);
  position: absolute;
  top: 135px;
  z-index: -2;
  @media only screen and (max-width: 640px) {
    width: 801px;
    height: 800px;
  }
`

export const Typography2 = styled(Typography)`
  color: #fff;
  text-align: center;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  background: linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, #fff 27%, #fff 78%, rgba(255, 255, 255, 0) 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  @media only screen and (max-width: 640px) {
    font-size: 12px;
  }
`
