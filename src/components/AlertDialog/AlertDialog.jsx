import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const AlertDialog = ({
  open,
  onClose,
  title,
  message,
  confirmText = "Aceptar",
  confirmColor = "primary",
  extraContent = null,
}) => {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="xs" fullWidth>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <Typography variant="body1" gutterBottom>
          {message}
        </Typography>
        {extraContent && <>{extraContent}</>}
      </DialogContent>
      <DialogActions>
        <Button variant="contained" color={confirmColor} onClick={onClose}>
          {confirmText}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AlertDialog;
