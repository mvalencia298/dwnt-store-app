import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import ClientForm from './components/Form/ClientForm';
import TableClients from './components/Table/TableClients';
import Login from './components/Login/Login';
import { CDForm } from './components/Form/CDForm';
import { TableCD } from './components/Table/TableCD';
import Inicio from './components/Menu/Inicio';
import {Link} from 'react-router-dom'


const App = () => {


  return (
    <div>

    <Router>
    <div className="App">
         <nav class="navbar navbar-light bg-light">
    <div class="container-fluid">
    <Link class="navbar-brand" to="/Inicio">Inicio</Link>
    <Link class="navbar-brand" to="/client">Registrar Clientes</Link>
    <Link class="navbar-brand" to="/cd">Registrar Cds</Link>
    <Link class="navbar-brand" to="/client-table">Listar Clientes</Link>
    <Link class="navbar-brand" to="/cd-table">Listar Cds</Link>
    <Link class="navbar-brand" to="/Login">Salir</Link>
   
  </div>
</nav>
    </div>

    <Switch>    
          <Route path="/client">
            <ClientForm />
          </Route>
          <Route path="/client-table">
            <TableClients />
          </Route>
          <Route path="/cd">
            <CDForm/>
          </Route>
          <Route path="/cd-table">
            <TableCD />
          </Route>
          <Route path="/Inicio">
            <Inicio/>
          </Route>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
    </Router>

 
    </div>




  );
}

export default App;
