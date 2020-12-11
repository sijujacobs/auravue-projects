// import Login from './components/login/Login'
import React from "react";
import SignUp from './components/auth/SignUp';

import { Container } from "react-bootstrap";
const App = () => {
  return (
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
      >
         <div className="w-100" style={{ maxWidth: "400px" }}>
        <SignUp/>
      </div>
     </Container>
  );
}

export default App;
