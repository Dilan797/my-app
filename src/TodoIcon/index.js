import{ReactComponent as CheckSVG} from './check.svg';
import{ReactComponent as DeleteSVG} from './delete.svg';
// Importamos un archivo css para los estilos de los iconos
import './TodoIcon.css';
const iconTypes ={
    "check": (color) => <CheckSVG className='Icon-svg' fill={color}/>,
    "delete": (color) => <DeleteSVG className='Icon-svg' fill={color}/>,
};
function TodoIcon({type, color, onClick}){
    return(
        <span 
            className={`Icon.container Icon-container-${type}`}
            onClick={onClick}
        >
            {iconTypes[type](color)}
        </span>

    )
}
export{TodoIcon};