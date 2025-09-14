import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";

const ItemDetail = ({ nombre, precio, stock, descripcion, imagen }) => {
  const agregarCantidadACarrito = (cantidad) => {
    console.log(`Agregaste ${cantidad} unidades de ${nombre} al carrito`);
  };

  return (
    <Box className="detailContainer">
      <Card className="card">
        {imagen && (
          <CardMedia
            component="img"
            height="300"
            image={imagen.url}
            alt={imagen.alt}
            className="cardMedia"
          />
        )}
        <CardContent>
          <Typography
            variant="h5"
            component="div"
            className="nombreProducto"
          >
            {nombre}
          </Typography>
          <Typography variant="body2" color="text.secondary" className="descripcionProducto">
            {descripcion}
          </Typography>
          <Typography
            variant="h6"
            color="primary"
            className="precioProducto"
          >
            {precio}
          </Typography>
          <ItemCount stock={stock} initial={1} alAgregar={agregarCantidadACarrito} />
        </CardContent>
      </Card>
    </Box>
  );
};

export default ItemDetail;
