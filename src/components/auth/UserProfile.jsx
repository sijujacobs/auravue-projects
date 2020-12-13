import React, { useState, useEffect } from "react";

import { useHistory } from "react-router-dom";
import { connect } from "react-redux";

import { authActions } from "../../redux/actions";
import { Button, Alert } from "react-bootstrap";

const UserProfile = (props) => {
  const history = useHistory();

  const { loggedIn, currentUser, logOut } = props;
  const [error, setError] = useState("");

  useEffect(() => {
    if (!loggedIn) {
      history.push("/login");
    }
  }, [history, loggedIn]);

  const onLogoutHandler = () => {
    setError("");
    logOut();
  };
  return (
    <div className="w-100" style={{ maxWidth: "400px" }}>
      <h2>User Profile</h2>
      <div className="w-100 text-center mt-2">
        <div className="text-center">
          <h3>{currentUser.email}</h3>{" "}
        </div>
        {error && <Alert variant="danger">{error}</Alert>}
        <Button variant="link" onClick={onLogoutHandler}>
          Log Out
        </Button>
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
    logOut: () => dispatch(authActions.logOut()),
  };
};

const connectedUserProfile = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfile);
export default connectedUserProfile;
