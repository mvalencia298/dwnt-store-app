import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
  } from 'react-router-dom';
import { CDForm } from '../components/molecule/CDForm';
import { TableCD } from '../components/molecule/TableCD';
import Login from '../components/Login/Login';
import { NavBar } from '../components/molecule/NavBar';
import { ClientPage } from '../components/pages/ClientPage.js';

export const AppRouter = () => {

    return (
        <Router>
        <div>
        <NavBar />
          <Switch>
              <Route exact path="/client">
              <ClientPage />
              </Route>
              <Route exact path="/cd">
                <CDForm />
                <TableCD />
              </Route>
              <Route exact path="/">
                <Login />
              </Route>
              <Redirect to="/" />
          </Switch>
        </div>
      </Router>
    )
}
