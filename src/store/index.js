import { combineReducers } from 'redux'
import auth from './auth'
import receipts from './receipts'

const reducer = combineReducers({
  auth,
  receipts,
})

const rootReducer = (state, action) => {
  if (action.type === 'LOGOUT') {
    state = undefined
  }

  return reducer(state, action)
}

export default rootReducer