
import React, { useEffect } from 'react';

import { BrowserRouter as Router, Switch } from "react-router-dom";
import ContentAgent from './components/adminComponent/ContentAgent';
import ContentMessage from './components/adminComponent/ContentMessage';
import ContentUsers from './components/adminComponent/ContentUsers';
import ContentVol from './components/adminComponent/ContentVol';
import ContentReservation from './components/agentComponent/ContentReservation';


import GetVoyageVoyageur from './components/voyageurComponent/ContentVoyageur';
import Profil from './components/voyageurComponent/profil';
import PrivateRoute from './HigherOrderComponents/PrivateRoute';
import PublicRoute from './HigherOrderComponents/PublicRoute';
import TopBar from './layouts/TopBar';
import Home from './pages/Home';

import Login from './pages/Login';
import Register from './pages/Register';
import DashAdmin from './views/DashAdmin';
import DashAgent from './views/DashAgent';
import Details from './pages/Details';

function App() {

  return (

    <Router>
      <TopBar/>

      <Switch>

        <PublicRoute restricted={true} path="/register" component={Register} />
        <PublicRoute  path="/login" component={Login} />
  
    
        <PrivateRoute role={["admin","voyageur" ,"agent"]} path="/reserver"  component={Details} />

        {/* admin */}
        <PrivateRoute role={["admin"]} path="/vol"  component={ContentVol} />
        <PrivateRoute role={["admin"]} path="/voyageurs"  component={ContentUsers} />
        <PrivateRoute role={["admin"]} path="/messages"  component={ContentMessage} />
        <PrivateRoute role={["admin"]} path="/agent"  component={ContentAgent} />
        <PrivateRoute role={["admin"]} path="/dashAdmin"  component={DashAdmin} />

        {/* agent */}
        <PrivateRoute role={["agent"]} path="/dashAgent"  component={DashAgent} />
        <PrivateRoute role={["agent"]} path="/reservation"  component={ContentReservation} />
        <PrivateRoute role={["agent"]} path="/voyage"  component={DashAgent} />

        {/* voyageur */}
        <PrivateRoute role={["voyageur"]} path="/mesreservation"  component={GetVoyageVoyageur} />
        <PrivateRoute role={["voyageur","agent","admin"]} path="/profil"  component={Profil} />
        <PrivateRoute role={["voyageur"]} path="/dashVoyageur"  component={Profil} />

        <PublicRoute path="/"  component={Home} />

      </Switch> 
    </Router>
  );
}

export default App;