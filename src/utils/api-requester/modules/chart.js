import api from '../api';

function getBearerHeader() {
  const token = localStorage.getItem('token');
  return { Authorization: `Bearer ${token}` };
}

export class GetChartData {
  async call(request) {
    return (async () =>
      api({
        method: 'post',
        url: 'maps/nearby-hospitals',
        data: request.body,
        headers: getBearerHeader(),
      }))();
  }
}
