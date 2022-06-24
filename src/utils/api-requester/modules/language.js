import api from '../api';

function getBearerHeader() {
  const token = localStorage.getItem('token');
  return { Authorization: `Bearer ${token}` };
}

export class UpdatePreferrableLanguage {
  async call(request) {
    return (async () =>
      api({
        method: 'post',
        url: 'users/update-preferrable-language',
        data: request.body,
        params: request.params,
        headers: getBearerHeader(),
      }))();
  }
}
