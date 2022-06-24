import api from '../api';

function getBearerHeader() {
  const token = localStorage.getItem('token');
  return { Authorization: `Bearer ${token}` };
}

export class DeleteUser {
  async call(request) {
    return (async () =>
      api({
        method: 'post',
        url: 'users/delete-user',
        data: request.body,
        params: request.params,
        headers: getBearerHeader(),
      }))();
  }
}

export class SendRecoverPasswordEmail {
  async call(request) {
    return (async () =>
      api({
        method: 'post',
        url: 'users/request-password-recover',
        data: request.body,
        params: request.params,
        headers: getBearerHeader(),
      }))();
  }
}

export class RecoverPassword {
  async call(request) {
    return (async () =>
      api({
        method: 'post',
        url: 'users/update-password-token',
        data: request.body,
        params: request.params,
        headers: request.headers,
      }))();
  }
}

export class CreateUser {
  async call(request) {
    return (async () =>
      api({
        method: 'post',
        url: 'users/register',
        data: request.body,
        params: request.params,
      }))();
  }
}

export class LoginUser {
  async call(request) {
    return (async () =>
      api({
        method: 'post',
        url: 'users/login',
        data: request.body,
        params: request.params,
      }))();
  }
}