'use client'
import Header from 'components/Header'
import { useState } from 'react'

export default function PackHeader() {
  const [open, setOpen] = useState(false)
  return <Header open={open} setOpen={setOpen} />
}
