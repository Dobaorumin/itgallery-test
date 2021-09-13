import { types } from "../types/types";

const initialState = {
    fileSizeBytes:"",
    url:""
}

export const imagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.saveImage:
        return {
            ...state,
            fileSizeBytes:action.payload.fileSizeBytes,
            url:action.payload.url
        }
    case types.deleteSavedImage:
      return{}
    default:
      return state;
  }
};

