import { authConstants } from "../constants";

const initialState = {
  currentUser: {},
  loading: false,
  error: "",
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case authConstants.SIGNUP_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case authConstants.SIGNUP_SUCCESS:
      return {
        ...state,
        loading: false,
        currentUser: action.payload.data,
      };
    case authConstants.SIGNUP_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error.message,
        currentUser: {},
      };
    case authConstants.LOGIN_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
        loggedIn:false
      };
    case authConstants.LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        currentUser: action.payload.data,
        loggedIn:true
      };
    case authConstants.LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error.message,
        currentUser: {},
        loggedIn:false
      };
    case authConstants.LOGOUT_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
        loggedIn:true
      };
    case authConstants.LOGOUT_SUCCESS:
      return {
        ...state,
        loading: false,
        currentUser: {},
        loggedIn:false
      };
    case authConstants.LOGOUT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error.message,
        loggedIn:true
      };

    default: {
      return state;
    }
  }
};

export default authReducer;
