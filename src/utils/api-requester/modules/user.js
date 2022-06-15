import api from '../api';

export class CreateUser {
  method = 'post';
  url = 'users/register';
  async call(request) {
    return (async () =>
      api({
        method: 'post',
        url: this.url,
        data: request.body,
        params: request.params,
      }))();
  }
}

export class LoginUser {
  method = 'post';
  url = 'users/login';
  async call(request) {
    return (async () =>
      api({
        method: 'post',
        url: this.url,
        data: request.body,
        params: request.params,
      }))();
  }
}
