import React, { useEffect, useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
  } from 'react-router-dom';
import Login from '../components/Login/Login';
import { NavBar } from '../components/molecule/NavBar';
import { ClientPage } from '../components/pages/clientepage/ClientPage.js';
import { CdPage } from '../components/pages/cdpages/CdPage';
import { RentalPage } from '../components/pages/rentalpage/RentalPage';
import { RentalDetailPage } from '../components/pages/rentalDetailpage/RentalDetailPage';
import { SantionPage } from '../components/pages/santionpage/SantionPage';



export const AppRouter = () => {

  useEffect(()=>{
    JSON.parse(window.localStorage.getItem('user'))&&setSession(JSON.parse(window.localStorage.getItem('user')));
  },[]);
  
  const [session, setSession] = useState({
    email:''
  })
    return (
        <Router>
        <div>
        {session.email&&<NavBar />}
          <Switch>
              <Route exact path="/client">
              <ClientPage />
              </Route>
              <Route exact path="/cd">
              <CdPage />
              </Route>
              <Route exact path="/rental">
              <RentalPage />
              </Route>
              <Route exact path="/rental/detail">
              <RentalDetailPage />
              </Route>
              <Route exact path="/santion">
              <SantionPage />
              </Route>
              <Route exact path="/">
                <Login session = {session} setSession={setSession} />
              </Route>
              <Redirect to="/" />
          </Switch>
        </div>
      </Router>
    )
}
