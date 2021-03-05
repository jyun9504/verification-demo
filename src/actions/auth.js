import {
  LOGOUT,
  LOGIN
} from '../constants/actionTypes'

export const login = () => (dispatch) => {
  return new Promise((resolve, reject) => {
    dispatch({ type: LOGIN })
    resolve()
  })
}

export const logout = () => (dispatch) => {
  return new Promise((resolve, reject) => {
    dispatch({ type: LOGOUT })
    resolve()
  })
}
