'use client'
import { Box, Stack, Typography, styled } from '@mui/material'
import ProjectIcon from 'assets/header/projectIcon.png'
import ProjectName from 'assets/header/projectName.png'
import Image from 'components/Image'
import useBreakpoint from 'hooks/useBreakpoint'

interface Porps {
  link: string
  name: string
}

const Explore: Porps[] = [
  {
    link: 'https://x.com/ReflectionAI_/',
    name: 'Twitter'
  },
  {
    link: 'https://t.me/reflection_ai/',
    name: 'Telegram'
  },
  {
    link: 'https://www.linkedin.com/company/reflectionai-pte-ltd/',
    name: 'Linkedin'
  }
]

const Resources: Porps[] = [
  {
    link: 'https://reflectionai.app/',
    name: 'Website'
  },
  {
    link: 'https://medium.com/@ReflectionAI_',
    name: 'Medium'
  },
  {
    link: 'https://docs.reflectionai.app/',
    name: 'GitBook'
  },
  {
    link: 'https://www.youtube.com/channel/UC6Vx1vWN4wMNb7giaLxZNgQ',
    name: 'YouTube'
  },
  {
    link: 'https://docs.reflectionai.app/',
    name: 'Whitepaper'
  }
]

const Company: Porps[] = [
  {
    link: 'https://soquest.xyz/space/ReflectionAI',
    name: 'SoQuest'
  },
  {
    link: 'https://id.nabox.io/profile?ID=ReflectionAI',
    name: 'Nabox'
  },
  {
    link: 'https://zealy.io/cw/reflectionai/questboard?invitationId=-ARzuduZr3dV9wsxNIlXU',
    name: 'Zealy'
  },
  {
    link: 'https://taskon.xyz/space/2921692',
    name: 'Taskon'
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
  const isMd = useBreakpoint('md')
  if (isMd) {
    return (
      <Box width={'100%'} mb={25} paddingLeft={32}>
        <Box display={'flex'} alignItems={'center'}>
          <Image src={ProjectIcon.src} alt="" width={25.3} height={20.7} />
          <Image src={ProjectName.src} alt="" width={108.7} height={36} />
        </Box>
        <Text marginLeft={isMd ? 25 : 38}>Reflection AI Ltd © 2024. All Rights Reserved</Text>
      </Box>
    )
  }
  return (
    <Stack width={'100%'} padding={'0 105px'}>
      <Box
        sx={{
          width: 'calc(100% - 20px)',
          height: 2,
          background: '#fff',
          opacity: 0.5,
          mixBlendMode: 'soft-light',
          marginRight: 20
        }}
      ></Box>
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          padding: '30px 0 45px'
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
          <LinkBox title="Get In Touch" list={Explore} />
          <LinkBox title="Get Started" list={Resources} />
          <LinkBox title="Airdrop Quest" list={Company} />
        </Box>
      </Box>
    </Stack>
  )
}

const Text = styled(Typography)`
  color: #fff;
  font-size: 14px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  opacity: 0.5;
  @media only screen and (max-width: 640px) {
    font-size: 12px;
  }
`
