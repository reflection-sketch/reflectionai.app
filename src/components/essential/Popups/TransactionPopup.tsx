import ReportGmailerrorredOutlinedIcon from '@mui/icons-material/ReportGmailerrorredOutlined'
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined'
import { Typography, Box } from '@mui/material'
import { useActiveWeb3React } from 'hooks/'
import { getEtherscanLink } from 'utils/getEtherscanLink'
import { ExternalLink } from 'components/Global'
import { useTranslation } from 'react-i18next'

export default function TransactionPopup({
  hash,
  success,
  summary
}: {
  hash?: string
  success?: boolean
  summary?: string
}) {
  const { chainId } = useActiveWeb3React()
  const { t } = useTranslation()

  return (
    <Box display="grid" gap="8px">
      <Box display="flex" alignItems="flex-start" flexWrap="nowrap">
        <div style={{ paddingRight: 16 }}>
          {success ? (
            <CheckCircleOutlineOutlinedIcon color="success" height={20} width={20} />
          ) : (
            <ReportGmailerrorredOutlinedIcon color="error" height={20} width={20} />
          )}
        </div>
        <Typography variant="inherit">
          {summary ? summary : hash ? 'Hash: ' + hash.slice(0, 8) + '...' + hash.slice(58, 65) : '-'}
        </Typography>{' '}
      </Box>
      {chainId && hash && (
        <ExternalLink
          underline="always"
          href={getEtherscanLink(chainId ? chainId : 1, hash, 'transaction')}
          style={{ margin: '9px 32px' }}
        >
          {t('view_on')}
        </ExternalLink>
      )}
    </Box>
  )
}
