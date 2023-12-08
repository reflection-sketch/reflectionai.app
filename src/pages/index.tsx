import { Box, Button, Container, Stack, Typography, styled } from '@mui/material'
import { ConnectButton } from '@particle-network/connect-react-ui'
import Checkbox from 'components/Checkbox'
import Input from 'components/Input'
import Head from 'next/head'
import { useUpdateThemeMode } from 'state/application/hooks'

const StyledContainer = styled(Container)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  padding: 20,
  minHeight: '100vh'
}))

export default function Home() {
  const { toggleThemeMode } = useUpdateThemeMode()

  return (
    <>
      <Head>
        <title>Next base app</title>
      </Head>
      <StyledContainer maxWidth="md">
        <Box display={'grid'} justifyItems={'center'} gap={20}>
          <Button variant={'outlined'} onClick={() => toggleThemeMode()}>
            <span>toggle theme</span>
          </Button>
          <ConnectButton />
        </Box>
        <Stack spacing={10}>
          <Typography variant="h1">h1 Typography</Typography>
          <Typography variant="body1">Typography</Typography>
          <Input value={''} label="label" />

          <Checkbox checked />
        </Stack>
      </StyledContainer>
    </>
  )
}
