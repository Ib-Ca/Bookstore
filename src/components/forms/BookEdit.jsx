'use client'
import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { Grid, InputLabel, MenuItem, Select } from "@mui/material";

export default function BookEdit(
  tituloInitial = "",
  autorInitial = "",
  isbnInitial = "",
  generoInitial = "",
  editorialInitial = "",
  anioPublicacionInitial = 0,
  sinopsisInitial = "",
  numeroPaginasInitial = 0,
  cantidadDisponibleInitial = 0,
  image_urlInitial = "",
  disponibilidadInitial = "En Stock"
) {
  const initialValues = {
    title: tituloInitial,
    author: autorInitial,
    isbn: isbnInitial,
    genre: generoInitial,
    publisher: editorialInitial,
    year: anioPublicacionInitial,
    pages: numeroPaginasInitial,
    cantidad: cantidadDisponibleInitial,
    availability: disponibilidadInitial,
    url: image_urlInitial,
    synopsis: sinopsisInitial,
  };
  console.log(initialValues);
  const [formValues, setFormValues] = useState(initialValues);
  const [availability, setAvailability] = React.useState("En Stock");

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
      // Lógica para crear el libro (puedes llamar a tu función 'create' aquí)
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            fullWidth
            id="title"
            label="Título del Libro"
            name="title"
            value={formValues.title}
            onChange={(e) =>
              setFormValues({ ...formValues, title: e.target.value })
            }
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            fullWidth
            id="author"
            label="Autor"
            name="author"
            value={formValues.author}
            onChange={(e) =>
              setFormValues({ ...formValues, author: e.target.value })
            }
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            id="isbn"
            label="ISBN"
            name="isbn"
            value={formValues.isbn}
            onChange={(e) =>
              setFormValues({ ...formValues, isbn: e.target.value })
            }
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            id="genre"
            label="Género"
            name="genre"
            value={formValues.genre}
            onChange={(e) =>
              setFormValues({ ...formValues, genre: e.target.value })
            }
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            fullWidth
            id="publisher"
            label="Editorial"
            name="publisher"
            value={formValues.publisher}
            onChange={(e) =>
              setFormValues({ ...formValues, publisher: e.target.value })
            }
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            fullWidth
            id="year"
            label="Año"
            name="year"
            type="number"
            value={formValues.year}
            onChange={(e) =>
              setFormValues({ ...formValues, year: e.target.value })
            }
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            fullWidth
            id="pages"
            label="Número de Páginas"
            name="pages"
            type="number"
            value={formValues.pages}
            onChange={(e) =>
              setFormValues({ ...formValues, pages: e.target.value })
            }
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            fullWidth
            id="cantidad"
            label="Cantidad"
            name="cantidad"
            type="number"
            value={formValues.cantidad}
            onChange={(e) =>
              setFormValues({ ...formValues, cantidad: e.target.value })
            }
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Select
            id="availability"
            value={formValues.availability}
            label="Disponibilidad"
            fullWidth
            onChange={(e) =>
              setFormValues({ ...formValues, availability: e.target.value })
            }
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
            value={formValues.url}
            onChange={(e) =>
              setFormValues({ ...formValues, url: e.target.value })
            }
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
            value={formValues.synopsis}
            onChange={(e) =>
              setFormValues({ ...formValues, synopsis: e.target.value })
            }
          />
        </Grid>
      </Grid>
      <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
        Enviar
      </Button>
    </Box>
  );
}
