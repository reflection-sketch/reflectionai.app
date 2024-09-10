'use client'
import { Box, styled, Stack, Typography } from '@mui/material'
import useBreakpoint from 'hooks/useBreakpoint'
import ProjectName from 'assets/header/projectName.png'
import Telegram from 'assets/home/telegram.png'
import Image from 'components/Image'
import ArrowSvg from 'assets/header/arrow.svg'
import Features from './Features'
import Highlights from './Highlights'

export default function Page() {
  const isSm = useBreakpoint('sm')

  isSm
  return (
    <Stack alignItems={'center'} width={1440} margin={'0 auto'} position={'relative'}>
      <RadiusBox />
      {/*icon image */}
      <Box
        marginTop={128}
        width={99}
        height={99}
        sx={{ borderRadius: '50%', border: '1px solid rgba(255, 255, 255, 0.25)' }}
      ></Box>
      <Image src={ProjectName.src} alt="" width={127} height={43} />
      <Typography1 variant="h1" sx={{ margin: '61px 0 7px' }}>
        Your next AI Model is
      </Typography1>
      <Typography1 variant="h1">just one click away.</Typography1>
      <StartBox>
        <Typography variant="h4" fontWeight={500} color={'#ABAEBC'}>
          Search Your AI Models.
        </Typography>
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
      <Features />
      <Highlights />
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

const Typography1 = styled(Typography)`
  letter-spacing: -2.6px;
  font-weight: 900;
  background: linear-gradient(90deg, #fff 2.23%, rgba(153, 153, 153, 0.25) 99.96%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

const StartBox = styled(Box)`
  display: flex;
  padding: 8px 8px 8px 23px;
  margin: 48px 0 44px;
  align-items: center;
  gap: 66px;
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
`
