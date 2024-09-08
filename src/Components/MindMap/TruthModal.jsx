import {
  Modal,
  Box,
  Typography,
  Button,
  Divider,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import AddCircleIcon from "@mui/icons-material/AddCircle";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 730,
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: "1rem",
  p: 4,
};

export default function TruthModal({ open, handleClose }) {
  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 1,
          }}
        >
          <Typography variant="body1" component="span" sx={{ pb: 0 }}>
            Ground Truths
          </Typography>
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Divider />
        <Box mt={2}>
          <Button variant="outlined" endIcon={<AddCircleIcon />} fullWidth>
            Add Ground Truth
          </Button>
          <Typography variant="body1" sx={{ textAlign: "center", mt: 1 }}>
            No Ground Truths Added
          </Typography>
        </Box>
      </Box>
    </Modal>
  );
}
