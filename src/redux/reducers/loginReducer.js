import { loginConstants } from "../constants";

const initialState = {
  currentUser: {},
  loading: false,
  error: "",
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case loginConstants.LOGIN_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case loginConstants.LOGIN_SUCCESS:
      console.log(' LoginReducer :: LOGIN_SUCCESS :action : ', action);
      return {
        ...state,
        loading: false,
        currentUser: action.payload.data,
      };
    case loginConstants.LOGIN_FAILURE:
      console.log(
        "-----LoginReducer :: LOGIN_FAILURE :: action.payload: ",
        action.payload.error.message
      );
      return {
        ...state,
        loading: false,
        error: action.payload.error.message,
        currentUser: {},
      };
    default: {
      return state;
    }
  }
};

export default loginReducer;
