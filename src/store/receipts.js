import {
  SET_RECEIPTS,
} from '../constants/actionTypes'


const initialState = {
  receipts: [],
  banks: [
    {id: 1, name: 'AA銀行', num_of_receipts: 5},
    {id: 2, name: 'BB銀行', num_of_receipts: 0},
    {id: 3, name: 'CC銀行', num_of_receipts: 0},
    {id: 4, name: 'DD銀行', num_of_receipts: 0},
    {id: 0, name: 'EE銀行', num_of_receipts: 0},
  ]
}

const receipts = (state=initialState, action={}) => {
  switch (action.type) {
    case SET_RECEIPTS:
      return {
        ...state,
        receipts: action.payload
      };
    default:
      return state;
  }
}

export default receipts
