'use client'

import { Box, Stack, Typography, styled } from '@mui/material'
import StreamerButton from 'components/Button/Streamer'
import CheckIcon from '@mui/icons-material/Check'
import TerminalIcon from 'assets/home/roadmap/textIcon.svg'
import BgRoadMap from 'assets/home/roadmap/bgRoadMap.png'
import Image from 'components/Image'
import useBreakpoint from 'hooks/useBreakpoint'

const RoadMapList = [
  {
    active: 1,
    time: '2024 Q2',
    title: 'Early Development & Integration',
    msg: [
      {
        width: 264,
        text: `Launched the Telegram Mini App, leveraging TON's blockchain infrastructure`
      },
      {
        width: 224,
        text: `Developed core technical architecture for the AI model marketplace`
      },
      {
        width: 257,
        text: `Developed core technical architecture for the AI model marketplace`
      }
    ]
  },
  {
    active: 0,
    time: '2024 Q3',
    title: 'AI Model Marketplace Development',
    msg: [
      {
        width: 240,
        text: `Develop & test the peer-to-peer AI model trading platform`
      },
      {
        width: 232,
        text: `Create advanced search for efficient model discovery
`
      },
      {
        width: 224,
        text: `Recruit early adopters & beta testers from the AI developer community`
      }
    ]
  },
  {
    active: 0,
    time: '2024 Q4',
    title: 'AI MiniApp Ecosystem & Developer DAO Launch',
    msg: [
      {
        width: 212,
        text: `Develop the AI MiniApp platform to incentivize multi-model integration`
      },
      {
        width: 229,
        text: `Implement stringent quality control & performance benchmarks for MiniApps`
      },
      {
        width: 202,
        text: `Launch the Developer DAO for decentralized platform governance`
      }
    ]
  },
  {
    active: 0,
    time: '2025 Q1',
    title: 'Official Platform Launch & Certification Programs',
    msg: [
      {
        width: 195,
        text: `Public launch of the Reflection AI platform with open registration`
      },
      {
        width: 181,
        text: `Introduce DApp certification & listing process`
      },
      {
        width: 200,
        text: `Expand marketing efforts to attract a wider user base`
      }
    ]
  },
  {
    active: 0,
    time: '2025 Q2',
    title: 'Ecosystem Expansion & Revenue Stream Diversification',
    msg: [
      {
        width: 250,
        text: `Expand offerings of AI models across various domains`
      },
      {
        width: 250,
        text: `Implement multiple access options for AI models`
      },
      {
        width: 251,
        text: `Host hackathons & developer conferences to stimulate ecosystem growth`
      }
    ]
  }
]

export default function RoadMap() {
  const isMd = useBreakpoint('md')
  return (
    <Stack width={'100%'} alignItems={'center'} position={'relative'} height={isMd ? 'auto' : 1458} paddingTop={135}>
      <BGroundBox src={BgRoadMap.src} alt="" />
      <Typography variant="h3" fontSize={isMd ? 17 : 26} color={'#1F84FF'} fontWeight={900}>
        RoadMap
      </Typography>
      <Typography
        variant="h2"
        fontSize={isMd ? 25 : 48}
        color={'#fff'}
        fontWeight={900}
        margin={isMd ? '18px 20px 28px' : '13px 0 31px'}
        textAlign={'center'}
      >
        Roadmap: Igniting the Web3 AI Revolution
      </Typography>
      {!isMd && (
        <Typography variant="h4" color={'#fff'} sx={{ width: 670, opacity: 0.5, textAlign: 'center' }}>
          {`Reflection AI merges cutting-edge AI with Web3 technologies. We're building a decentralized marketplace for AI model collaboration & trading.`}
        </Typography>
      )}
      <StreamerButton
        text={'Learn More'}
        width={135}
        height={42}
        sx={{ margin: isMd ? '0 0 59px 0' : '50px 0 88px' }}
      />
      <Stack width={'100%'} maxWidth={1040} padding={isMd ? '0 30px' : '0'}>
        {RoadMapList.map((item, index) => {
          return (
            <Box key={index} display={'flex'} gap={isMd ? 13 : 22} mb={7}>
              <Stack gap={6} alignItems={'center'}>
                <CheckBox
                  width={isMd ? 20 : 29}
                  height={isMd ? 20 : 29}
                  borderRadius={isMd ? 6 : 10}
                  active={item.active}
                  mt={isMd ? 4 : 0}
                >
                  {item.active ? <CheckIcon sx={{ color: '#000', fontSize: isMd ? 16 : 24 }} /> : <></>}
                </CheckBox>
                {index + 1 !== RoadMapList.length && (
                  <Box
                    sx={{
                      height: '100%',
                      borderLeft: '4px dashed rgba(255, 255, 255, 0.25)'
                    }}
                  ></Box>
                )}
              </Stack>
              <Stack gap={17}>
                <RowBox style={{ flexDirection: 'row' }}>
                  <MileageTime active={item.active}>{item.time}</MileageTime>
                  <Title>{item.title}</Title>
                </RowBox>
                <RowBox mb={isMd ? 0 : 27}>
                  {item.msg.map((i, j) => {
                    return (
                      <MileageMsg key={j} mb={!isMd ? 0 : j !== item.msg.length - 1 ? 14 : 0}>
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
                        <Typography variant="h6" color={'#fff'} width={isMd ? 'auto' : i.width}>
                          {i.text}
                        </Typography>
                      </MileageMsg>
                    )
                  })}
                </RowBox>
              </Stack>
            </Box>
          )
        })}
      </Stack>
    </Stack>
  )
}

const CheckBox = styled(Box)(({ active }: { active: number }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: '1px solid',
  borderColor: active ? '#fff' : 'rgba(255, 255, 255, 0.50)',
  background: active ? '#fff' : 'rgba(255, 255, 255, 0.25)'
}))

const MileageTime = styled(Typography)(({ active }: { active: number }) => ({
  width: 89,
  height: 29,
  borderRadius: 10,
  fontSize: 16,
  fontWeight: 700,
  textAlign: 'center',
  lineHeight: '29px',
  color: active ? '#000' : '#fff',
  background: active
    ? 'var(--Linear, linear-gradient(90deg, #F5FEFF 0%, #64E9FD 52.5%, #0A46E4 100%))'
    : 'rgba(255, 255, 255, 0.25)'
}))

const MileageMsg = styled(Box)`
  display: flex;
  padding: 11px 11px 13px 11px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.25);
`

const Title = styled(Typography)`
  color: #fff;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  word-break: break-word;
  @media only screen and (max-width: 640px) {
    font-size: 12px;
    font-weight: 600;
    line-height: 14px;
    flex: 1;
  }
`

const RowBox = styled(Box)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 15px;
  @media only screen and (max-width: 640px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 7px;
  }
`

const BGroundBox = styled(Image)`
  width: 100%;
  height: 1458px;
  position: absolute;
  top: 0;
  z-index: -3;
`
