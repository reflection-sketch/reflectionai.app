import { Box, Button, Container, Stack, Typography, styled } from '@mui/material'
import { ConnectKitButton } from 'connectkit'
import Checkbox from 'components/Checkbox'
import Input from 'components/Input'
import { SupportedChainId } from 'constants/chains'
import { Currency, CurrencyAmount } from 'constants/token'
import { useApproveCallback } from 'hooks/useApproveCallback'
import Head from 'next/head'
import { useUpdateThemeMode } from 'state/application/hooks'

const StyledContainer = styled(Container)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  padding: 20,
  minHeight: '100vh'
}))

export default function Home() {
  const { toggleThemeMode } = useUpdateThemeMode()
  const [, run] = useApproveCallback(
    new CurrencyAmount(
      new Currency(SupportedChainId.SEPOLIA, '0x50cfe8075Ff70CBBe14b65D46a12AB71bCf79758', 18, 'ST'),
      '10000000000000000000'
    ),
    '0x5069129410122A4C1F2448c77becDc5A8A784a5D'
  )

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
          <ConnectKitButton />
          <Button onClick={run}>run</Button>
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
