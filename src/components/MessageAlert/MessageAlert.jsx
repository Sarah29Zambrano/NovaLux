import Box from '@mui/material/Box';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

const MessageAlert = ({ open, setOpen, text, autoHideDuration }) => {
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <Box>
      <Snackbar
        open={open}
        autoHideDuration={autoHideDuration}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        onClose={handleClose}
      >
        <Alert
          onClose={handleClose}
          severity="success"
          variant="filled"
          sx={{ width: '100%' }}
        >
          {text}
        </Alert>
      </Snackbar>
    </Box>
  );
}

export default MessageAlert;
