import React from "react";



function useLocalStorage(itemName, initialValue) {
    const [item, setItem] = React.useState (initialValue);
    const [loading, setLoading] = React.useState (true);
    const [error, setError] = React.useState (false);


        //Funciones para añadir nuestra seleccion a la memoria del navegador
    React.useEffect(() => { 
        setTimeout(() => {
            try {
                const localStorageItem = localStorage.getItem (itemName);
        
    
                let parsedItem;//creamos la variable
    
        
                if (!localStorageItem){
                    localStorage.setItem('TODOS_V1' , JSON.
                    stringify(initialValue));
                    parsedItem = initialValue;
                }   else {
                    parsedItem = JSON.parse(localStorageItem); 
                    setItem(parsedItem);
                }
                //Logica para encontrar el error al cargar la pagina
                setLoading(false);
            }   catch(error) {
                setLoading(false);
                setError(true);
            }
        },2000);//Enviamos el tiempo en conectarse 
    }); 


    //Creamos un estado interno del custom Hook y el localStorage 
    
    //Modificación del localStorage
    const saveItem = (newItem) => {
        localStorage.setItem('TODOS_V1', JSON.
        stringify(newItem));
        setItem(newItem);
    };

    
    //Usamos un return para actualizar el loclStorage y el customhook
    return {
        item,
        saveItem,
        loading,
        error,    
    };
}


export {useLocalStorage};

// Representamos un Array con todas las opciones de todos
// localStorage.removeItem('TODOS_V1');
// const defaultTodos = [
//   {text: 'Cortar cebolla', completed: true},
//   {text: 'Tomar el curso de React.js', completed: false},
//   {text: 'Llorar   con la llorona', completed: false},
//   {text: 'LALALALAAL', completed: false},
//   { text: 'Usar estados derivados', completed: true },
// ];

// localStorage.setItem('TODOS_V1', JSON.stringify (defaultTodos));