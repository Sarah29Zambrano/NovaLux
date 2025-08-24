import React from 'react'
import Box from "@mui/material/Box"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import "./CartWidget.css"
import IconButton from '@mui/material/IconButton';

const CartWidget = () => {
  return (
    <Box className="cartContainer">
      <IconButton sx={{color: "white"}}>
        <ShoppingCartIcon sx={{ width: "1.5em", height: "1.5em" }}/>
      </IconButton>
    </Box>
    
  )
}

export default CartWidget