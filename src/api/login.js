import request from '@/utils/request';

export function loginByUsername(username, password) {
  const data = {
    username,
    password
  };
  return request({
    url: '/login/login',
    method: 'post',
    data
  });
}

export function logout() {
  return request({
    url: '/login/logout',
    method: 'post'
  });
}

export function getUserInfo(token) {
  console.log(`token ${token}`);
  return new Promise((resolve, reject) => {
    if (token) {
      return resolve({
        data: {
          roles: 'admin',
          name: 'admin_name',
          avatar: 'admin_avatar',
          introduction: 'admin_intro'
        }
      });
    }
    return reject(new Error('Токен пуст'));
  });
  // return request({
  //   url: '/user/info',
  //   method: 'get',
  //   params: { token }
  // });
}
