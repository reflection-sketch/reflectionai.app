import { Button, Stack, Typography } from '@mui/material'
import { shortenAddress } from '../../utils'
import { useActiveWeb3React } from 'hooks'
import { useWalletModalToggle } from 'state/application/hooks'

import { useDisconnect } from 'wagmi'
import StreamerButton from 'components/Button/Streamer'
import useBreakpoint from 'hooks/useBreakpoint'
export default function Web3Status() {
  const { chainId, account } = useActiveWeb3React()
  const WalletModalToggle = useWalletModalToggle()
  const { disconnect } = useDisconnect()
  const isMd = useBreakpoint('md')
  return (
    <>
      {!chainId || !account ? (
        <StreamerButton onClick={WalletModalToggle} text={'Connect Wallet'} showIcon={isMd ? false : true} />
      ) : (
        <Stack flexDirection={'row'} alignItems={'center'}>
          <Typography variant="h5">{account ? shortenAddress(account) : 'wallet connect'}</Typography>
          <Button
            onClick={() => {
              disconnect()
            }}
          >
            out
          </Button>
        </Stack>
      )}
    </>
  )
}
