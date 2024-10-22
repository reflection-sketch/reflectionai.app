import { Box } from '@mui/material'
import { useActiveWeb3React } from 'hooks'
import React from 'react'
import { ExternalLink } from 'components/Global'
import { getEtherscanLink } from 'utils/getEtherscanLink'
import MessageBox from './MessageBox'
import { useTranslation } from 'react-i18next'

export default function TransactionSubmittedModal({ hash }: { hash?: string }) {
  const { chainId } = useActiveWeb3React()
  const { t } = useTranslation()

  return (
    <MessageBox type={'success'} header={'Transaction Confirmed'}>
      <Box display="grid" gap="20px" justifyContent="center">
        {chainId && hash && (
          <ExternalLink
            underline="always"
            href={getEtherscanLink(chainId, hash, 'transaction')}
            style={{ fontSize: 12 }}
          >
            {t('view_on')}
          </ExternalLink>
        )}
      </Box>
    </MessageBox>
  )
}
