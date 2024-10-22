'use client'
import { styled, Stack, Typography, Box, SxProps, Theme } from '@mui/material'
import useBreakpoint from 'hooks/useBreakpoint'
import { useEffect, useState } from 'react'
import Star from 'assets/home/features/star.png'
import StepLineSvg from 'assets/home/features/step.svg'
import StepLine1Svg from 'assets/home/features/step1.svg'
import StepLine2Svg from 'assets/home/features/step2.svg'
import StepLine3Svg from 'assets/home/features/step3.svg'
import Line from 'assets/home/features/line.svg'
import Desktop from 'assets/home/features/desktop.png'
import Shadow from 'assets/home/second/shadowSecond.png'
import Image from 'components/Image'
import StreamerButton from 'components/Button/Streamer'
import { CSSTransition } from 'react-transition-group'
import { ButtonBox, FormInput } from './SecondPage'
import ThreeStar from 'assets/home/second/threeStar.png'
import ClearIcon from '@mui/icons-material/Clear'
import StarLine from 'assets/home/features/starLine.png'
import DeskSecond from 'assets/home/second/deskSecond.png'
import { useTranslation } from 'react-i18next'

export const FormCm = ({
  sx,
  title1,
  text1,
  title2,
  text2
}: {
  sx?: SxProps<Theme>
  title1?: string
  title2?: string
  text1?: string
  text2?: string
}) => {
  const isMd = useBreakpoint('md')
  const { t } = useTranslation()

  return (
    <FormBox sx={{ ...sx }}>
      <Box
        display={'flex'}
        alignItems={'center'}
        justifyContent={'space-between'}
        width={'100%'}
        padding={isMd ? '11px 7px' : '11px 26px 7px 11px'}
        bgcolor={'rgba(217, 217, 217, 0.05)'}
      >
        <Box display={'flex'} alignItems={'center'}>
          <Image src={ThreeStar.src} alt="" width={isMd ? 20 : 40} height={isMd ? 20 : 41} />
          <Typography variant="h4" fontSize={isMd ? 14 : 18} fontWeight={900} color={'#fff'}>
            {t('the_ref_ai')}
          </Typography>
        </Box>
        <ClearIcon style={{ fontSize: isMd ? 16 : 24 }} />
      </Box>
      <Box
        sx={{
          width: '100%',
          padding: isMd ? '11px 16px' : '20px 30px 31px'
        }}
      >
        <Typography variant="h6" mb={10}>
          {title1 ? title1 : t('required_functionality')}
        </Typography>
        <FormInput>
          <Typography variant="h6" sx={{ wordBreak: 'break-word' }}>
            {text1 ? text1 : t('an_ai_power_system')}
          </Typography>
        </FormInput>
        <Typography variant="h6" mb={10}>
          {title2 ? title2 : t('platform_requirements')}
        </Typography>
        <FormInput>
          <Typography variant="h6" sx={{ wordBreak: 'break-word' }}>
            {text2 ? text2 : t('support_for_both')}
          </Typography>
        </FormInput>
        <ButtonBox>{t('generate')}</ButtonBox>
      </Box>
    </FormBox>
  )
}

function useTabList() {
  const { t } = useTranslation()
  return [
    {
      title: t('ai_mini_app'),
      text: t('discover_and')
    },
    {
      title: t('intelligent_matching'),
      text: t('our_diverse')
    },
    {
      title: t('comprehensive'),
      text: t('access_the_most')
    }
  ]
}

const end = 100
const duration = 10000
const stepTime = 20
const steps = Math.ceil(duration / stepTime)

