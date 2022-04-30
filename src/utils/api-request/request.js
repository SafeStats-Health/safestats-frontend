import api from './api';
export default class Request {
  constructor(obj) {
    this.path = obj.path;
    this.params = obj.params;
    this.requestBody = obj.requestBody;
  }

  async request() {
    const args = this.path.split('_');
    const method = args[0];
    const url = args[1];

    const params = new URLSearchParams();
    for (const param in this.params) {
      params.append(param.name, param.value);
    }
    const headers = {};
    const config = { params, headers };
    (() => {
      api[method](url, this.requestBody, config);
    })();
  }
}
