import {fireEvent, render, screen} from '@testing-library/react'
import { AddCategory } from "../../src/components/AddCategory";

describe('Pruebas en <AddCategory/>', () => { 
test('debe cambiar el valor de la caja de texto', () => { 
    //Establecer nuestro sujeto de prueba
    //Renderizamos
    /// Mandamos una funcion  onNewCategory={()=>{}}
    //Se crea el sujeto de prueba 
    render(<AddCategory onNewCategory={()=>{}}/>);
   // screen.debug();
   //Para disparar un evento debemos tener la referencia 
   //al objeto(?)
   //Se extre el input
   const input = screen.getByRole('textbox');
   //Para disparar eventos 
     fireEvent.input(input, {target:{value:'Sailor Moon'}});
    //
     expect(input.value).toBe('Sailor Moon');
     
 });
 test('debe de llamar onNewCategory si el input tiene un valor', () => { 
    //Creamos el valor que vamos a evaluar
    const inputValue = 'Sailor Moon';
    //
    const onNewCategory=jest.fn();
    //Un mock es una simulacion de la funcion 
     //
     render(<AddCategory onNewCategory={onNewCategory} />);

     //Referencias
     const input = screen.getByRole('textbox');
     const form = screen.getByRole('form');

     //1.-Cambiar el valor de la caja de texto//Disparamos el evento
     fireEvent.input(input, {target:{value:inputValue}});
     //2.-Disparar el submit
     fireEvent.submit(form);
     //screen.debug();
     expect(input.value).toBe('');
     expect(onNewCategory).toHaveBeenCalled();
     //Estoy esperando que onNewCategory sea llamada
     // x cantidad de veces

     //Estoy esperando que onNewCategory sea llamada
     // con laa caja se texto
     expect(onNewCategory).toHaveBeenCalledWith(inputValue);
    
    });
    test('No debe llamar al oneNewCategory si el input esta vacio', () => { 
        //Creamos el valor que vamos a evaluar
        const inputValue = null;
        //Se crea el sujeto de prueba 
        const onNewCategory=jest.fn();
        render(<AddCategory onNewCategory={onNewCategory}/>);
         //Referencias
         const form = screen.getByRole('form');
     //1.-Cambiar el valor de la caja de texto//Disparamos el evento
         fireEvent.input(input, {target:{value:inputValue}});
        //screen.debug();
        expect(onNewCategory).toHaveBeenCalled(0);
    });
})