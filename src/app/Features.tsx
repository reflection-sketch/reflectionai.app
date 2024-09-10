'use client'
import { styled, Stack, Typography } from '@mui/material'
import useBreakpoint from 'hooks/useBreakpoint'
// import Image from 'components/Image'

export default function Page() {
  const isSm = useBreakpoint('sm')
  isSm
  return (
    <Stack width={'100%'} marginLeft={78} position={'relative'}>
      <Typography variant="h3" fontWeight={900} color={'#1F84FF'}>
        Our Features
      </Typography>
      <Typography1 variant="h2">What is Reflection AI?</Typography1>
    </Stack>
  )
}

// const RadiusBox = styled(Box)`
//   width: 1487px;
//   height: 1486px;
//   flex-shrink: 0;
//   border-radius: 1487px;
//   opacity: 0.3;
//   background: radial-gradient(50% 50% at 50% 50%, rgba(255, 255, 255, 0.00) 53%, rgba(247, 247, 247, 0.08) 64%, rgba(240, 240, 240, 0.13) 76%, rgba(233, 233, 233, 0.31) 84.5%, rgba(225, 225, 225, 0.57) 92.5%, #D9D9D9 100%);
//   box-shadow: 0px -20px 40px 0px rgba(255, 255, 255, 0.60);
//   position: absolute;
//   top: 176px;
// `

const Typography1 = styled(Typography)`
  color: #fff;
  font-weight: 900;
  line-height: 50px;
  width: 330px;
  word-break: break-word;
  margin: 22px 0 56px;
`
