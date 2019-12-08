import { userAdmin, userEditor } from '@/api/mock';

export function loginByEmail(email, password) {
  return new Promise((resolve, reject) => {
    let user = false;
    if (userEditor.email === email && userEditor.password === password) {
      user = userEditor;
    } else if (userAdmin.email === email && userAdmin.password === password) {
      user = userAdmin;
    }
    if (user) {
      return resolve({
        data: { user },
      });
    }
    return reject(new Error('Пользователь с такими учетными данными не обнаружен'));
  });
}

export function getUserInfo(token) {
  console.log(`[getUserInfo] token ${token}`);
  return new Promise((resolve, reject) => {
    if (token) {
      let user = userEditor;
      if (token === userAdmin.token) {
        user = userAdmin;
      }

      return resolve({
        data: { user },
      });
    }
    return reject(new Error('Токен пуст'));
  });
}
