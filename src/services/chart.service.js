import {GetChartData} from "../utils/api-requester/modules/chart";

export default new class Chart {

  async chart(lat, lng) {
    try {
      return await new GetChartData().call({
        body: {
          lat: lat,
          lng: lng,
        },
      });
    } catch (e) {
      console.log(e);
    }
  }
}
