'use client'
import { Stack, debounce, styled } from '@mui/material'
import Features from './Features'
import Highlights from './Highlights'
import FirstPage from './FirstPage'
import RoadMap from './RoadMap'
import FAQ from './FAQ'
import Footer from './Footer'
import Image from 'components/Image'
import Background from 'assets/home/bgBottom.png'
import SecondPage from './SecondPage'
import { useEffect, useState } from 'react'
export default function Page() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const handleScroll = debounce(() => {
      if (window.scrollY > 1024) setShow(true)
    }, 200)
    if (window.scrollY > 1024) {
      setShow(true)
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return (
    <Stack alignItems={'center'} width={1440} margin={'0 auto'} position={'relative'}>
      <FirstPage />
      <SecondPage show={show} />
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
