'use client'
import { Stack, styled } from '@mui/material'
import Features from './Features'
import Highlights from './Highlights'
import FirstPage from './FirstPage'
import RoadMap from './RoadMap'
import FAQ from './FAQ'
import Footer from './Footer'
import Image from 'components/Image'
import Background from 'assets/home/bgBottom.png'
import { useEffect, useState } from 'react'
import useBreakpoint from 'hooks/useBreakpoint'
export default function Page() {
  const [show, setShow] = useState(false)
  const isMd = useBreakpoint('md')
  const [height, setHeight] = useState(0)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 446) setShow(true)
      if (window.scrollY > 1510 && window.scrollY < 1810) {
        setHeight(window.scrollY - 1510)
      }
    }
    if (window.scrollY > 446) {
      setShow(true)
    }
    if (window.scrollY > 1510) {
      setHeight(window.scrollY - 1510)
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return (
    <Stack alignItems={'center'} width={'100vw'} position={'relative'} sx={{ overflowX: isMd ? 'hidden' : 'unset' }}>
      <FirstPage show={show} />
      <Features height={height} />
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
