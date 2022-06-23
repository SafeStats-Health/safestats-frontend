import api from '../api';

export class FetchNearbyHospitals {
  method = 'post';
  url = '/maps/nearby-hospitals';
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