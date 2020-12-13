
import React from "react";
import SignUp from './components/auth/SignUp';
import Login from './components/auth/Login';
import UserProfile from './components/auth/UserProfile';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import { Container } from "react-bootstrap";
const App = () => {
  return (
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
      >
           <BrowserRouter>
            <Switch>
              <Route exact path="/" component={UserProfile}/>
              <Route path="/signUp" component={SignUp}/>
              <Route path="/login" component={Login} />
            </Switch>
           </BrowserRouter>
       
     </Container>
  );
}

export default App;
