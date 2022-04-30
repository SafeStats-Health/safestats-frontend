import Request from './request';

export class CreateUser {
  path = 'post_user';
  constructor(obj) {
    this.requestObj = new Request({ ...obj, path: this.path });
  }
  async request() {
    await this.requestObj.request();
  }
}
