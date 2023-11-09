//Creamos la constante de react por que vamos a utilizar una herramienta 
import React from 'react';
import './TodosLoading.css';
//Creamos la fución con su respectivo xport
function TodosLoading(){
    return (        
    <div className="LoadingTodo-container">
        <span className="LoadingTodo-completeIcon"></span>
        <p className="LoadingTodo-text"></p>
        <span className="LoadingTodo-deleteIcon"></span>
    </div>
    );
}

export{TodosLoading};
