import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Card(props){
    return(
        <div key={props.id} className='box'>
            <FontAwesomeIcon icon={props.icon} />                
            <h3>{props.title}</h3>
            <p>{props.text}</p>
        </div>
    )
}

export default Card;