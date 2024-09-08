import { useContext, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  Box,
  Divider,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import AddIcon from "@mui/icons-material/Add";
import HistoryIcon from "@mui/icons-material/History";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import { DataContext } from "../../Context/DataContext";
import AddDataModal from "./AddDataModal";
import TruthModal from "./TruthModal";

const ShowMoreCell = ({ value }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleExpand = () => setIsExpanded(!isExpanded);

  const maxLength = 100;
  const truncatedValue =
    value.length > maxLength && !isExpanded
      ? `${value.substring(0, maxLength)}...`
      : value;

  return (
    <div style={{ display: "block" }}>
      {truncatedValue}
      {value.length > maxLength && (
        <Button onClick={toggleExpand} size="small" color="primary">
          {isExpanded ? "Show less" : "Show more"}
        </Button>
      )}
    </div>
  );
};

export default function MindMap() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(7);
  const [description, setDescription] = useState("");

  const [showAddModal, setShowAddModal] = useState(false);
  const [showTruthModal, setShowTruthModal] = useState(false);
  const [addModalType, setAddModalType] = useState("add");
  const [editId, setEditId] = useState();

  const { data, setData } = useContext(DataContext);

  const handleAddModalClose = () => {
    setShowAddModal(false);
  };

  const handleTruthModalClose = () => {
    setShowTruthModal(false);
  };

  const handleDelete = (id) => {
    const confirmation = confirm("Do you want to delete this data?");
    if (!confirmation) return;

    setData((prev) => prev.filter((item) => item.id !== id));
    alert("Data deleted successfully!");
  };

  const handleEdit = (id) => {
    setAddModalType("edit");
    setShowAddModal(true);
    const x = data.find((item) => item.id === id).data;
    setDescription(x);
    setEditId(id);
  };

  const columns = [
    {
      field: "data",
      headerName: "Data",
      flex: 7,
      renderCell: (params) => <ShowMoreCell value={params.value} />,
    },
    {
      field: "source",
      headerName: "Source",
      flex: 1,
      renderCell: (params) => (
        <div style={{ textAlign: "center" }}>{params.value}</div>
      ),
      headerAlign: "center",
    },
    {
      field: "type",
      headerName: "Type",
      flex: 1,
      renderCell: (params) => (
        <Box sx={{ textAlign: "center" }}>
          <Typography
            variant="span"
            color="primary"
            sx={{
              border: "1px solid #2872FA",
              borderRadius: "15px",
              padding: "5px",
              fontSize: "12px",
            }}
          >
            {params.value}
          </Typography>
        </Box>
      ),
      headerAlign: "center",
    },
    {
      field: "created",
      headerName: "Created",
      flex: 1,
      renderCell: (params) => (
        <Box sx={{ textAlign: "center" }}>
          <Typography
            variant="span"
            sx={{ fontSize: "14px", fontWeight: "500" }}
          >
            {params.value}
          </Typography>
        </Box>
      ),
      headerAlign: "center",
    },
    {
      field: "actions",
      headerName: "Actions",
      flex: 1,
      renderCell: (params) => (
        <span
          style={{
            height: "100%",
            display: "flex",
            gap: "1.5rem",
            alignItems: "center",
          }}
        >
          <IconButton aria-label="edit">
            <EditIcon
              color="primary"
              onClick={() => handleEdit(params.row.id)}
            />
          </IconButton>
          <IconButton aria-label="delete">
            <DeleteIcon
              color="secondary"
              onClick={() => handleDelete(params.row.id)}
            />
          </IconButton>
        </span>
      ),
      headerAlign: "center",
    },
  ];

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <>
      <Box component="main" sx={{ width: "95vw", flexGrow: 1, p: 3, mt: 5 }}>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12} md={8} sx={{ mt: 3 }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                gap: "10px",
                flexWrap: isSmallScreen ? "wrap" : "nowrap",
              }}
            >
              <Button
                onClick={() => {
                  setDescription("");
                  setAddModalType("add");
                  setShowAddModal(true);
                }}
                variant="contained"
                startIcon={<AddIcon />}
                color="primary"
                size={isSmallScreen ? "small" : "medium"}
              >
                ADD DATA
              </Button>
              <Button
                variant="contained"
                startIcon={<HistoryIcon />}
                color="secondary"
                size={isSmallScreen ? "small" : "medium"}
              >
                DATA TRAINING STATUS
              </Button>
              <Button
                variant="outlined"
                startIcon={<QuestionAnswerIcon />}
                color="secondary"
                size={isSmallScreen ? "small" : "medium"}
                onClick={() => setShowTruthModal(true)}
              >
                GROUND TRUTHS
              </Button>
            </Box>
          </Grid>
        </Grid>

        <Divider
          sx={{
            width: isSmallScreen ? "100%" : "65%",
            borderColor: "black",
            borderWidth: "1px",
            mt: "13px",
            mx: "auto",
          }}
        />

        <Grid container justifyContent="center" sx={{ mt: 3 }}>
          <Grid item xs={12} md={10} lg={8}>
            <Box
              component="form"
              sx={{
                display: "flex",
                justifyContent: "center",
                gap: "10px",
                flexWrap: isSmallScreen ? "wrap" : "nowrap",
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="outlined-basic"
                label="Search"
                variant="outlined"
                size="small"
                fullWidth={isSmallScreen}
              />
              <FormControl sx={{ minWidth: 120 }} size="small">
                <InputLabel id="demo-simple-select-label">Results</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value="3"
                  label="Results"
                >
                  <MenuItem value={1}>1</MenuItem>
                  <MenuItem value={2}>2</MenuItem>
                  <MenuItem value={3}>3</MenuItem>
                  <MenuItem value={10}>10</MenuItem>
                  <MenuItem value={20}>20</MenuItem>
                  <MenuItem value={50}>50</MenuItem>
                </Select>
              </FormControl>
              <Button
                variant="contained"
                color="primary"
                fullWidth={isSmallScreen}
              >
                Search
              </Button>
            </Box>
          </Grid>
        </Grid>

        <Paper sx={{ height: isSmallScreen ? 300 : 400, width: "100%", mt: 3 }}>
          <DataGrid
            rows={data.slice((page - 1) * pageSize, page * pageSize)}
            columns={columns}
            pageSize={pageSize}
            disableColumnMenu
            hideFooter
            sx={{ border: 0, fontSize: "1rem" }}
          />

          <Stack
            spacing={2}
            sx={{ display: "flex", alignItems: "center", marginTop: 2 }}
          >
            <Pagination
              count={Math.ceil(data.length / pageSize)}
              page={page}
              onChange={handlePageChange}
              color="primary"
            />
          </Stack>
        </Paper>
      </Box>

      {showAddModal && (
        <AddDataModal
          open={showAddModal}
          handleClose={handleAddModalClose}
          type={addModalType}
          description={description}
          setDescription={setDescription}
          id={editId}
        />
      )}
      {showTruthModal && (
        <TruthModal open={showTruthModal} handleClose={handleTruthModalClose} />
      )}
    </>
  );
}
