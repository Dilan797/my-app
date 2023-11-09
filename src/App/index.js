//#5 Importamos las propiedades Todo  creada en le archivo Js
import React from 'react';
import { AppUI } from './AppUI';
import { TodoProvider } from '../TodoContext';



//Creamos una función 



function App() {

  //Elemento que llama AppUI 
  return(
    <TodoProvider>
      <AppUI/>
    </TodoProvider>
  );
}



export default App;
