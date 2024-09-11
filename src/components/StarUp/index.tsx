'use client'
import JumpSvg from 'assets/home/highlights/jump.svg'
import { Box, styled } from '@mui/material'

const Jump = styled(JumpSvg)(
  ({
    top,
    left,
    right,
    scale,
    delay,
    duration
  }: {
    top: number | string
    left?: number | string
    right?: number | string
    scale?: number
    delay?: number
    duration?: number
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
        opacity: 1,
        transform: 'translateY(-18px)'
      },
      '60%': {
        opacity: 1,
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
    <Box position={'relative'}>
      <Jump top={500} left={200} delay={5} />
    </Box>
  )
}
