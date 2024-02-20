"use client";
import SideBar from "@/components/navs/sideBar";
import { useCookies } from "next-client-cookies";
import { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Grid, Box, Button, ButtonGroup, Avatar } from "@mui/material";
import { getAll } from "@/app/api/root";
import BookForm from "@/components/forms/BookForm";
import Link from "next/link";
const Inventario = () => {
  const cookies = useCookies();
  const [role, setRole] = useState("");
  const [libros, setLibros] = useState([]);
  useEffect(() => {
    const cookieInfo = cookies.get("info");
    if (cookieInfo) {
      const aux = JSON.parse(cookieInfo);
      setRole(aux.role);
    }
  }, [cookies]);
  //obtener libros
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getAll();
        setLibros(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);


  const handleDelete = (aux) => {
    console.log(aux.id);
  };
  const columns = [
    { field: "_id", headerName: "ID", width: 1 },
    {
      field: "image_url",
      headerName: "Imagen",
      width: 150,
      renderCell: (params) => (
        <Avatar variant="square" alt="Imagen" src={params.row.image_url}  sx={{ width: 50, height: 50 }}/>
      ),
    },
    { field: "titulo", headerName: "Titulo", width: 300 },
    { field: "autor", headerName: "Autor", width: 130 },
    { field: "editorial", headerName: "Editorial", width: 130 },
    { field: "genero", headerName: "Género", width: 80 },
    {
      field: "cantidadDisponible",
      headerName: "Cantidad",
      type: "number",
      width: 80,
    },
    {
      field: "acciones",
      headerName: "Acciones",
      width: 200,
      renderCell: (params) => (
        <ButtonGroup variant="contained" aria-label="Acciones">
          <Button color="primary">
          <Link href={`/${params.row.id}/edit`}>Editar</Link>
          </Button>
          <Button color="secondary" onClick={() => handleDelete(params.row)}>
            Eliminar
          </Button>
        </ButtonGroup>
      ),
    },
  ];
  const rows = libros.map((libros) => ({
    id: libros._id,
    image_url: libros.image_url,
    titulo: libros.titulo,
    autor: libros.autor,
    editorial: libros.editorial,
    genero: libros.genero,
    cantidadDisponible: libros.cantidadDisponible,
  }));

  return (
    <>
      {role === "admin" ? (
        <>
          <Grid container>
            <Grid item xs={2}>
              <SideBar />
            </Grid>
            <Grid item xs={10}>
              <Box p={4} width="100%">
                <div style={{ height: 600, width: "100%" }}>
                  <DataGrid rows={rows} columns={columns} autoPageSize />
                </div>
              </Box>
            </Grid>
          </Grid>
        </>
      ) : (
        <>
          <div>No posees los permisos para ver esta página</div>
        </>
      )}
    </>
  );
};

export default Inventario;
