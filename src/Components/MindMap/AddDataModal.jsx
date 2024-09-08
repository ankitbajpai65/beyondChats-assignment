import { useContext, useState } from "react";
import {
  Modal,
  Box,
  Typography,
  TextField,
  Button,
  IconButton,
} from "@mui/material";
import { DataContext } from "../../Context/DataContext";
import { useTheme } from "@emotion/react";
import CloseIcon from "@mui/icons-material/Close";

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

export default function AddDataModal({
  open,
  handleClose,
  type,
  description,
  setDescription,
  id,
}) {
  const theme = useTheme();
  const [tabIndex, setTabIndex] = useState(0);
  const [title, setTitle] = useState("");
  const [sourceLink, setSourceLink] = useState("");

  const { setData } = useContext(DataContext);

  const handleTabChange = (index) => {
    setTabIndex(index);
  };

  const handleAdd = () => {
    if (type === "add")
      setData((prev) => {
        const newItem = {
          id: prev.length + 1,
          data: description,
          source: "--",
          type: "TEXT",
          created: "7/31/2024",
        };
        return [newItem, ...prev];
      });
    else
      setData((prev) =>
        prev.map((item) => {
          if (item.id === id)
            return {
              ...item,
              data: description,
            };
          return item;
        })
      );
    handleClose();
  };

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
            Add Data
          </Typography>
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </Box>

        <Box sx={{ my: 3 }}>
          {["TEXT", "PDF", "EPUB", "Link", "CSV"].map((tab, index) => (
            <Button
              size="medium"
              key={index}
              onClick={() => handleTabChange(index)}
              sx={{
                border: `2px solid ${theme.palette.primary.main}`,
                fontSize: "1rem",
                marginRight: "10px",
                padding: "10px 15px",
                textTransform: "capitalize",
                color: `${tabIndex === index ? "white" : "black"}`,
                background: `${
                  tabIndex === index ? theme.palette.primary.main : ""
                }`,
              }}
            >
              {tab}
            </Button>
          ))}
        </Box>

        <Box mt={2}>
          <TextField
            label="Title"
            variant="outlined"
            fullWidth
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            sx={{ mb: 2, fontSize: "1rem" }}
          />
          <TextField
            label="Description"
            variant="outlined"
            multiline
            rows={4}
            fullWidth
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            sx={{ mb: 2, fontSize: "1rem" }}
          />
          <TextField
            label="Read More/Source Link"
            variant="outlined"
            fullWidth
            value={sourceLink}
            onChange={(e) => setSourceLink(e.target.value)}
            sx={{ mb: 2, fontSize: "1rem" }}
          />
        </Box>

        <Box mt={2} display="flex" justifyContent="flex-end">
          <Button variant="outlined" color="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button
            onClick={handleAdd}
            variant="contained"
            color="primary"
            sx={{ ml: 2 }}
          >
            {type === "add" ? "Save" : "Edit"}
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}
