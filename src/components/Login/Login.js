import React, { useState, useCallback } from 'react';
import {  useHistory } from "react-router-dom";
import Label from '../atoms/title/Label';

const Login = () =>{
  
  const history = useHistory();
  const [loginData, setLoginData] = useState({
    email:'',
    password:''
  })

  const handleInputChange = (event) => {
    setLoginData({
        ...loginData,
        [event.target.name] : event.target.value
    })
}

const handleLogin = useCallback(() => history.push('/client'), [history]);

  return(<>
  <form className = 'container' onSubmit = {handleLogin}>
    <div class="form-group">
      <Label className = "control-label" children = 'Email' ></Label>
      <input 
                type="email" 
                className="form-control" 
                name="email"
                onChange = {handleInputChange} />
    </div>
    <div class="form-group">
    <Label className = "control-label" children = 'Password' ></Label>
      <input 
                type="password" 
                className="form-control" 
                name="password" 
                onChange = {handleInputChange} />
    </div>
    <button className = 'btn btn-primary'>Login</button>
  </form>
  </>);
}

// class Login extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       isPasswordValid: false,
//       passwordEntered: false
//     }
//   }

//   passwordChangeHandler = (event) => {
//     const password = event.target.value;

//     this.setState({
//       passwordEntered: true
//     });

//     if (password.length < 5 || password.length > 10) {
//       this.setState({
//         isPasswordValid: false
//       });
//     } else {
//       this.setState({
//         isPasswordValid: true
//       });
//     }
//   }

//   render() {
//     let passwordBoxStyle = null;
//     if (this.state.passwordEntered && !this.state.isPasswordValid) {
//       passwordBoxStyle = {
//         boxShadow: '0 0 2px 1px rgba(255, 0, 0, 1)',
//       };
//     }

//     return (
//       <Container className="Login">
//             <Card className="login-form-container">
//               <Form>
//                 <Form.Group as={Row} controlId="formPlaintextEmail">
//                   <Form.Label column sm="2">
//                     Email
//                   </Form.Label>
//                   <Col sm="10">
//                     <Form.Control type="email" placeholder="Enter email" />
//                   </Col>
//                 </Form.Group>

//                 <Form.Group as={Row} controlId="formPlaintextPassword">
//                   <Form.Label column sm="2">
//                     Password
//                   </Form.Label>
//                   <Col sm="10">
//                     <Form.Control type="password" placeholder="Password" className="password-box" style={passwordBoxStyle} onChange={this.passwordChangeHandler} />
//                   </Col>
//                 </Form.Group>
//                 <Col sm="10">
//                 <button variant="dark">Dark</button>
//                 </Col>
//               </Form>
//             </Card>
//       </Container>
//     );
//   }
// }

export default Login;
