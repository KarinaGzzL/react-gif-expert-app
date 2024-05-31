

import { GifItem } from './GifItem';
//import { getGifs } from '../helpers/getGifs';
import { useFetchGifs } from '../hooks/useFetchGifs';

// Definimos el componente funcional GifGrid que recibe una categoría como prop
export const GifGrid = ({ category }) => {

    //CUSTOM HOOK
    const { images, isLoading } = useFetchGifs( category );
    

    // Renderizamos el componente
    return (
        <>
            {/* Título con la categoría */}
            <h3>{category}</h3>
            {
                // isLoading
                // ?(<h2>Cargando...</h2>)
                // :null
                isLoading&&(<h2>Cargando...</h2>)
            }
           
            {/* Lista ordenada para mostrar las imágenes */}
            {/* <ol>
                Esto es un ejemplo estático para mostrar el titulo del gif
                <li>titulo HOLAA</li>
                <li>titulo</li>
                <li>titulo</li>
                <li>titulo</li>
                <li>titulo</li>
                <li>titulo</li>
            </ol>*/}
           <div className="card-grid">
            { 
            //esparcir las props
                images.map((image)=>
                ( <GifItem key={image.id} 
                            {...image}
                            /> 
                ))
            }
           </div>

        </>
    )
}
