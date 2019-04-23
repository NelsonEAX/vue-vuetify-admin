const TokenKey = 'Token';

export function getToken() {
  return '3b759a9ca80234563d87672350659b2b'; // localStorage.getItem(TokenKey);
}

export function setToken(token) {
  localStorage.setItem(TokenKey, token);
}

export function removeToken() {
  return localStorage.removeItem(TokenKey);
}
