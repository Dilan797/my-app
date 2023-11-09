import React from "react";
//Importamos la maquina de render
import ReactDOM from "react-dom";
import './Modal.css';

//Creamos la funcion para el componente modal

function Modal ({ children }){

    return ReactDOM.createPortal(
        <div className="ModalBackground">
            {children}
        </div>,
        document.getElementById('modal')
    );


}
export { Modal };