export default function Page({ height }: { height: number }) {
  const isMd = useBreakpoint('md')
  const [tab, setTab] = useState(0)
  const [number, setNumber] = useState(0)
  const { t } = useTranslation()
  const TabList = useTabList()

  useEffect(() => {
    if (height < 100) {
      setTab(0)
    } else if (height >= 100 && height < 200) {
      setTab(1)
    } else {
      setTab(2)
    }
  }, [height])
  const stepValue = end / steps
  useEffect(() => {
    let start = 0
    const interval = setInterval(() => {
      start += stepValue
      if (start >= end) {
        setNumber(end)
        clearInterval(interval)
      } else {
        setNumber(Math.round(start))
      }
    }, stepTime)
    return () => clearInterval(interval)
  }, [stepValue])
  if (isMd) {
    return (
      <Stack
        width={'100vw'}
        sx={{
          padding: '80px 42px 70px',
          position: 'relative'
        }}
      >
        <Typography variant="h4" fontSize={17} fontWeight={900} color={'#1F84FF'} textAlign={'center'}>
          {t('ai_pipeline')}
        </Typography>
        <Typography
          variant="h3"
          fontSize={25}
          fontWeight={900}
          color={'#fff'}
          lineHeight={'50px'}
          textAlign={'center'}
          mt={9}
          mb={34}
        >
          {t('what_is_r_ai')}
        </Typography>
        <Box width={'100%'} height={'100%'} position={'relative'}>
          <Image src={DeskSecond.src} alt="" width={'100%'} style={{ opacity: 0.7 }} />
          <Box
            sx={{
              width: 'calc(100vw - 84px)',
              height: 'calc((100vw - 84px) / 3.326)',
              background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, #000 100%)',
              position: 'absolute',
              bottom: 0
            }}
          ></Box>
        </Box>
        <Stack gap={30} mt={4}>
          {TabList.map((item, index) => {
            return (
              <Stack key={index} gap={10}>
                <Typography variant="h4" fontWeight={900} color={'#fff'}>
                  {item.title}
                </Typography>
                <Typography variant="h6" color={'#fff'} sx={{ wordBreak: 'break-word' }}>
                  {item.text}
                </Typography>
              </Stack>
            )
          })}
          <StreamerButton text="Learn More" width={154} sx={{ mt: 11 }} />
        </Stack>
      </Stack>
    )
  }
  return (
    <Box
      display={'flex'}
      justifyContent={'space-between'}
      marginLeft={78}
      width={'100%'}
      maxWidth={1440}
      mt={140}
      gap={92}
    >
      <Stack position={'relative'} height={1024} mt={57}>
        <Typography variant="h3" fontWeight={900} color={'#1F84FF'}>
          {t('ai_pipeline')}
        </Typography>
        <Typography1 variant="h2">{t('what_is_r_ai')}</Typography1>
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
          <Box position={'relative'} width={'100%'} sx={{ opacity: tab === 0 ? 1 : 0 }}>
            <Image src={Desktop.src} alt="" style={{ position: 'absolute', top: 0, left: 0, zIndex: 1 }} />
            <Image src={Shadow.src} alt="" style={{ position: 'absolute', top: -65, left: -65, zIndex: 2 }} />
            <FormCm
              title1={t('landing_page_of')}
              title2={t('landing_page_of')}
              text1={t('you_can_communicate')}
              text2={t('the_ai_bot')}
            />
          </Box>
        </CSSTransition>
        <CSSTransition in={tab === 1} timeout={1000} classNames="feature1">
          <Box position={'relative'} width={'100%'} sx={{ opacity: tab === 1 ? 1 : 0 }}>
            <Image src={Desktop.src} alt="" style={{ position: 'absolute', top: 0, left: 0, zIndex: 1 }} />
            <FormBox sx={{ width: 408 }}>
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
                    {t('the_ref_ai')}
                  </Typography>
                </Box>
                <ClearIcon />
              </Box>
              <Stack
                alignItems={'center'}
                sx={{
                  width: '100%',
                  padding: '50px 30px 28px'
                }}
              >
                <video loop autoPlay muted style={{ width: 200, height: 200 }}>
                  <source src="/video.webm" type="video/webm" />
                  <source src="/video.webm" type="video/mp4" />
                </video>
                <Text mb={34} mt={18}>
                  {t('analyzing_your_ai')}
                </Text>
                <Text mb={11} sx={{ display: 'flex', gap: 4 }}>
                  {number} %
                </Text>
                <StyledLine />
                <ButtonBox>{t('generate')}</ButtonBox>
              </Stack>
            </FormBox>
          </Box>
        </CSSTransition>
        <CSSTransition in={tab === 2} timeout={1000} classNames="feature1">
          <Box
            position={'relative'}
            width={'100%'}
            sx={{ opacity: tab === 2 ? 1 : 0, '& img': { position: 'absolute' } }}
          >
            <Image src={Desktop.src} alt="" style={{ top: 0, left: 0, zIndex: 2 }} />
            <Image src={StarLine.src} alt="" style={{ top: 50, left: -205, zIndex: 1 }} />
          </Box>
        </CSSTransition>
      </Stack>
    </Box>
  )
}

const Typography1 = styled(Typography)`
  color: #fff;
  font-weight: 900;
  line-height: 50px;
  width: 330px;
  word-break: break-word;
  margin: 22px 0 56px;
`
const FormBox = styled(Box)`
  width: 387px;
  flex-shrink: 0;
  border-radius: 28px;
  border: 1px solid rgba(154, 154, 154, 0.5);
  background: rgba(12, 12, 12, 0.5);
  backdrop-filter: blur(10px);
  z-index: 3;
  position: absolute;
  left: 190px;
  top: 185px;
  overflow: hidden;
`

const Text = styled(Typography)`
  color: rgba(255, 255, 255, 0.5);
  font-size: 18px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  letter-spacing: -0.9px;
`

const StyledLine = styled(Line)`
  transform: rotate(0deg);
  margin-bottom: 23px;
`
