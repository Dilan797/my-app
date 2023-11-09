import React from 'react';
import { TodoContext } from "../TodoContext";
import './TodoForm.css';
function TodoForm(){ 
    //Creamos la funcion para abrir y cerrar el formulario
    const {
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext);


    const [newTodoValue, setNewTodoValue] = React.useState('');


    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);//Para que el boton cierre el formulario
    };

    const onCancel = () => {
        setOpenModal(false);
    };
    //Agregamos el estado de guardar el todo
    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    };    



    return(
        <form onSubmit={onSubmit}>//Este evento nos ayuda a prevenir el click
        
            <label>Escribe tu nuevo TODO</label>
            <textarea
                placeholder="Cortar cebolla para
                el almuerzo"  
                value={newTodoValue}
                onChange={onChange}
            />
            <div className='TodoForm-buttonContainer'>
            <button
            type="button"
                className="TodoForm-button
                TodoForm-button--cancel"
                onClick={onCancel}
            >Cancelar</button>
            <button
            type="submit"
                className="TodoForm-button
                TodoForm-button--add"
            >Añadir</button>
            </div>
        </form>
    );
}
export{TodoForm};
