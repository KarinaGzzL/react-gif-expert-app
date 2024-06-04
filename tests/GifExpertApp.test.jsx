import { fireEvent,render, screen } from '@testing-library/react';
import { GifExpertApp } from '../src/GifExpertApp';

describe('Pruebas en el componente', () => { 
    //pruebas:
    //escribir en el input
    //mandar la categoria dos veces
    
    test('Escribir en el input ', () => {
        //Creamos el valor que vamos a evaluar
    const inputValue = 'Gatos';
    render( <GifExpertApp /> );
          //Referencias
     const input = screen.getByRole('textbox');
    
       //1.-Cambiar el valor de la caja de texto
       //Disparamos el evento
     fireEvent.input(input, {target:{value:inputValue}});
        screen.debug();
        expect(input.value).toBe('Gatos');


    });

});
