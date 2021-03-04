import { API_URL } from './config'
import $JwtService from './jwt.service'

const $ApiService = {
  URL: API_URL,

  UrlEncode: (obj) => {
    if (!obj || Object.prototype.toString.call(obj) !== '[object Object]') {
      return ''
    }
    let params = []
    for (let key in obj) {
      params.push(encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]))
    }
    return params.join('&')
  },

  get: (objson) => {
    let Alldata = ''
    if (objson.data) {
      Alldata = '?' + $ApiService.UrlEncode(objson.data)
    }
    return fetch(`${$ApiService.URL}${objson.url}${Alldata}`, {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ' + $JwtService.getToken(),
      },
      signal: objson.signal
    })
    .then((res) => {
      if(res){
        return res.json()
      } else {
        throw res
      }
    }) 
    .catch((error) => {
      if(isNaN(error)) {
        if(error.message.substring(0,6) === 'Failed'){
          console.log('伺服器錯誤, 重新整理頁面')
        }
        return
      }
    })
  },

  post: (objson, reject) => {
    let formData = new FormData()
    if( objson.data ) {
      let OB = objson.data
      for(let i in OB ){
        formData.append(i,OB[i])
      }
    }
    return fetch(`${$ApiService.URL}${objson.url}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + $JwtService.getToken(),
      },
      body: JSON.stringify(objson.data)
    })
    .then((res) => {
      if(res){
        return res.json()
      } else {
        throw res
      }
    })
    .catch(( error ) => {
      console.log('Error ',error)
      reject('Internet connection is abnormal.')
    })
  },

  delete: (objson) => {
    return fetch(`${$ApiService.URL}${objson.url}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + $JwtService.getToken(),
      },
    })
    .then((res) => {
      if(res){
        return res.json()
      } else {
        throw res
      }
    })
    .catch(( error ) => {
      console.log('Error ',error)
    })
  },
}

export default $ApiService
