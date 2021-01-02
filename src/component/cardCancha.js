import React  from 'react'
import { Button,Card,ListGroup,Nav,CardGroup,DropdownButton,Dropdown } from 'react-bootstrap';
import './cardCancha.css';

class CardCancha extends React.Component{
constructor(props) {
  super(props);

  this.state={
    'horarios':[2],
  }

  this.getMitad=this.getMitad.bind(this)
  }

componentWillMount(){
  var nuevoHorario= []
  console.log(this.props)


  for (var i = 0; i < 24; i++) {
     nuevoHorario= nuevoHorario.concat([i.toString()+"-"+(i+1).toString()])

  }
  this.setState({

         horarios: nuevoHorario
       })

}
 getMitad(m){
const mitad=[]
       if(m=="primera"){
       for(var i=0;i<(this.state.horarios.length)/2;i++){
       mitad.push(this.state.horarios[i])
       }
        }
       else{
       for(var i=(this.state.horarios.length)/2;i<(this.state.horarios.length);i++){
              mitad.push(this.state.horarios[i])
              }

       }
const retorno=mitad.map((horario)=><Button variant="secondary">{horario}</Button>)
return retorno
}
render(){
return(
    <div className="c" >

<CardGroup >
  <Card style={{background:"black",color:"white"}}>
       <Card.Footer>
                   <small className="text-muted">{this.props.titulo}</small>
       </Card.Footer>
    <Card.Body className="body">
            <div className="bodyContenedor">
               <div className="primeraMitad">
                        {this.getMitad("primera")}
               </div>
                <div className="imagenCancha">
                    <img className="cancha" src="https://ichef.bbci.co.uk/news/640/cpsprodpb/238D/production/_95410190_gettyimages-488144002.jpg"/>
                </div>
                <div className="segundaMitad">
                    {this.getMitad("segunda")}
                </div>
            </div>
    </Card.Body>


  </Card>
  </CardGroup>


    </div>
)
}
}
export default CardCancha;