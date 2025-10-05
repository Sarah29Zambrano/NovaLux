import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import BlockOutlinedIcon from "@mui/icons-material/BlockOutlined";

const NoStock = ({ onBack }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="200px"
      textAlign="center"
      p={3}
    >
      <BlockOutlinedIcon sx={{ fontSize: 70, color: "error.main", mb: 2 }} />
      <Typography variant="h6" gutterBottom>
        Producto sin stock
      </Typography>
      <Typography variant="body2" color="text.secondary" gutterBottom>
        Actualmente este producto no está disponible.
      </Typography>
      {onBack && (
        <Button
          variant="outlined"
          color="primary"
          onClick={onBack}
          sx={{ mt: 2 }}
        >
          Volver a la tienda
        </Button>
      )}
    </Box>
  );
};

export default NoStock;
