import { 
  LOGIN,
  SET_MINE,
  SET_BALANCE,
  LOGOUT,
} from '../constants/actionTypes'
import $ApiService from '../utils/api.service'
import $JwtService from '../utils/jwt.service'

export const logIn = (payload) => (dispatch) => {
  return new Promise((resolve, reject) => {
    $ApiService.post({url: "/accounts/login", data: payload}, reject)
      .then((res) => {
        if (res) {
          if (res.errors) {
            throw res.errors
          } else {
            $JwtService.saveToken(res.token)
            dispatch({ type: LOGIN })
            resolve()
          }
        }
      })
      .catch((errors) => {
        reject(errors)
      })
  })
}

export const getMine = () => (dispatch) => {
  return new Promise((resolve, reject) => {
    $ApiService.get({url: "/accounts/accounts/mine/"})
      .then((res) => {
        if (res) {
          if (res.errors) {
            throw res.errors
          } else {
            dispatch({ type: SET_MINE, payload: res.info })
            dispatch({ type: SET_BALANCE, payload: res.balance })
            resolve()
          }
        } else {
          $JwtService.destroyToken()
        }
      })
      .catch(() => {
        reject()
      })
  })
}

export const logOut = () => (dispatch) => {
  dispatch({ type: LOGOUT });
  $JwtService.destroyToken();
  return new Promise((resolve) => {
    $ApiService.get({url: "/accounts/logout"})
      .then((res) => {
        if (res) {
          resolve()
        }
      })
  })
}
