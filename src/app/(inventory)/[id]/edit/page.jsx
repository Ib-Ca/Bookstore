'use client'
import { getLibrobyId } from '@/app/api/root';
import BookEdit from '@/components/forms/BookEdit';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const EditPage = () => {
  const { id } = useParams();
  const [libro,setLibro]=useState(null)

  const getLibro=async()=>{
    try {
      const result=await getLibrobyId(id)
      setLibro(result)
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  }
console.log(libro);
  useEffect(() => {
    getLibro();
}, [])
  return (
    <main>
      {libro!==null&&(
        <BookEdit 
        tituloInitial={libro.titulo || ""}
        autorInitial={libro.autor || ""}
        isbnInitial={libro.isbn || ""}
        generoInitial={libro.genero || ""}
        editorialInitial={libro.editorial || ""}
        anioPublicacionInitial={libro.anioPublicacion || 0}
        sinopsisInitial={libro.sinopsis || ""}
        numeroPaginasInitial={libro.numeroPaginas || 0}
        cantidadDisponibleInitial={libro.cantidadDisponible || 0}
        image_urlInitial={libro.image_url || ""}
        disponibilidadInitial={libro.disponibilidad || "En Stock"}
        />
      )}
    </main>
  )
}

export default EditPage