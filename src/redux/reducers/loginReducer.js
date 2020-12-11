import { loginConstants } from "../constants";

const initialState = {
  user: {},
  loggedIn: false,
  error: {},
};

// const initialState = user ? { loggedIn: true, user } : {};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case loginConstants.LOGIN_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case loginConstants.LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload.data,
      };
    case loginConstants.LOGIN_FAILURE:
      console.log(
        " FETCH_SUBREDDIT_FAILURE :: payload : ",
        action.payload.error
      );
      return {
        ...state,
        loading: false,
        error: action.payload.error.message,
        user: {},
      };
    default: {
      return state;
    }
  }
};

export default loginReducer;
