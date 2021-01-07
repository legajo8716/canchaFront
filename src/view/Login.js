
import { Form,Button}from 'react-bootstrap';
import React from 'react'
import axios from 'axios';



export default class CardCancha extends React.Component{
constructor(props){
super(props);
this.state={
"email":'',
"password":'',
}
}
 handleChange = event => {

    this.setState({ [event.target.name] : event.target.value });
    console.log(this.state)
  }

   handleSubmit = event => {
      event.preventDefault();
        const user = {
        email: this.state.email,
        password:this.state.email

      };
        axios.post(`https://localhost:8081/login`, { user })
        .then(res => {
          console.log(res);
          console.log(this.state);
          console.log(res.data);
        })
    }



render(){
return(
        <div>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Direccion email</Form.Label>
            <Form.Control type="email" name="email" placeholder="ingrese su email" onChange={this.handleChange}/>
            <Form.Text className="text-muted">
              Nunca revele su contraseña.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" name="password" placeholder="Password" onChange={this.handleChange} />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        </div>



)


}
}