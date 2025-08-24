import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import React from 'react'
import "./ItemListContainer.css"

const ItemListContainer = ({mensaje}) => {
  return (
    <>
      <Box className="mensajeContainer">
        <Typography variant={'h3'}>{mensaje}</Typography>
      </Box>
    </>
    
  )
}

export default ItemListContainer