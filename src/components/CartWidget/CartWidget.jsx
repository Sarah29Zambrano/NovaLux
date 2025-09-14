import React from 'react'
import Box from "@mui/material/Box"
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import "./CartWidget.css"

const CartWidget = () => {
  return (
    <Box className="cartContainer">
      <IconButton sx={{ color: "white" }}>
        <Badge badgeContent={0} color="primary">
          <ShoppingCartIcon sx={{ width: "1.5em", height: "1.5em" }} />
        </Badge>
      </IconButton>
    </Box>

  )
}

export default CartWidget