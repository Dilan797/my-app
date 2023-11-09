//Importamos los archivos de complete y delete icon
import {CompleteIcon} from '../TodoIcon/CompleteIcon'
import {DeleteIcon} from '../TodoIcon/DeleteIcon'
import './Todoitem.css';

//1- Creamos la primera funcion(componente  )
//2-Usando las props podemos mostar los textos de nuestro componentes
function TodoItem(props){
    return(
    <li className='TodoItem'>
        <CompleteIcon
            completed={props.completed}
            onComplete={props.onComplete}
        />
        {/* Clase para activar la flecha verde al objeto seleccionado */}
        
        {/* clase para subrrayar al objeto seleccionado */}
        <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
            {props.text}
        </p>
        <DeleteIcon
        onDelete={props.onDelete}
        />    
        
    </li>
    );
}
export {TodoItem};