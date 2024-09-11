'use client'
import FooterLine from 'assets/home/footerLine.svg'
import { Box, Stack, Typography, styled } from '@mui/material'
import ProjectIcon from 'assets/header/projectIcon.png'
import ProjectName from 'assets/header/projectName.png'
import Image from 'components/Image'

interface Porps {
  link: string
  name: string
}

const Explore: Porps[] = [
  {
    link: '/',
    name: 'Templates'
  },
  {
    link: '/',
    name: 'From Figma to Dora'
  },
  {
    link: '/',
    name: 'Reflection AI BETA'
  },
  {
    link: '/',
    name: 'Reflection AI - Figma Plugin'
  }
]

const Resources: Porps[] = [
  {
    link: '/',
    name: 'Updates'
  },
  {
    link: '/',
    name: 'Help center'
  },
  {
    link: '/',
    name: 'Pricing'
  },
  {
    link: '/',
    name: 'Contact'
  },
  {
    link: '/',
    name: 'Reflection Community'
  }
]

const Company: Porps[] = [
  {
    link: '/',
    name: 'Terms & Conditions'
  },
  {
    link: '/',
    name: 'Privacy'
  }
]

const LinkBox = ({ list, title }: { list: Porps[]; title: string }) => {
  return (
    <Stack gap={7}>
      <Typography variant="h4" fontWeight={700} color={'#fff'}>
        {title}
      </Typography>
      {list.map((item, index) => {
        return (
          <Text
            key={index}
            onClick={() => window.open(item.link, '_blank')}
            sx={{ cursor: 'pointer', '&:hover': { opacity: 0.8 } }}
          >
            {item.name}
          </Text>
        )
      })}
    </Stack>
  )
}

export default function Page() {
  return (
    <>
      <FooterLine />
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          padding: '30px 62px 45px 105px'
        }}
      >
        <Box>
          <Box display={'flex'} alignItems={'center'}>
            <Image src={ProjectIcon.src} alt="" />
            <Image src={ProjectName.src} alt="" />
          </Box>
          <Text marginLeft={38}>Reflection AI Ltd © 2024. All Rights Reserved</Text>
        </Box>
        <Box display={'flex'} gap={35}>
          <LinkBox title="Explore" list={Explore} />
          <LinkBox title="Resources" list={Resources} />
          <LinkBox title="Company" list={Company} />
        </Box>
      </Box>
    </>
  )
}

const Text = styled(Typography)`
  color: #fff;
  font-size: 14px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  opacity: 0.5;
`
