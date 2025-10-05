import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const EmptyCart = ({ onContinueShopping }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="300px"
      textAlign="center"
      p={3}
    >
      <ShoppingCartOutlinedIcon sx={{ fontSize: 80, color: "grey.500", mb: 2 }} />
      <Typography variant="h6" gutterBottom>
        Tu carrito está vacío
      </Typography>
      <Typography variant="body2" color="text.secondary" gutterBottom>
        Agregá productos para continuar con la compra.
      </Typography>
      {onContinueShopping && (
        <Button
          variant="contained"
          color="primary"
          onClick={onContinueShopping}
          sx={{ mt: 2 }}
        >
          Ver productos
        </Button>
      )}
    </Box>
  );
};

export default EmptyCart;
