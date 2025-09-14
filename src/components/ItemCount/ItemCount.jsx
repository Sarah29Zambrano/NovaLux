import React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "./ItemCount.css";

const ItemCount = ({ stock, initial = 1, alAgregar }) => {
  const [count, setCount] = React.useState(initial);

  const incrementar = () => {
    if (count < stock) setCount(count + 1);
  };

  const decrementar = () => {
    if (count > 1) setCount(count - 1);
  };

  return (
    <Box className="container">
      <Box className="wrapper">
        <IconButton
          color="primary"
          onClick={decrementar}
          disabled={count <= 1}
        >
          <RemoveIcon />
        </IconButton>
        <Typography variant="h6">{count}</Typography>
        <IconButton
          color="primary"
          onClick={incrementar}
          disabled={count >= stock}
        >
          <AddIcon />
        </IconButton>
      </Box>
      <Button
        variant="contained"
        color="primary"
        startIcon={<ShoppingCartIcon />}
        onClick={() => alAgregar(count)}
        disabled={stock === 0}
      >
        Agregar al carrito
      </Button>
    </Box>
  );
};

export default ItemCount;
