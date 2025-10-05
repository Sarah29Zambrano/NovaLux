import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { formatearMoneda } from "../../Asyncmocks";
import { useCarrito } from "../../CartProvider";
import { Link, useNavigate } from "react-router-dom";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import EmptyCart from "../EmptyCart/EmptyCart";

const CheckoutFormContainer = () => {
  const navigate = useNavigate();
  const { carrito } = useCarrito();

  const total = carrito.reduce(
    (acc, item) => acc + item.precio * item.cantidad,
    0
  );

  return (
    <Card sx={{ maxWidth: 500, margin: "auto", mt: 4, p: 2 }}>
      <Link to="/">
        <Button variant="text" startIcon={<ArrowBackIcon />}>
          Volver
        </Button>
      </Link>
      {carrito.length == 0 ? (
        <EmptyCart onContinueShopping={() => navigate("/")} />
      ) : (
        <CardContent>
        <Typography variant="h5" gutterBottom>
          Confirmar Compra
        </Typography>

        <List>
          {carrito.map((item) => (
            <React.Fragment key={item.id}>
              <ListItem>
                <ListItemText
                  primary={`${item.nombre} x ${item.cantidad}`}
                  secondary={formatearMoneda(item.precio * item.cantidad)}
                />
              </ListItem>
              <Divider />
            </React.Fragment>
          ))}
        </List>

        <Box display="flex" justifyContent="space-between" my={2}>
          <Typography variant="h6">Total:</Typography>
          <Typography variant="h6" color="primary">
            {formatearMoneda(total)}
          </Typography>
        </Box>

        <CheckoutForm carrito={carrito} total={total} />
      </CardContent>
      )}
    </Card>
  );
};

export default CheckoutFormContainer;
