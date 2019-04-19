const TokenKey = 'Token';

export function getToken() {
  return 'admin'; //localStorage.getItem(TokenKey);
}

export function setToken(token) {
  localStorage.setItem(TokenKey, token);
}

export function removeToken() {
  return localStorage.removeItem(TokenKey);
}
