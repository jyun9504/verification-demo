import Cookies from 'universal-cookie';

const cookies = new Cookies();

const $JwtService = {
  getToken() {
    return cookies.get('auth-token')
  },

  saveToken(token) {
    cookies.set('auth-token',token, { path: '/' });
  },

  destroyToken() {
    cookies.remove('auth-token');
  },

  payloadDecrypt(token) {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(atob(base64).split('').join(''));
    return JSON.parse(jsonPayload);
  },
};

export default $JwtService;
