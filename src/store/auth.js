import {
  LOGIN,
  LOGOUT,
} from '../constants/actionTypes'


const initialState = {

}

const auth = (state=initialState, action={}) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
      };
    case LOGOUT:
      return {
        ...state,
      };
    default:
      return state;
  }
}

export default auth
