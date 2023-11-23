import React from 'react'
import { Box, Typography, Button } from '@mui/material'
import Modal from '../'
import SuccessIcon from 'assets/svg/statusIcon/success_icon.svg'
import FailureIcon from 'assets/svg/statusIcon/failure_icon.svg'
import SupportIcon from 'assets/svg/statusIcon/support_icon.svg'
import Error from 'assets/svg/statusIcon/error_icon.svg'
import Warning from 'assets/svg/statusIcon/warning_icon.svg'
import useModal from 'hooks/useModal'

interface Props {
  type: 'success' | 'failure' | 'support' | 'error' | 'warning'
  children?: React.ReactNode
  width?: string
  header?: string
  action?: () => void
  actionText?: string
}

export default function MessageBox({ type, children, width = '480px', header, action, actionText }: Props) {
  const { hideModal } = useModal()

  const icon =
    type === 'success' ? (
      <SuccessIcon height={40} width={40} />
    ) : type === 'failure' ? (
      <FailureIcon />
    ) : type === 'support' ? (
      <SupportIcon />
    ) : type === 'warning' ? (
      <Warning />
    ) : (
      <Error />
    )

  return (
    <Modal width={width}>
      <Box display={'grid'} alignItems={'center'} padding={'40px'} justifyItems="center" gap="20px">
        <Box>{icon}</Box>
        {header && <Typography variant="h6">{header}</Typography>}
        <Box fontSize="18px" textAlign="center" display="grid" justifyItems="center" width="100%">
          {children}
        </Box>

        <Box display="flex" justifyContent="space-around" width="100%" marginTop="10px">
          <Button onClick={hideModal}>Close</Button>
          {type === 'failure' && actionText && <Button onClick={action}>{actionText}</Button>}
        </Box>
      </Box>
    </Modal>
  )
}
