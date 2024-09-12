'use client'
import Star17 from 'assets/png/star17.png'
import Star21 from 'assets/png/star21.png'
import Star25 from 'assets/png/star25.png'
import Star29 from 'assets/png/star29.png'
import { styled } from '@mui/material'
import Image from 'components/Image'

const Star = styled(Image)(
  ({
    top,
    left,
    right,
    scale,
    delay,
    duration,
    opacity
  }: {
    top: number | string
    left?: number | string
    right?: number | string
    scale?: number
    delay?: number
    duration?: number
    opacity?: number
  }) => ({
    position: 'absolute',
    transform: `scale(${scale || 1})`,
    top: top,
    left: left,
    right: right,
    opacity: 0,
    animation: `moveUp ${duration || 4}s linear infinite ${delay || 0}s`,
    '@keyframes moveUp': {
      '0%': {
        opacity: 0,
        transform: 'translateY(0)'
      },
      '55%': {
        opacity: opacity || 1,
        transform: 'translateY(-18px)'
      },
      '60%': {
        opacity: opacity || 1,
        transform: 'translateY(-20px)'
      },
      '100%': {
        opacity: 0,
        transform: 'translateY(-40px)'
      }
    }
  })
)

export default function StarUp() {
  return (
    <>
      {/* left */}
      <Star src={Star17.src} alt="" top={206} left={67} delay={1} />
      <Star src={Star17.src} alt="" top={151} left={299} delay={3} />
      <Star src={Star17.src} alt="" top={313} left={98} delay={2.5} />
      <Star src={Star17.src} alt="" top={513} left={48} delay={2} />
      <Star src={Star17.src} alt="" top={800} left={75} delay={2.3} />
      <Star src={Star17.src} alt="" top={833} left={31} delay={2} opacity={0.7} />
      <Star src={Star17.src} alt="" top={840} left={185} delay={2.3} />
      <Star src={Star17.src} alt="" top={873} left={151} delay={2} opacity={0.7} />
      <Star src={Star21.src} alt="" top={570} left={248} delay={4} />
      <Star src={Star21.src} alt="" top={392} left={100} delay={1} />
      <Star src={Star21.src} alt="" top={270} left={20} delay={4} />
      <Star src={Star21.src} alt="" top={281} left={212} delay={5} />
      <Star src={Star21.src} alt="" top={730} left={20} delay={1} />
      <Star src={Star25.src} alt="" top={360} left={247} delay={4} />
      <Star src={Star25.src} alt="" top={518} left={171} delay={3} />
      <Star src={Star25.src} alt="" top={618} left={121} delay={6} />
      <Star src={Star25.src} alt="" top={668} left={300} delay={1} />
      <Star src={Star29.src} alt="" top={380} left={350} delay={1} />
      {/* right */}
      <Star src={Star17.src} alt="" top={136} left={1237} delay={1} />
      <Star src={Star17.src} alt="" top={186} left={1400} delay={1} />
      <Star src={Star17.src} alt="" top={236} left={1300} delay={1} />
      <Star src={Star21.src} alt="" top={360} left={1200} delay={2} />
      <Star src={Star17.src} alt="" top={426} left={1406} delay={3} />
      <Star src={Star17.src} alt="" top={592} left={1323} delay={4} duration={3} />
      <Star src={Star17.src} alt="" top={746} left={1256} delay={5} />
      <Star src={Star25.src} alt="" top={820} left={1378} delay={3} />
      <Star src={Star21.src} alt="" top={560} left={1250} delay={2} duration={3} />
      <Star src={Star21.src} alt="" top={454} left={1295} delay={1} />
      <Star src={Star21.src} alt="" top={687} left={1390} delay={3} />
    </>
  )
}
