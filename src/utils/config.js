let apiUrl = `${process.env.REACT_APP_HTTP_PERFIX}://`

if (process.env.REACT_APP_BACKEND_HOST) {
  apiUrl += process.env.REACT_APP_BACKEND_HOST
} else {
  apiUrl += window.location.hostname
}

if (process.env.REACT_APP_BACKEND_PORT) {
  apiUrl += `:${process.env.REACT_APP_BACKEND_PORT}`
}

if (process.env.REACT_APP_VERSION) {
  apiUrl += process.env.REACT_APP_VERSION
}

// export const API_URL = 'https://fd9b1fa8eb11.ngrok.io/api/v1'
export const API_URL = apiUrl
export default API_URL
