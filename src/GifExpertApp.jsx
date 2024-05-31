
import { useState } from 'react';
import { AddCategory, GifGrid  } from './components';


export const GifExpertApp = () => {
    // Definimos el estado categories y su funcion actualizadora setCategories. 
    // Inicializamos el estado con un array que contiene 'Sailor Moon'
    const [categories, setCategories] = useState(['Sailor Moon']);
     // Función para agregar una nueva categoría
    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;
        setCategories([newCategory, ...categories]);
    }
    // const onAddCategory = (newCategory) =>{
    //     // Primero probamos que al darle clic al boton 

    //     //console.log('Star Wars');

    //     //setCategories(newCategory,[...categories]);
    //     //setCategories(cat=>[...cat,'Star Wars']);
    // }

    return (
        <>
            {/*titulo */}
            <h1>GifExpertApp</h1>
            {/*input*/}
            {/* <AddCategory 
       //setCategories={setCategories}
       //Cuando lleva la palabra ON es xq esta emitiendo algo
       onNewCategory = {event=>onAddCategory(event)} */}
            <AddCategory
                onNewCategory={(value) => onAddCategory(value)}
            />

            {/*Listado de Gif */}

           
                {
                     // Mapeamos el array de categorías para renderizar un GifGrid por cada una
                    categories.map((category) => (
                    // Cada GifGrid recibe una categoría y una key única
                    <GifGrid key={category} category={category}/>
                ))
                }
             

          
            {/*gif Item */}
        </>
    )
}
