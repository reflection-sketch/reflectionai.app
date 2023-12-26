import { TransactionResponse } from '@ethersproject/providers'
import { useRequest } from 'ahooks'
import useModal from './useModal'
import TransactionPendingModal from 'components/Modal/TransactionModals/TransactionPendingModal'
import TransactionSubmittedModal from 'components/Modal/TransactionModals/TransactionSubmittedModal'
import TransactionConfirmedModal from 'components/Modal/TransactionModals/TransactionConfirmedModal'
import MessageBox from 'components/Modal/TransactionModals/MessageBox'

export function useTransactionModalWrapper(event: () => Promise<TransactionResponse>) {
  const { showModal } = useModal()

  const { runAsync } = useRequest(
    async () => {
      try {
        showModal(<TransactionPendingModal />)
        const { hash, wait } = await event()
        const ret = new Promise((resolve, reject) => {
          showModal(<TransactionSubmittedModal hash={hash} beforeClose={() => reject()} />)
          wait(1).then(curReceipt => {
            resolve(curReceipt)
          })
        })
        ret
          .then(() => {
            showModal(<TransactionConfirmedModal hash={hash} />)
          })
          .catch()
      } catch (error: any) {
        showModal(
          <MessageBox type="error" header="Transaction Error">
            {error?.reason || error?.message || error?.toString()}
          </MessageBox>
        )
      }
    },
    {
      manual: true
    }
  )

  return runAsync
}
