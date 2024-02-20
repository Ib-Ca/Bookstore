"use client";
import { getLibrobyId } from "@/app/api/root";
import BookEdit from "@/components/forms/BookEdit";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const EditPage = () => {
  const { id } = useParams();
  const [libro, setLibro] = useState(null);

  const getLibro = async () => {
    try {
      const result = await getLibrobyId(id);
      setLibro(result);
    } catch (error) {
      console.log(error);
    }
  };
  //console.log(libro?.titulo);
  useEffect(() => {
    getLibro();
  }, []);
  return (
    <main>
      {libro !== null && (
        <BookEdit
          tituloInitial={libro?.titulo}
          autorInitial={libro?.autor}
          isbnInitial={libro?.isbn}
          generoInitial={libro?.genero}
          editorialInitial={libro?.editorial}
          anioPublicacionInitial={libro?.anioPublicacion}
          sinopsisInitial={libro?.sinopsis}
          numeroPaginasInitial={libro?.numeroPaginas}
          cantidadDisponibleInitial={libro?.cantidadDisponible}
          image_urlInitial={libro?.image_url}
          disponibilidadInitial={libro?.disponibilidad}
        />
      )}
    </main>
  );
};

export default EditPage;
