import { authConstants } from "../constants";
import { authService } from "../services";

const signUpBegin = () => ({
  type: authConstants.LOGIN_BEGIN,
});

const signUpSuccess = (data) => ({
  type: authConstants.LOGIN_SUCCESS,
  payload: { data },
});

const signUpFailure = (error) => ({
  type: authConstants.LOGIN_FAILURE,
  payload: { error },
});


const loginBegin = () => ({
  type: authConstants.LOGIN_BEGIN,
});

const loginSuccess = (data) => ({
  type: authConstants.LOGIN_SUCCESS,
  payload: { data },
});

const loginFailure = (error) => ({
  type: authConstants.LOGIN_FAILURE,
  payload: { error },
});


const logOutBegin = () => ({
  type: authConstants.LOGOUT_BEGIN,
});

const logOutSuccess = (data) => ({
  type: authConstants.LOGOUT_SUCCESS,
  payload: { data },
});

const logOutFailure = (error) => ({
  type: authConstants.LOGOUT_FAILURE,
  payload: { error },
});



const signUp = (data) => {
  return (dispatch) => {
    dispatch(signUpBegin());
    authService.signUp(data).then(
      (resData) => {
        dispatch(signUpSuccess(resData));
      },
      (error) => dispatch(signUpFailure(error))
    );
  };
}

const login = (data) => {
  return (dispatch) => {
    dispatch(loginBegin());
    authService.login(data).then(
      (resData) => {
        dispatch(loginSuccess(resData));
      },
      (error) => dispatch(loginFailure(error))
    );
  };
}

const logOut = () => {
  return (dispatch) => {
    dispatch(logOutBegin());
    authService.logOut().then(
      (resData) => {
        dispatch(logOutSuccess(resData));
      },
      (error) => dispatch(logOutFailure(error))
    );
  };
}

export const authActions = {
  signUp,
  login,
  logOut
};
