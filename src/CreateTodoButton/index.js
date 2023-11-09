//Importamos los estilos css 
import './CreateTodoButton.css';

//Creamos el rchivo js, de nuestro boton

function CreateTodoButton({setOpenModal}){
    return(
        <button 
        className="CreateTodoButton"
        onClick={//Se añade el evento de click all boton "+"
            () => {
                setOpenModal(state => !state);
            }
            
        } 
        
        >+</button>
    );
} 
export { CreateTodoButton };