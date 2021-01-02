import React  from 'react'
import { Button,Card,ListGroup,Nav,CardGroup,DropdownButton,Dropdown } from 'react-bootstrap';
import './cardSugerencia.css';

export default function CardSugerencia(props) {
  return (

    <div >
    <Card className="contenedor" >
      <Card.Body style={{display:"flex",flexDirection:"column"}}>
      <div className="contenido">
        <Card.Title className="texto">{props.titulo}</Card.Title>
        <Card.Text className="texto">
          {props.descripcion}
        </Card.Text>
        <img className="imagen"   src={props.imagen} />

      </div>
            <Button className="inscribite" variant="primary" >Inscribite</Button>

      </Card.Body>

    </Card>
    </div>
)

}


