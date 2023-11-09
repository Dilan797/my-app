import React from 'react';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../Todoitem';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { EmptyTodos } from '../EmptyTodos';
//#6Creamos el archivo e importamos el botton
import {CreateTodoButton} from '../CreateTodoButton';
import {TodoForm} from '../TodoForm';
import { Modal } from '../TodoModal';
import { TodoContext } from '../TodoContext';



function AppUI (){ 
    const {
        loading,
        error,
        searchedTodos,
        completeTodo,
        deleteTodo, 
        openModal,
        setOpenModal,
    }   = React.useContext(TodoContext);
  //COMPONENTES
    return (
        <>
    {/* 3-Nuevos Todo (para llamar componentes) */}
            <TodoCounter/>
            <TodoSearch/>

            {/* 2- Llamamos el primer componente  */}
        
                
            <TodoList>
            {/* Agregamos el estado de estamos cargando */}
                {loading && (
                    <>
                        <TodosLoading/>
                        <TodosLoading/>
                        <TodosLoading/>
                    </>
                )}
                {error && <TodosError/>}
                {/* */}
                {(!loading && searchedTodos.length === 0) && 
                <EmptyTodos/>}




            {/*Llamamos al Array de defaultTodos, añadimos un map para crear un array a part
            de un array*/}
                {searchedTodos.map(todo => (
            //Agregamos la propiedad key para slucionar el problema
                    <TodoItem
                        key={todo.text}
                        text={todo.text}
                        completed={todo.completed}
                        onComplete={()=>completeTodo(todo.text)}
                        onDelete={()=>deleteTodo(todo.text)}
                    />
                ))}
            </TodoList>
        
    
            {/* 4-Creamos un boton para comentario */}
            <CreateTodoButton
                setOpenModal={setOpenModal}
            />
            
            {/* Creamos un estado para cer si el estado esta abierto */}
            {openModal && (
                <Modal>
                    <TodoForm />
                </Modal>
            )}
        </>
    );
};

export {AppUI};











//Representamos un Array con todas las opciones de todos
// const defaultTodos = [
//   {text: 'Cortar cebolla', completed: true},
//   {text: 'Tomar el curso de React.js', completed: false},
//   {text: 'Llorar con la llorona', completed: false},
//   {text: 'LALALALAAL', completed: false},
//   { text: 'Usar estados derivados', completed: true },
// ];

// localStorage.setItem('TODOS_V1', JSON.stringify (defaultTodos));
// localStorage.removeItem('TODOS_V1');

//Creamos una función 
