import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";

import { connect } from "react-redux";

import { loginActions } from "../../redux/actions";

const SignUp = (props) => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConRef = useRef();
  const { login } = props;
  const [error, setError] = useState("");
  const [currentUser, setCurrentUser] = useState({});

  const handleChange = (e) => {
    // console.log("Login :: handleChange : ", loggingIn);
    const { name, value } = e.target;
    setCurrentUser({
      ...currentUser,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (passwordRef.current.value !== passwordConRef.current.value) {
      return setError("Passwords do not match, Please try again.");
    } else {
      setError("");
      login(currentUser);
    }
  };
  return (
    <>
      <div className="w-100" style={{ maxWidth: "400px" }}>
        {currentUser && currentUser.email && (
          <div className="text-center">
            Logged in as <h3>{currentUser.email}</h3>{" "}
          </div>
        )}
        {error && <Alert variant="danger">{error}</Alert>}
      </div>
      <Card>
        <Card.Body>
          <h2 className="text-center">Sign Up</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                name="email"
                type="email"
                ref={emailRef}
                required
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                name="password"
                type="password"
                ref={passwordRef}
                required
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group id="passwordConfirmation">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type="password" ref={passwordConRef} required />
            </Form.Group>
            <Button type="submit">Sign Up</Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <h2 className="text-center">Already have an Account ? Sign In</h2>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  console.log(" ::mapStateToProps : state : ", state);
  //   const { error } = state.loginReducer.error;
  return {
    currentUser: state.loginReducer.currentUser,
    error: state.loginReducer.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (d) => dispatch(loginActions.login(d)),
  };
};

const connectedSignUp = connect(mapStateToProps, mapDispatchToProps)(SignUp);
export default connectedSignUp;
