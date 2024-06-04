
import { render,screen } from "@testing-library/react";
import {GifGrid} from'../../src/components/GifGrid';
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

//Con esta instruccion indicamos que estamos  
//haciendo un mock completo del path
//../../src/hooks/useFetchGifs
jest.mock('../../src/hooks/useFetchGifs');


describe('Pruebas en <GifGrid/>', () => { 
    const category = 'Evangelion';

    test('debe mostrar el loading inicalmente', () => { 
      //Tenemos que decirle como va funcionar el hook 
      useFetchGifs.mockReturnValue({
        images:[],
        isLoading:true
      });
      render(<GifGrid category={category}/>);
      expect(screen.getByText('Cargando...'));
      expect(screen.getByText(category));
    }); 

     test('debe de mostrar items cuando se cargan las imagenes useFetch', () => { 
       //Debe hacer un mock completo del hook y suponer 
      //los valores  que se van a regresar
      const gifs = [
      {
        id:'ABC',
        title:'Evangelion',
        url:'https://localhost/evangelion.jpg'
      },
      {
        id:'123',
        title:'Goku',
        url:'https://localhost/goku.jpg'
      },
    ] 
      useFetchGifs.mockReturnValue({
        images:gifs,
        isLoading:false
      });
      render(<GifGrid category={category}/>);
      expect(screen.getAllByRole('img').length).toBe(2);
    });
     
      
    });