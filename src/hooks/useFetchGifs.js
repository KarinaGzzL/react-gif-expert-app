import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';


export const useFetchGifs = (category) => 
    {
       // useState para manejar el estado de las imágenes, inicializado como un array vacío
    const [images, setImages] = useState([]);
     const [isLoading, setIsLoading] = useState(true);
    // / Función asíncrona para obtener imágenes basadas en la categoría
     const getImages = async () => {
    //     // Llamamos a la función getGifs y esperamos la respuesta
       const newImages = await getGifs(category);
    //     // Actualizamos el estado con las nuevas imágenes obtenidas
       setImages(newImages);
     setIsLoading(false);
   }

    // // useEffect se utiliza para ejecutar efectos secundarios en el componente
        useEffect(() => 
            {
        //     // Llamamos a getImages cuando el componente se monta por primera vez
        getImages();
        //     // Dependencia vacía significa que este efecto se ejecuta solo una vez después del primer renderizado
    }, [category]);

  return {
    images,
    isLoading
  }
}
