import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoCounter.css';
//#4- Se crea un archivo nuevo para traer los componentes

function TodoCounter(){
    const {
        completedTodos,
        totalTodos,
    } =  React.useContext(TodoContext);    
    return(
//Agregamos los estilis css
        <h1 className="TodoCounter">
            Has completado <span>{completedTodos}
            </span> de <span>{totalTodos}</span> TODOS
        </h1>      
    );
}
// 5-Creamos un export para este archivo
export{TodoCounter};