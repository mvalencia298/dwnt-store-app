import React, { useCallback, useState } from 'react';
import { useHistory } from "react-router-dom";
import { useForm } from '../../hooks/useForm';
import './login.css';

const Login = ({setSession}) => {


  const history = useHistory();
  const [errors, setErrors] = useState({})

  const [loginData, handleInputChange, reset] = useForm({
    email: '',
    password: ''
  });

  const loginadd = useCallback(() => history.push('/client'), [history]);

  const handleLogin = (e) => {
    e.preventDefault();
    if (loginData.email === 'mauro@p.cpm' && loginData.password === '123456') {
      window.localStorage.setItem('user', JSON.stringify(loginData));
      setSession({...loginData});
      loginadd();
    } else {
      let errors = {};
      //Name
      if (!loginData["password"]) {
        errors["password"] = "Cannot be empty";
      }
      if(!loginData["email"]){
        errors["email"] = "Cannot be empty";
     }
      setErrors(errors);
      reset();
    }
  }

  return (<>
    <div className='container-login'>
      <form className='login' onSubmit={handleLogin}>
        <h2>Store App</h2>
        <div className="form-group">
          <input
            type="email"
            className="form-control"
            name="email"
            placeholder="email"
            onChange={handleInputChange} />
          <span style={{ color: "red" }}>{errors["email"]}</span>
        </div>
        <div className="form-group">
          <input
            type="password"
            className="form-control"
            name="password"
            placeholder="password"
            onChange={handleInputChange} />
          <span style={{ color: "red" }}>{errors["password"]}</span>
        </div>
        <button className='btn btn-primary'>Login</button>
      </form>
    </div>
  </>);
}
export default Login;
