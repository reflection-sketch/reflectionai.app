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
import { FormCm } from './Features'
import { useTranslation } from 'react-i18next'

export default function Page() {
  const { t } = useTranslation()
  const isMd = useBreakpoint('md')
  if (isMd) {
    return (
      <Stack gap={20} paddingTop={50}>
        <BoxContainer height={380}>
          <Image
            src={BgComputing.src}
            alt=""
            style={{ position: 'absolute', width: 560, height: 380, top: 0, left: -100, zIndex: 1 }}
          />
          <Image src={Computing.src} alt="" />
          <Image
            src={BgCoin.src}
            alt=""
            style={{ position: 'absolute', bottom: -23, left: -25, zIndex: 2, width: 266, height: 206 }}
          />
          <Image src={BgCionRight.src} alt="" style={{ position: 'absolute', bottom: -18, right: 0, zIndex: 2 }} />
          <JumpBotton sx={{ position: 'absolute', top: 18, right: 20 }}>
            <JumpSvg />
          </JumpBotton>
          <Stack gap={10} mt={16}>
            <TypographyTitle>{t('flexible_model')}</TypographyTitle>
            <TypographyText>{t('multiple_access_options')}</TypographyText>
          </Stack>
          <FormCm
            sx={{
              width: 221,
              borderRadius: 10,
              backdropFilter: 'blur(2px)',
              border: '1px solid rgba(255, 255, 255, 0.25)',
              position: 'absolute',
              bottom: -10,
              left: '50%',
              transform: 'translateX(-50%)',
              zIndex: 3,
              top: 220,
              background: 'rgba(12, 12, 12, 1)'
            }}
            title1={t('landing_page_of')}
            title2={t('landing_page_of')}
            text1={t('users_can')}
            text2={t('the_ai_bot')}
          />
        </BoxContainer>
        <BoxContainer>
          <Image src={BgUser.src} alt="" style={{ position: 'absolute', width: 695, top: 0, left: -75 }} />
          <JumpBotton sx={{ position: 'absolute', top: 18, right: 20 }}>
            <JumpSvg />
          </JumpBotton>
          <Image src={User.src} alt="" />
          <Stack gap={10} mt={16}>
            <TypographyTitle>{t('decentralized_ai')}</TypographyTitle>
            <TypographyText>{t('blockchain_powered')}</TypographyText>
          </Stack>
        </BoxContainer>
        <BoxContainer>
          <Image src={BgRobot.src} alt="" style={{ position: 'absolute', width: 656, top: 6, left: -64 }} />
          <JumpBotton sx={{ position: 'absolute', top: 18, right: 20 }}>
            <JumpSvg />
          </JumpBotton>
          <Image src={Robot.src} alt="" />
          <Stack gap={10} mt={16}>
            <TypographyTitle>{t('community_driven')}</TypographyTitle>
            <TypographyText>{t('collaborative')}</TypographyText>
          </Stack>
        </BoxContainer>
      </Stack>
    )
  }
  return (
    <Stack
      width={'100%'}
      alignItems={'center'}
      height={1024}
      paddingTop={80}
      flexDirection={'column'}
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
          <Stack gap={10} sx={{ position: 'absolute', top: 39, left: 112, width: 420, zIndex: 4 }}>
            <TypographyTitle>{t('decentralized_ai')}</TypographyTitle>
            <TypographyText>{t('blockchain_powered')}</TypographyText>
          </Stack>
        </BoxContainer>
        <BoxContainer width={569} height={207}>
          <Image src={BgRobot.src} alt="" style={{ width: 656, top: 6, left: -64 }} />
          <JumpBotton sx={{ top: 15, right: 15 }}>
            <JumpSvg />
          </JumpBotton>
          <Image src={Robot.src} alt="" style={{ top: 30, left: 30 }} />
          <Stack gap={10} sx={{ position: 'absolute', top: 39, left: 107, width: 430, zIndex: 4 }}>
            <TypographyTitle>{t('community_driven')}</TypographyTitle>
            <TypographyText>{t('collaborative')}</TypographyText>
          </Stack>
        </BoxContainer>
      </Stack>
      <BoxContainer width={1148} height={473}>
        <Image src={BgComputing.src} alt="" style={{ width: 1324, top: 18, left: -88, zIndex: 1 }} />
        <Image src={Computing.src} alt="" style={{ top: 29, left: 27 }} />
        <Image src={BgStarLeft.src} alt="" style={{ bottom: 0, left: 236, zIndex: 2 }} />
        <Image src={BgStarRight.src} alt="" style={{ bottom: 0, left: 544, zIndex: 2 }} />
        <Image src={BgCoin.src} alt="" style={{ bottom: -83, left: 204, zIndex: 2 }} />
        <Image src={BgCionRight.src} alt="" style={{ bottom: -1, right: 261, zIndex: 2 }} />
        <JumpBotton sx={{ top: 30, right: 30 }}>
          <JumpSvg />
        </JumpBotton>
        <Stack gap={10} sx={{ position: 'absolute', top: 37, left: 100, width: 942, zIndex: 4 }}>
          <TypographyTitle>{t('flexible_model')}</TypographyTitle>
          <TypographyText>{t('multiple_access_options')}</TypographyText>
        </Stack>
        <FormCm
          sx={{
            width: 347,
            height: 293,
            borderRadius: 10,
            backdropFilter: 'blur(2px)',
            border: '1px solid rgba(255, 255, 255, 0.25)',
            position: 'absolute',
            bottom: -10,
            left: 400,
            zIndex: 3,
            '& img': {
              position: 'unset'
            }
          }}
          title1={t('landing_page_of')}
          title2={t('landing_page_of')}
          text1={t('users_can')}
          text2={t('the_ai_bot')}
        />
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
  cursor: pointer;
  @media only screen and (max-width: 640px) {
    width: calc(100vw - 42px);
    padding: 29px 18px 29px 27px;
  }
`

const TypographyTitle = styled(Typography)`
  color: #fff;
  font-size: 24px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  word-break: break-word;
  @media only screen and (max-width: 640px) {
    font-size: 16px;
  }
`

const TypographyText = styled(Typography)`
  color: #fff;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  opacity: 0.5;
  word-break: break-word;
  @media only screen and (max-width: 640px) {
    font-size: 12px;
    opacity: 1;
  }
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
