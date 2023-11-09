//Creamos la constante de react por que vamos a utilizar una herramienta 
import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoSearch.css';
//Creamos la fución con su respectivo xport
function TodoSearch(){
    //Seañade para el filtro de la barra de busqueda                                    
    const {
        searchValue,
        setSearchValue,
    } =  React.useContext(TodoContext);  
    //Se crea la siguiente linea de código para  
    
    
    return (
        <input 
            placeholder="Cortar cebolla"
            className="TodoSearch"
            
            value={searchValue}
            onChange={(event)=> {
                setSearchValue(event.target.value);
        //Los proximos console nos muestra cada letra de la palabra en la consola
                // console.log(event);
                // console.log(event.target);
                // console.log(event.target.value);
            }}
        />
    );
}

export{TodoSearch};