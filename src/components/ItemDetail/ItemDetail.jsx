import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ nombre, precio, stock, descripcion, imagen }) => {
  const agregarCantidadACarrito = (cantidad) => {
    console.log(`Agregaste ${cantidad} unidades de ${nombre} al carrito`);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        mt: 4,
      }}
    >
      <Card
        sx={{
          maxWidth: 600,
          width: "100%",
          borderRadius: 3,
          boxShadow: 4,
          overflow: "hidden",
        }}
      >
        {imagen && (
          <CardMedia
            component="img"
            height="300"
            image={imagen.url}
            alt={imagen.alt}
            sx={{ objectFit: "contain" }}
          />
        )}
        <CardContent>
          <Typography
            variant="h5"
            component="div"
            sx={{ fontWeight: "bold", mb: 1 }}
          >
            {nombre}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            {descripcion}
          </Typography>
          <Typography
            variant="h6"
            color="primary"
            sx={{ fontWeight: "medium" }}
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
