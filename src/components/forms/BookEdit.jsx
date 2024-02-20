"use client";
import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { Grid, InputLabel, MenuItem, Select } from "@mui/material";
import { edit } from "@/app/api/root";
import { useParams, useRouter } from "next/navigation";

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
    const {id}=useParams()
   // console.log(id);
  const [formValues, setFormValues] = useState({
    titulo: tituloInitial.tituloInitial,
    autor: tituloInitial.autorInitial,
    isbn: tituloInitial.isbnInitial,
    genero: tituloInitial.generoInitial,
    editorial: tituloInitial.editorialInitial,
    anioPublicacion: tituloInitial.anioPublicacionInitial,
    numeroPaginas: tituloInitial.numeroPaginasInitial,
    cantidadDisponible: tituloInitial.cantidadDisponibleInitial,
    disponibilidad: tituloInitial.disponibilidadInitial,
    image_url: tituloInitial.image_urlInitial,
    sinopsis: tituloInitial.sinopsisInitial,
  });
 // console.log(tituloInitial);
  const [availability, setAvailability] = React.useState("En Stock");
  const router = useRouter();
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
      id:id
    };
    //console.log(data);
    try {
      const result=await edit(data)
     // window.location.href = "/dashboard"///RECARGAAAAAA
     router.push("/dashboard")
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
            value={formValues.titulo}
            onChange={(e) =>
              setFormValues({
                ...formValues,
                titulo: e.target.value,
              })
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
            value={formValues.autor}
            onChange={(e) =>
              setFormValues({
                ...formValues,
                autor: e.target.value,
              })
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
            value={formValues.genero}
            onChange={(e) =>
              setFormValues({ ...formValues, genero: e.target.value })
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
               value={formValues.editorial}
            onChange={(e) =>
              setFormValues({ ...formValues, editorial: e.target.value })
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
              value={formValues.anioPublicacion}
            onChange={(e) =>
              setFormValues({ ...formValues, anioPublicacion: e.target.value })
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
               value={formValues.numeroPaginas}
            onChange={(e) =>
              setFormValues({ ...formValues, numeroPaginas: e.target.value })
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
                 value={formValues.cantidadDisponible}
            onChange={(e) =>
              setFormValues({ ...formValues, cantidadDisponible: e.target.value })
            }
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Select
            id="availability"
            label="Disponibilidad"
            fullWidth
                value={formValues.disponibilidad}
            onChange={(e) =>
              setFormValues({ ...formValues, disponibilidad: e.target.value })
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
                value={formValues.image_url}
            onChange={(e) =>
              setFormValues({ ...formValues, image_url: e.target.value })
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
                 value={formValues.sinopsis}
            onChange={(e) =>
              setFormValues({ ...formValues, sinopsis: e.target.value })
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
