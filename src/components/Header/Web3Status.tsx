import { Box, Button, Stack, Typography, styled } from '@mui/material'
import { shortenAddress } from '../../utils'
import { useActiveWeb3React } from 'hooks'
import { useWalletModalToggle } from 'state/application/hooks'
import ArrowSvg from 'assets/header/arrow.svg'
import { useDisconnect } from 'wagmi'
export default function Web3Status() {
  const { chainId, account } = useActiveWeb3React()
  const WalletModalToggle = useWalletModalToggle()
  const { disconnect } = useDisconnect()
  return (
    <>
      {!chainId || !account ? (
        <ConnectBox>
          <ConnectButton onClick={WalletModalToggle}>
            <Typography variant="h4" color={'#FFF'}>
              {'Connect Wallet'}
            </Typography>
            <ArrowSvg />
          </ConnectButton>
        </ConnectBox>
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

const ConnectBox = styled(Box)`
  width: 156px;
  height: 44px;
  background-image: conic-gradient(
    from var(--border-gradient-angle) at 50% 50%,
    transparent,
    #fff 10%,
    transparent 17%
  );
  background-size: contain;
  padding: 1px;
  animation: buttonBorderSpin 1.5s linear infinite 0ms;
  border-radius: 15px;
  @property --border-gradient-angle {
    syntax: '<angle>';
    inherits: true;
    initial-value: 0turn;
  }
  @keyframes buttonBorderSpin {
    100% {
      --border-gradient-angle: 0turn;
    }
    0% {
      --border-gradient-angle: 1turn;
    }
  }
`

const ConnectButton = styled(Box)`
  width: 100%;
  height: 100%;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  border-radius: 15px;
  cursor: pointer;
  border: 1px solid rgba(255, 255, 255, 0.25);
  background: linear-gradient(132deg, #823a12 -6.89%, #000 41.37%, #000 58.65%, #2c6ebe 122.98%);
`
