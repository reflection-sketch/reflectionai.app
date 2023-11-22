import React from 'react'
import { ConnectButton } from '@particle-network/connect-react-ui'
import { useTokenContract } from 'hooks/useContract'
import { useSingleCallResult } from 'hooks/multicall'
import { useActiveWeb3React } from 'hooks'
import { useSwitchNetwork } from 'hooks/useSwitchNetwork'

export default function Wallet() {
  const { chainId } = useActiveWeb3React()
  const tokenContract = useTokenContract('0x85eDB7A0cbAcf5BD641e0FF5D6270bEf9C72Bd6B', false)
  const res = useSingleCallResult(11155111, tokenContract, 'balanceOf', ['0x5718D9C95D15a766E9DdE6579D7B93Eaa88a26b8'])
  console.log('🚀 ~ file: index.tsx:9 ~ Wallet ~ res:', chainId, res.result?.[0].toString())
  const switchNetwork = useSwitchNetwork()

  return (
    <div>
      <ConnectButton />
      <button onClick={() => switchNetwork(1)}>switch chain</button>
    </div>
  )
}
