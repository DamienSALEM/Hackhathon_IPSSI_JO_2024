import Button from '@mui/material/Button'
import React from 'react'
import { Link } from 'react-router-dom'

const ButtonLink = ({ to, children }) => {
  return (
    <Button
      variant="outlined"
      component={Link}
      to={to}
      sx={{
        borderRadius: '8px',
        minWidth: '120px',
        padding: '10px 20px',
        textDecoration: 'none',
        textAlign: 'center',
        color: '#416082',
        backgroundColor: 'white',
        borderColor: 'white',
        '&:hover': {
          backgroundColor: 'black',
          color: '#fff',
        },
      }}
    >
      {children}
    </Button>
  )
}

export default ButtonLink
