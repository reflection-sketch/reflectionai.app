import { Box, Stack, Typography } from '@mui/material'
import { shortenAddress } from '../../utils'
import { useActiveWeb3React } from 'hooks'
import { useWalletModalToggle } from 'state/application/hooks'
import { useDisconnect } from 'wagmi'
import StreamerButton from 'components/Button/Streamer'
import useBreakpoint from 'hooks/useBreakpoint'
import User from 'assets/header/user.png'
import Image from 'components/Image'
import OutSvg from 'assets/home/out.svg'

export default function Web3Status() {
  const { chainId, account } = useActiveWeb3React()
  const WalletModalToggle = useWalletModalToggle()
  const { disconnect } = useDisconnect()
  const isMd = useBreakpoint('md')
  return (
    <>
      {!chainId || !account ? (
        <StreamerButton
          width={isMd ? 90 : 156}
          onClick={WalletModalToggle}
          height={45}
          text={isMd ? 'Connect' : 'Connect Wallet'}
          showIcon={isMd ? false : true}
        />
      ) : (
        <Stack flexDirection={'row'} alignItems={'center'}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '2px solid #3E3E3E',
              borderRadius: 100,
              cursor: 'pointer'
            }}
          >
            <Image src={User.src} alt="" style={{ borderRadius: 100 }} />
          </Box>
          <Stack ml={5} mr={isMd ? 5 : 17}>
            <Typography variant="h5" fontWeight={900} color={'#fff'}>
              {shortenAddress(account, isMd ? 0 : 4)}
            </Typography>
            <Typography variant="h6" color={'rgba(255, 255, 255, 0.25)'}>
              0 TON
            </Typography>
          </Stack>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 10,
              background: 'rgba(255, 255, 255, 0.05)',
              height: isMd ? 30 : 44,
              width: isMd ? 30 : 44,
              cursor: 'pointer',
              '&:hover': {
                background: '#FF3F3F'
              }
            }}
            onClick={() => {
              disconnect()
            }}
          >
            <OutSvg />
          </Box>
        </Stack>
      )}
    </>
  )
}
