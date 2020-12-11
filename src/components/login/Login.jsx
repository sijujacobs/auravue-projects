import { useState } from "react";
import { connect } from "react-redux";

import { loginActions } from "../../redux/actions";

// import { Route, Link } from "react-router-dom";
const Login = (props) => {
  const { login } = props;
  //   console.log("Login :: props : ", props);
  const [credential, setCredential] = useState({
    username: "",
    password: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login :: handleSubmit :credential- ", credential);
    login(credential);
  };

  const handleChange = (e) => {
    // console.log("Login :: handleChange : ", loggingIn);
    const { name, value } = e.target;
    setCredential({
      ...credential,
      [name]: value,
    });
  };

  return (
    <div className="col-md-6 col-md-offset-3">
      <h2>Login:11-5:54</h2>
      <form name="form" onSubmit={handleSubmit}>
        <div
          className={
            "form-group" +
            (credential.submitted && !credential.username ? " has-error" : "")
          }
        >
          <label htmlFor="username">Username</label>
          <input
            type="text"
            className="form-control"
            name="username"
            value={credential.username}
            onChange={handleChange}
          />
          {credential.submitted && !credential.username && (
            <div className="help-block">Username is required</div>
          )}
        </div>
        <div
          className={
            "form-group" +
            (credential.submitted && !credential.password ? " has-error" : "")
          }
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            name="password"
            value={credential.password}
            onChange={handleChange}
          />
          {credential.submitted && !credential.password && (
            <div className="help-block">Password is required</div>
          )}
        </div>
        <div className="form-group">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  const { loggedIn } = state.loginReducer;
  return { loggedIn };
};

// const mapStateToProps = (state) => {
//     return {
//       postsData: state.postReducer.postsData,
//     };
//   };

// const actionCreators = {
//   login: loginActions.login,
// };

const mapDispatchToProps = (dispatch) => {
  return {
    login: (d) => dispatch(loginActions.login(d)),
  };
};

const connectedLogin = connect(mapStateToProps, mapDispatchToProps)(Login);

export default connectedLogin;

// const mapStateToProps = (state) => {
//     return {
//       postsData: state.postReducer.postsData,
//     };
//   };
// const mapDispatchToProps = (dispatch) => {
//   return {
//     getPosts: () => dispatch(postActions.getPosts()),
//   };
// };

//   const connectedPostList = connect(mapStateToProps)(PostList);
//   export default connectedPostList;

// {loggingIn && (
//     <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
//   )}
//   <Route to="/register" className="btn btn-link">
//     Register
//   </Route>
