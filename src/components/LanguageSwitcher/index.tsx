import { useTranslation } from 'react-i18next'
import { useState } from 'react'
import { MenuItem, Select } from '@mui/material'
import useBreakpoint from '../../hooks/useBreakpoint'

type Lang = 'en' | 'zh' | 'ko'
export const LanguageSwitcher = () => {
  const { i18n } = useTranslation()
  const [lan, setLan] = useState<Lang>('en')
  const isSm = useBreakpoint()

  return (
    <Select
      value={lan}
      label="Age"
      onChange={e => {
        const v = e.target.value
        setLan(v as Lang)
        i18n.changeLanguage(v)
      }}
      sx={{
        height: isSm ? 30 : 40
      }}
    >
      <MenuItem value={'en'}>En</MenuItem>
      <MenuItem value={'zh'}>中文</MenuItem>
      <MenuItem value={'ko'}>한국어</MenuItem>
    </Select>
  )
}

export default LanguageSwitcher
