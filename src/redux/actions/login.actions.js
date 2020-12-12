import { loginConstants } from "../constants";
import { loginService } from "../services";

const loginBegin = () => ({
  type: loginConstants.LOGIN_BEGIN,
});

const loginSuccess = (data) => ({
  type: loginConstants.LOGIN_SUCCESS,
  payload: { data },
});

const loginFailure = (error) => ({
  type: loginConstants.LOGIN_FAILURE,
  payload: { error },
});



const login = (data) => {
  return (dispatch) => {
    dispatch(loginBegin());
    loginService.login(data).then(
      (resData) => {
        dispatch(loginSuccess(resData));
      },
      (error) => dispatch(loginFailure(error))
    );
  };
}

export const loginActions = {
  login,
};
