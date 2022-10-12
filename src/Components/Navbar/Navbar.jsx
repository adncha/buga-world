import React from 'react'
import styled from '@emotion/styled'
import {Box, Switch, Typography} from '@mui/material'
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice'

export const Navbar = () => {
  return (
    <StyledBar>
      <Controller value="off" label="micro" icon={<KeyboardVoiceIcon />} />
    </StyledBar>
  )
}

// eslint-disable-next-line react/prop-types
const Controller = ({value, label, icon: icon}) => {
  return (
    <Box>
      {icon}
      <Typography variant="h4">{label}</Typography>
      <Switch value={value} label={label} />
    </Box>
  )
}

const StyledBar = styled.div`
  background: #d06c5f;
  height: 100%;
  border-radius: 5px;
`
