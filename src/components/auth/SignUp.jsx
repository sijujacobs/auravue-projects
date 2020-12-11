import React, { useRef } from "react";
import { Form, Button, Card } from "react-bootstrap";

const SignUp = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConRef = useRef();
  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center">Sign Up</h2>
          <Form>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
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

export default SignUp;
