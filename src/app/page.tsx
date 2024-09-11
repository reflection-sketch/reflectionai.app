'use client'
import { Stack, styled } from '@mui/material'
import useBreakpoint from 'hooks/useBreakpoint'
import Features from './Features'
import Highlights from './Highlights'
import FirstPage from './FirstPage'
import RoadMap from './RoadMap'
import FAQ from './FAQ'
import Footer from './Footer'
import Image from 'components/Image'
import Background from 'assets/home/bgBottom.png'
export default function Page() {
  const isSm = useBreakpoint('sm')
  isSm
  return (
    <Stack alignItems={'center'} width={1440} margin={'0 auto'} position={'relative'} overflow={'hidden'}>
      <FirstPage />
      <Features />
      <Highlights />
      <RoadMap />
      <FAQ />
      <Footer />
      <BGroundBox src={Background.src} alt="" />
    </Stack>
  )
}

const BGroundBox = styled(Image)`
  width: 100%;
  height: 1212px;
  position: absolute;
  bottom: 0;
  z-index: -3;
`
