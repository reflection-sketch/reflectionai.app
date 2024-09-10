'use client'
import { Box, styled, Stack } from '@mui/material'
import useBreakpoint from 'hooks/useBreakpoint'
import Image from 'components/Image'
import JumpSvg from 'assets/home/highlights/jump.svg'
import Computing from 'assets/home/highlights/computing.png'
import Robot from 'assets/home/highlights/robot.png'
import User from 'assets/home/highlights/user.png'
export default function Page() {
  const isSm = useBreakpoint('sm')
  isSm
  return (
    <Stack width={'100%'} alignItems={'center'}>
      <Stack flexDirection={'row'} gap={20} mb={25}>
        <BoxContainer width={559} height={207}>
          <JumpBotton sx={{ top: 15, right: 15 }}>
            <JumpSvg />
          </JumpBotton>
          <Image src={User.src} alt="" style={{ top: 36, left: 32 }} />
        </BoxContainer>
        <BoxContainer width={569} height={207}>
          <JumpBotton sx={{ top: 15, right: 15 }}>
            <JumpSvg />
          </JumpBotton>
          <Image src={Robot.src} alt="" style={{ top: 30, left: 30 }} />
        </BoxContainer>
      </Stack>
      <BoxContainer width={1148} height={473}>
        <JumpBotton sx={{ top: 30, right: 30 }}>
          <JumpSvg />
        </JumpBotton>
        <Image src={Computing.src} alt="" />
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
`

// const TypographyTitle = styled(Typography)`
//   color: #FFF;
//   font-size: 24px;
//   font-style: normal;
//   font-weight: 900;
//   line-height: normal;
//   word-break: break-word;
// `

// const TypographyText = styled(Typography)`
//   color: #FFF;
//   font-size: 16px;
//   font-style: normal;
//   font-weight: 400;
//   line-height: normal;
//   opacity: 0.5;
//   word-break: break-word;
// `

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
