import {LoginUser} from "../utils/api-requester/modules/user";

export default new class Auth {

  async loginUser(email, password) {
    try {
      return await new LoginUser().call({
        body: {
          email: email,
          password: password,
        },
      });
    } catch (e) {
      console.log(e);
    }
  }


}
