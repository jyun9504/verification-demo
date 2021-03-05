import {
  SET_RECEIPTS,
  SET_CONFLICTS,
  SET_TARGETBANK,
} from '../constants/actionTypes'


const initialState = {
  receipts: [],
  conflicts: [],
  targetBank: null,
  banks: [
    {id: 0, name: 'All', num_of_receipts: 6},
    {id: 1, name: 'AA銀行', num_of_receipts: 5},
    {id: 2, name: 'BB銀行', num_of_receipts: 1},
  ]
}

const receipts = (state=initialState, action={}) => {
  switch (action.type) {
    case SET_RECEIPTS:
      return {
        ...state,
        receipts: action.payload
      };
    case SET_TARGETBANK:
      return {
        ...state,
        targetBank: action.payload
      };
    case SET_CONFLICTS:
      return {
        ...state,
        conflicts: action.payload
      };
    default:
      return state;
  }
}

export default receipts
