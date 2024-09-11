'use client'

import { Box, Stack, Typography, styled } from '@mui/material'
import StreamerButton from 'components/Button/Streamer'
import CheckIcon from '@mui/icons-material/Check'
import VerticalLineSvg from 'assets/home/verticalLine.svg'
import TerminalIcon from '@mui/icons-material/Terminal'
import BgRoadMap from 'assets/home/bgRoadMap.png'
import Image from 'components/Image'

const RoadMapList = [
  {
    active: true,
    time: '2024 Q2',
    title: 'Early Development and Telegram Integration',
    msg: [
      {
        width: 264,
        text: `Develop and test the peer-to-peer AI model trading platform.`
      },
      {
        width: 224,
        text: `Developed core technical architecture for the AI model marketplace`
      },
      {
        width: 187,
        text: `Conducted market research and refined the project's vision`
      }
    ]
  },
  {
    active: false,
    time: '2024 Q2',
    title: 'Early Development and Telegram Integration',
    msg: [
      {
        width: 178,
        text: `Develop and test the peer-to-peer AI model trading platform.`
      },
      {
        width: 232,
        text: `Create advanced search and filtering capabilities for efficient model discovery`
      },
      {
        width: 224,
        text: `Recruit early adopters and beta testers from the AI developer community`
      }
    ]
  },
  {
    active: false,
    time: '2024 Q2',
    title: 'Early Development and Telegram Integration',
    msg: [
      {
        width: 212,
        text: `Develop the AI MiniApp platform to incentivize multi-model integration`
      },
      {
        width: 229,
        text: `Implement stringent quality control and performance benchmarks for MiniApps`
      },
      {
        width: 202,
        text: `Launch the Developer DAO for decentralized platform governance`
      }
    ]
  },
  {
    active: false,
    time: '2024 Q2',
    title: 'Early Development and Telegram Integration',
    msg: [
      {
        width: 195,
        text: `Public launch of the Reflection AI platform with open registration`
      },
      {
        width: 181,
        text: `Introduce DApp certification and listing process`
      },
      {
        width: 160,
        text: `Expand marketing efforts to attract a wider user base`
      }
    ]
  },
  {
    active: false,
    time: '2024 Q2',
    title: 'Early Development and Telegram Integration',
    msg: [
      {
        width: 307,
        text: `Expand offerings of AI models across various domains (e.g., computer vision, NLP, predictive analytics)`
      },
      {
        width: 290,
        text: `Implement multiple access options for AI models (subscription, rental, one-time purchase)`
      },
      {
        width: 251,
        text: `Host hackathons and developer conferences to stimulate ecosystem growth`
      }
    ]
  }
]

export default function RoadMap() {
  return (
    <Stack width={'100%'} alignItems={'center'} position={'relative'} height={1458} paddingTop={135}>
      <BGroundBox src={BgRoadMap.src} alt="" />
      <Typography variant="h3" color={'#1F84FF'} fontWeight={900}>
        RoadMap
      </Typography>
      <Typography variant="h2" color={'#fff'} fontWeight={900} margin={'13px 0 31px'}>
        Igniting the Web3 AI Revolution
      </Typography>
      <Typography variant="h4" color={'#fff'} sx={{ width: 670, opacity: 0.5, textAlign: 'center' }}>
        {`Reflection AI merges cutting-edge AI with Web3 technologies. We're building a decentralized marketplace for AI
        model collaboration and trading.`}
      </Typography>
      <StreamerButton text={'Learn More'} width={135} sx={{ margin: '50px 0 88px' }} />
      <Stack width={'100%'} paddingLeft={199}>
        {RoadMapList.map((item, index) => {
          return (
            <Box key={index} display={'flex'} gap={22}>
              <Stack gap={6} alignItems={'center'}>
                <CheckBox active={item.active}>{item.active && <CheckIcon sx={{ color: '#000' }} />}</CheckBox>
                {index + 1 !== RoadMapList.length && <VerticalLineSvg />}
              </Stack>
              <Stack gap={17}>
                <RowBox>
                  <MileageTime active={item.active}>{item.time}</MileageTime>
                  <Title>{item.title}</Title>
                </RowBox>
                <RowBox>
                  {item.msg.map((i, j) => {
                    return (
                      <MileageMsg key={j}>
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
                        <Typography variant="h6" color={'#fff'} width={i.width}>
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

const CheckBox = styled(Box)(({ active }: { active?: boolean }) => ({
  width: 29,
  height: 29,
  flexShrink: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 10,
  border: '1px solid',
  borderColor: active ? '#fff' : 'rgba(255, 255, 255, 0.50)',
  background: active ? '#fff' : 'rgba(255, 255, 255, 0.25)'
}))

const MileageTime = styled(Typography)(({ active }: { active?: boolean }) => ({
  padding: '0 26px',
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
`

const RowBox = styled(Box)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 15px;
`

const BGroundBox = styled(Image)`
  width: 100%;
  height: 1458px;
  position: absolute;
  top: 0;
  z-index: -3;
`
