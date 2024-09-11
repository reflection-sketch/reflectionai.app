'use client'
import { Box, styled, Stack, Typography } from '@mui/material'
import useBreakpoint from 'hooks/useBreakpoint'
import Image from 'components/Image'
import JumpSvg from 'assets/home/highlights/jump.svg'
import Computing from 'assets/home/highlights/computing.png'
import Robot from 'assets/home/highlights/robot.png'
import User from 'assets/home/highlights/user.png'
import BgUser from 'assets/home/highlights/bgUser.png'
import BgRobot from 'assets/home/highlights/bgRobot.png'
import BgComputing from 'assets/home/highlights/bgComputing.png'
import BgStarLeft from 'assets/home/highlights/bgStarLeft.png'
import BgStarRight from 'assets/home/highlights/bgStarRight.png'
import BgCoin from 'assets/home/highlights/bgCoin.png'
import BgCionRight from 'assets/home/highlights/bgCionRight.png'

export default function Page() {
  const isSm = useBreakpoint('sm')
  isSm
  return (
    <Stack
      width={'100%'}
      alignItems={'center'}
      height={1024}
      paddingTop={137}
      sx={{
        '& img': {
          position: 'absolute'
        }
      }}
    >
      <Stack flexDirection={'row'} gap={20} mb={25}>
        <BoxContainer width={559} height={207}>
          <Image src={BgUser.src} alt="" style={{ width: 695, top: 0, left: -75 }} />
          <JumpBotton sx={{ top: 15, right: 15 }}>
            <JumpSvg />
          </JumpBotton>
          <Image src={User.src} alt="" style={{ top: 36, left: 32 }} />
          <Stack gap={10} sx={{ marginLeft: 112, marginTop: 39, width: 420 }}>
            <TypographyTitle>Extensive User Base</TypographyTitle>
            <TypographyText>
              Reflection aims to attract over 100M users, offering abundant social space and growth opportunities for
              developing virtual AI personalities in a lively and dynamic environment.
            </TypographyText>
          </Stack>
        </BoxContainer>
        <BoxContainer width={569} height={207}>
          <Image src={BgRobot.src} alt="" style={{ width: 656, top: 6, left: -64 }} />
          <JumpBotton sx={{ top: 15, right: 15 }}>
            <JumpSvg />
          </JumpBotton>
          <Image src={Robot.src} alt="" style={{ top: 30, left: 30 }} />
          <Stack gap={10} sx={{ marginLeft: 107, marginTop: 39, width: 430 }}>
            <TypographyTitle>Extensive User Base</TypographyTitle>
            <TypographyText>
              Reflection aims to attract over 100M users, offering abundant social space and growth opportunities for
              developing virtual AI personalities in a lively and dynamic environment.
            </TypographyText>
          </Stack>
        </BoxContainer>
      </Stack>
      <BoxContainer width={1148} height={473}>
        <Image src={BgComputing.src} alt="" style={{ width: 1324, top: 18, left: -88, zIndex: 1 }} />
        <Image src={Computing.src} alt="" style={{ top: 29, left: 27 }} />
        <Image src={BgStarLeft.src} alt="" style={{ bottom: 0, left: 252, zIndex: 2 }} />
        <Image src={BgStarRight.src} alt="" style={{ bottom: 0, left: 484, zIndex: 2 }} />
        <Image src={BgCoin.src} alt="" style={{ bottom: -83, left: 224, zIndex: 2 }} />
        <Image src={BgCionRight.src} alt="" style={{ bottom: -1, right: 325, zIndex: 2 }} />
        <JumpBotton sx={{ top: 30, right: 30 }}>
          <JumpSvg />
        </JumpBotton>
        <Stack gap={10} sx={{ marginLeft: 100, marginTop: 37, width: 942 }}>
          <TypographyTitle>Robust Computing Power</TypographyTitle>
          <TypographyText>
            With over 6K A100 computing cards, our platform offers robust hardware support, ensuring efficient and
            reliable services for creating and nurturing virtual AI personalities.
          </TypographyText>
        </Stack>
        <FromBox></FromBox>
      </BoxContainer>
    </Stack>
  )
}

const BoxContainer = styled(Box)`
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.25);
  background: rgba(0, 0, 0, 0.25);
  box-shadow: 0px 0px 40px 0px rgba(255, 255, 255, 0.25) inset;
  backdrop-filter: blur(2px);
  position: relative;
  overflow: hidden;
`

const TypographyTitle = styled(Typography)`
  color: #fff;
  font-size: 24px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  word-break: break-word;
`

const TypographyText = styled(Typography)`
  color: #fff;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  opacity: 0.5;
  word-break: break-word;
`

const JumpBotton = styled(Box)`
  display: flex;
  width: 39px;
  height: 39px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 100px;
  border: 2px solid #fff;
  opacity: 0.5;
  position: absolute;
`
const FromBox = styled(Box)`
  width: 285px;
  height: 293px;
  border-radius: 10px;
  background: rgba(0, 0, 0, 0.95);
  backdrop-filter: blur(2px);
  border: 1px solid rgba(255, 255, 255, 0.25);
  position: absolute;
  bottom: -10px;
  left: 416px;
  z-index: 3;
`
