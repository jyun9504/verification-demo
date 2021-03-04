import {
  SET_RECEIPTS,
} from '../constants/actionTypes'


const initialState = {
  
}

const receipts = (state=initialState, action={}) => {
  switch (action.type) {
    case SET_RECEIPTS:
      return {
        ...state,
      };
    default:
      return state;
  }
}

export default receipts
