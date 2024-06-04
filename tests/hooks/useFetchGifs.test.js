import { renderHook,waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

describe('Pruebas en el hook  useFetchGifs', () => { 
    // test('debe de regresar el estado inicial', () => { 
    //      //Arreglo de imagenes vacio, isLoading true
    //     const{result} = renderHook(()=>useFetchGifs('Gatos'));
    //   // console.log(result); //Salida: current: { images: [], isLoading: true }
    //  const {images, isLoading} = result.current;
    //  expect(images.length).toBe(0);
    //  expect(isLoading).toBeTruthy();
    //     // useFetchGifs();
    // });
    test('debe de retornar u arreglo de imagenes y isLoading en false', async() => { 
        //En este test debemos esperar a que el hook
        //pase 
       
       const{result} = renderHook(()=>useFetchGifs('Gatos'));
         await waitFor(
            ()=>expect(result.current.images.length).toBeGreaterThan(0),
         );
         const {images, isLoading} = result.current;
        expect(images.length).toBeGreaterThan(0);
        expect(isLoading).toBeFalsy();
    
   });
});