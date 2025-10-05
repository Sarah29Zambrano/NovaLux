import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Button from "@mui/material/Button";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";
import { Link } from "react-router-dom";
import { useCarrito } from "../../CartProvider";
import MessageAlert from "../MessageAlert/MessageAlert";
import { formatearMoneda } from "../../Asyncmocks";

const ItemDetail = ({ id, nombre, precio, stock, descripcion, imagen }) => {
  const [text, setText] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const { setCarrito } = useCarrito();
  const agregarCantidadACarrito = (cantidad) => {
    setCarrito((prev) => [...prev, { id, nombre, precio, cantidad }]);

    setText(`Agregaste ${cantidad} unidades de ${nombre} al carrito`);
    setOpen(true);
  };

  return (
    <Box className="detailContainer">
      <Card className="card">
        <Link to="/">
          <Button variant="text" startIcon={<ArrowBackIcon />}>
            Volver
          </Button>
        </Link>
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
            {formatearMoneda(precio)}
          </Typography>
          <ItemCount stock={stock} initial={1} alAgregar={agregarCantidadACarrito} />
        </CardContent>
      </Card>
      <MessageAlert autoHideDuration={2500} text={text} open={open} setOpen={setOpen}/>
    </Box>
  );
};

export default ItemDetail;
