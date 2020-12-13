import React, { useRef, useState, useEffect } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { authActions } from "../../redux/actions";

const Login = (props) => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const history = useHistory();

  const { login, loggedIn } = props;
  const [error, setError] = useState("");
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    if (loggedIn) {
      history.push("/");
    }
  }, [history, loggedIn]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentUser({
      ...currentUser,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (emailRef.current.value !== "" && passwordRef.current.value !== "") {
      setError("");
      login(currentUser);
    } else {
      return setError("Passwords do not match, Please try again.");
    }
  };
  return (
    <div className="w-100" style={{ maxWidth: "400px" }}>
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
          <h2 className="text-center">Login</h2>
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

            <Button type="submit">Login</Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Need an account ? <Link to="/signUp">Sign Up</Link>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    currentUser: state.authReducer.currentUser,
    error: state.authReducer.error,
    loggedIn: state.authReducer.loggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (d) => dispatch(authActions.login(d)),
  };
};

const connectedLogin = connect(mapStateToProps, mapDispatchToProps)(Login);
export default connectedLogin;
