import api from '../api';

export class SendRecoverPasswordEmail {
  async call(request) {
    return (async () =>
      api({
        method: 'post',
        url: 'users/request-password-recover',
        data: request.body,
        params: request.params,
      }))();
  }
}

export class RecoverPassword {
  async call(request) {
    return (async () =>
      api({
        method: 'post',
        url: 'users/update-password-recover',
        data: request.body,
        params: request.params,
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
