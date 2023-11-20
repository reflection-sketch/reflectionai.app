import { createMulticall } from '@uniswap/redux-multicall'
import { useActiveWeb3React } from 'hooks'
import { useInterfaceMulticall } from 'hooks/useContract'
import { useBlockNumber } from './application/hooks'

const multicall = createMulticall()

export default multicall

export function MulticallUpdater() {
  const { chainId } = useActiveWeb3React()
  const latestBlockNumber = useBlockNumber()
  const contract = useInterfaceMulticall()
  return <multicall.Updater chainId={chainId} latestBlockNumber={latestBlockNumber} contract={contract} />
}
