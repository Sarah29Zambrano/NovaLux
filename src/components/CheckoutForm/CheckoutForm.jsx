import React from "react";
import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../../Firebase";
import { useCarrito } from "../../CartProvider";
import { useNavigate } from "react-router-dom";
import AlertDialog from "../AlertDialog/AlertDialog";

const CheckoutForm = ({ carrito, total }) => {
  const { setCarrito } = useCarrito();
  const [nombre, setNombre] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [direccion, setDireccion] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [ordenId, setOrdenId] = React.useState(null);
  const [successOpen, setSuccessOpen] = React.useState(false);
  const [errorOpen, setErrorOpen] = React.useState(false);
  const [openAlert, setOpenAlert] = React.useState(false);
  const navigate = useNavigate();

  // Generar código tipo "ORD-12345"
  const generarCodigoOrden = () => {
    const random = Math.floor(10000 + Math.random() * 90000);
    return `ORD-${random}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!nombre || !email || !direccion) {
      setOpenAlert(true);
      return;
    }

    setOpenAlert(false);
    setLoading(true);

    const codigoOrden = generarCodigoOrden();

    try {
      await addDoc(collection(db, "compras"), {
        codigoOrden,
        nombre,
        email,
        direccion,
        carrito,
        total,
        fecha: serverTimestamp(),
      });

      setOrdenId(codigoOrden);
      setSuccessOpen(true);
      setNombre("");
      setEmail("");
      setDireccion("");
    } catch (error) {
      setErrorOpen(true);
    } finally {
      setLoading(false);
    }
  };

  const onCloseSuccessDialog = () => {
    setSuccessOpen(false);
    setCarrito([]);
    navigate("/");
  };

  return (
    <>
      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 2 }}>
        <TextField
          fullWidth
          label="Nombre completo"
          variant="outlined"
          margin="normal"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <TextField
          fullWidth
          label="Correo electrónico"
          type="email"
          variant="outlined"
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          fullWidth
          label="Dirección de envío"
          variant="outlined"
          margin="normal"
          multiline
          rows={3}
          value={direccion}
          onChange={(e) => setDireccion(e.target.value)}
        />
        {openAlert && (
          <Alert severity="error">Por favor completa todos los campos.</Alert>
        )}
        <Button
          type="submit"
          variant="contained"
          color="success"
          disabled={loading}
          fullWidth
          sx={{ mt: 3 }}
        >
          {loading ? "Guardando..." : "Confirmar Compra"}
        </Button>
      </Box>

      <AlertDialog
        open={successOpen}
        onClose={onCloseSuccessDialog}
        title="¡Compra Confirmada! 🎉"
        message="Tu compra fue registrada con éxito en nuestro sistema."
        confirmColor="success"
        extraContent={
          <>
            <Typography variant="h6" color="primary" align="center">
              Número de orden:
            </Typography>
            <Typography
              variant="h5"
              align="center"
              fontWeight="bold"
              color="secondary"
            >
              {ordenId}
            </Typography>
          </>
        }
      />
      <AlertDialog
        open={errorOpen}
        onClose={() => setErrorOpen(false)}
        title="¡Compra no efectuada! 😞"
        message="❌ Ocurrió un error al guardar la compra."
        confirmColor="error"
      />
    </>
  );
};

export default CheckoutForm;
