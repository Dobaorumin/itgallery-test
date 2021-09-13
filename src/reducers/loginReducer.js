import { types } from "../types/types";

const initialState = {
    active:false,
    email:""
}

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.login:
      return {
        active: action.payload.active,
        email: action.payload.email,
      };
    case types.logout:
      return {
          active:false,
          email:""
      };
    default:
      return state;
  }
};
