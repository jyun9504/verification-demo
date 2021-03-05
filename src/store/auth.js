import {
  LOGIN,
  LOGOUT,
} from '../constants/actionTypes'


const initialState = {
  isAuth: !!localStorage.getItem('token')
}

const auth = (state=initialState, action={}) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isAuth: true
      };
    case LOGOUT:
      return {
        ...state,
        isAuth: false
      };
    default:
      return state;
  }
}

export default auth
