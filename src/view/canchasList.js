import React from 'react'
import CardCancha from'../component/cardCancha.js'
import './canchaList.css';
import { Carousel} from 'react-bootstrap';


 export default function CardList(){


return(
<div className="contenedorCardCancha">

 <Carousel className="carrousel">

   <Carousel.Item className="item">
   <Carousel.Caption className="caption" >
          <h3>Lunes</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
   </Carousel.Caption>

     <CardCancha className="cancha" titulo="Cancha 1"
           imagen="https://media.istockphoto.com/photos/sport-soccer-field-picture-id496942777?k=6&m=496942777&s=170667a&w=0&h=bCgAHhZQYnyUZoaMVjqgePdDICmT-1DWInrt4RkKbOc="
           apertura="8"
           cierre="24"
         />
   </Carousel.Item>
   <Carousel.Item>
     <CardCancha  titulo="Cancha 1"
           imagen="https://media.istockphoto.com/photos/sport-soccer-field-picture-id496942777?k=6&m=496942777&s=170667a&w=0&h=bCgAHhZQYnyUZoaMVjqgePdDICmT-1DWInrt4RkKbOc="
           apertura="8"
           cierre="24"
         />

     <Carousel.Caption>
       <h3>Second slide label</h3>
       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
     </Carousel.Caption>
   </Carousel.Item>
   <Carousel.Item>
     <CardCancha  titulo="Cancha 1"
           imagen="https://media.istockphoto.com/photos/sport-soccer-field-picture-id496942777?k=6&m=496942777&s=170667a&w=0&h=bCgAHhZQYnyUZoaMVjqgePdDICmT-1DWInrt4RkKbOc="
           apertura="8"
           cierre="24"
         />

     <Carousel.Caption>
       <h3>Third slide label</h3>
       <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
     </Carousel.Caption>
   </Carousel.Item>
 </Carousel>


</div>


)





}
