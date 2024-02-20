import React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import BookIcon from "@mui/icons-material/Book";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Modal from "@mui/material/Modal";
import { InputLabel, MenuItem, Select } from "@mui/material";
import { create } from "@/app/api/root";

export default function BookForm() {
  const [open, setOpen] = React.useState(false);
  const [availability, setAvailability] = React.useState("En Stock");

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = {
      titulo: formData.get("title"),
      autor: formData.get("author"),
      isbn: formData.get("isbn"),
      genero: formData.get("genre"),
      editorial: formData.get("publisher"),
      anioPublicacion: formData.get("year"),
      sinopsis: formData.get("synopsis"),
      numeroPaginas: formData.get("pages"),
      calificacion: formData.get("rating"),
      cantidadDisponible: formData.get("cantidad"),
      image_url: formData.get("url"),
      disponibilidad: availability,
    };
    console.log(data);
    try {
      const result = await create(data);
    } catch (error) {
      console.log(error);
    }
    handleClose();
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    mx: "auto",
    my: 4,
    p: 4,
  };

  return (
    <>
      <Button onClick={handleOpen}>Añadir Libro</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Container component="main" maxWidth="xl">
            <CssBaseline />
            <Box
              sx={{
                marginTop: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                <BookIcon />
              </Avatar>
              <Typography component="h1" variant="h6">
                Nuevo Libro
              </Typography>
              <Box
                component="form"
                noValidate
                onSubmit={handleSubmit}
                sx={{ mt: 3 }}
              >
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      id="title"
                      label="Título del Libro"
                      name="title"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      id="author"
                      label="Autor"
                      name="author"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id="isbn"
                      label="ISBN"
                      name="isbn"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id="genre"
                      label="Género"
                      name="genre"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      id="publisher"
                      label="Editorial"
                      name="publisher"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      id="year"
                      label="Año"
                      name="year"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      id="pages"
                      label="Número de Páginas"
                      name="pages"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      id="cantidad"
                      label="Cantidad"
                      name="cantidad"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Select
                      id="availability"
                      value={availability}
                      label="Disponibilidad"
                      fullWidth
                      onChange={(e) => setAvailability(e.target.value)}
                    >
                      <MenuItem value="En Stock">En Stock</MenuItem>
                      <MenuItem value="Prestado">Prestado</MenuItem>
                      <MenuItem value="Agotado">Agotado</MenuItem>
                      <MenuItem value="Reservado">Reservado</MenuItem>
                    </Select>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      id="url"
                      label="URL imagen"
                      name="url"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id="synopsis"
                      label="Sinopsis"
                      name="synopsis"
                      multiline
                      rows={4}
                    />
                  </Grid>
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Crear Libro
                </Button>
              </Box>
            </Box>
          </Container>
        </Box>
      </Modal>
    </>
  );
}
