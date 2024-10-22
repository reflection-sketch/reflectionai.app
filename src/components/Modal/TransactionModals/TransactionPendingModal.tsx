import { useTheme, Box, Typography } from '@mui/material'
import Spinner from 'components/Spinner'
import Modal from '../index'
import React from 'react'
import { useTranslation } from 'react-i18next'

export default function TransactionPendingModal({ pendingText }: { pendingText?: string }) {
  const theme = useTheme()
  const { t } = useTranslation()
  return (
    <Modal closeIcon>
      <Box display="grid" padding="40px 24px" gap="24px" justifyItems="center">
        <Spinner size="40px" />
        <Typography fontWeight={400} fontSize={18}>
          {t('waiting_for')}
        </Typography>
        <Typography fontWeight={400} fontSize={14} textAlign="center" color={theme.palette.text.secondary}>
          {pendingText || 'Please initiate transaction in your wallet'}
        </Typography>
      </Box>
    </Modal>
  )
}
