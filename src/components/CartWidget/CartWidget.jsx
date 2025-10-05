import React from 'react';
import Box from "@mui/material/Box";
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import "./CartWidget.css"
import { useCarrito } from '../../CartProvider';
import { Link } from 'react-router-dom';

const CartWidget = () => {
  const { carrito } = useCarrito();
  return (
    <Box className="cartContainer">
      <Link to="/checkout">
        <IconButton sx={{ color: "white" }}>
          <Badge badgeContent={carrito.length} color="primary">
            <ShoppingCartIcon sx={{ width: "1.5em", height: "1.5em" }} />
          </Badge>
        </IconButton>
      </Link>
    </Box>
  )
}

export default CartWidget;
