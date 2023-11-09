import React from "react";
import { useLocalStorage } from "./useLocalStorage";


const TodoContext = React.createContext();

function TodoProvider({children}){
    //Se agraga loading y error
    const{
        item:todos,
        saveItem:saveTodos,
        loading,
        error,
    }= useLocalStorage('TODOS_V1', []);
  //Importamos el codígo de el archivo search.js
    const [searchValue, setSearchValue]=  React.useState('');

    //Creamos el estado para saber si esta avierto el modal
    const [openModal, setOpenModal]=  React.useState(false);


  //Variables para filtrar la contidad de todos seleccionados
    const completedTodos = todos.filter(
        todo => !!todo.completed
    ).length;
    const totalTodos = todos.length  ;



  //Estado derivado para la busqueda especifica de los 'todos'
const searchedTodos = todos.filter(
    (todo) =>{
        const todoText = todo.text.toLowerCase();
        const searchText = searchValue.toLowerCase();

        return todoText.includes(searchText);
    }
    );
//Agregamos la función para agregar 
// los todos a nuestra lista 
    const addTodo = (text) => {
        const newTodos = [...todos];
        newTodos.push({
            text,
            completed: false,
        });
        saveTodos(newTodos);
    };

  //Creamos una función actualizadora del estado para los todo seleccionado
const completeTodo = (text) => {
        const newTodos = [...todos];//Creamos una copia [...]
        const todoIndex = newTodos.findIndex(
            (todo) => todo.text === text
        );
        newTodos[todoIndex].completed = true;
        saveTodos(newTodos)
    };

  //Creamos una función actualizadora del estado para borrar los todo seleccionado
    const deleteTodo = (text) => {
        const newTodos = [...todos];//Creamos una copia [...]
        const todoIndex = newTodos.findIndex(
            (todo) => todo.text === text
        );
        newTodos.splice(todoIndex, 1);
        saveTodos(newTodos)
    };
    
    return(
    <TodoContext.Provider value={{
        loading,
        error,
        completedTodos,
        totalTodos,
        searchValue, 
        setSearchValue,
        searchedTodos,
        addTodo,
        completeTodo,
        deleteTodo, 
    //Retornamos los compnentes del modal
        openModal,
        setOpenModal,
    }}>
        {children}
    </TodoContext.Provider>
    );
}



export{TodoContext, TodoProvider};