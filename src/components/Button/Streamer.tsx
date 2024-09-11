'use client'

import { Box, SxProps, Theme, Typography, styled } from '@mui/material'
import React from 'react'
import ArrowSvg from 'assets/header/arrow.svg'

export default function StreamerButton({
  text,
  onClick,
  icon,
  width,
  height,
  fontSize,
  scale,
  gap,
  sx
}: {
  text: string
  onClick?: () => void
  icon?: React.ReactNode
  width?: string | number
  height?: string | number
  fontSize?: string | number
  scale?: number
  gap?: string | number
  sx?: SxProps<Theme>
}) {
  return (
    <ConnectBox width={width || 156} height={height || 44} sx={{ ...sx }}>
      <ConnectButton onClick={onClick} gap={gap || 6}>
        <Typography variant="h4" color={'#FFF'} fontSize={fontSize || 16}>
          {text}
        </Typography>
        {icon ? icon : <ArrowSvg style={{ transform: `scale(${scale || 1})` }} />}
      </ConnectButton>
    </ConnectBox>
  )
}

const ConnectBox = styled(Box)`
  background-image: conic-gradient(
    from var(--border-gradient-angle) at 50% 50%,
    transparent,
    #fff 10%,
    transparent 17%
  );
  background-size: contain;
  padding: 1px;
  animation: buttonBorderSpin 1.5s linear infinite 0ms;
  border-radius: 15px;
  @property --border-gradient-angle {
    syntax: '<angle>';
    inherits: true;
    initial-value: 0turn;
  }
  @keyframes buttonBorderSpin {
    100% {
      --border-gradient-angle: 0turn;
    }
    0% {
      --border-gradient-angle: 1turn;
    }
  }
`

const ConnectButton = styled(Box)`
  width: 100%;
  height: 100%;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  cursor: pointer;
  border: 1px solid rgba(255, 255, 255, 0.25);
  background: linear-gradient(132deg, #823a12 -6.89%, #000 41.37%, #000 58.65%, #2c6ebe 122.98%);
`
