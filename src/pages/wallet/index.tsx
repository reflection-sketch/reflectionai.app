import React, { useEffect } from 'react'
import { ConnectButton } from '@particle-network/connect-react-ui'
import { useTokenContract } from 'hooks/useContract'
import { useSingleCallResult } from 'hooks/multicall'

export default function Wallet() {
  const tokenContract = useTokenContract('0x85eDB7A0cbAcf5BD641e0FF5D6270bEf9C72Bd6B', false)
  const res = useSingleCallResult(tokenContract, 'name')
  console.log('🚀 ~ file: index.tsx:9 ~ Wallet ~ res:', res)
  useEffect(() => {
    console.log(
      '🚀 ~ file: index.tsx:9 ~ tokenContract?.name ~ res:',
      tokenContract?.name().then((res: any) => {
        console.log('🚀 ~ file: index.tsx:11 ~ console.log ~ res:', res)
      })
    )
  }, [tokenContract])

  return (
    <div>
      <ConnectButton />
    </div>
  )
}
