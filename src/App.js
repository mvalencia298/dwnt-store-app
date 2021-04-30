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

const App = () => {
  return (
    <>
    <Router>
    <Switch>
          <Route path="/client">
            <ClientForm />
          </Route>
          <Route path="/client-table">
            <TableClients />
          </Route>
          <Route path="/cd">
            <CDForm />
          </Route>
          <Route path="/cd-table">
            <TableCD />
          </Route>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
    </Router>
    </>
  );
}

export default App;
