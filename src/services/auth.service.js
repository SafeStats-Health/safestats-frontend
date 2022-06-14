import {CreateUser, LoginUser} from "../utils/api-requester/modules/user";

export default new class Auth {

  async createUser(name, email, password, confirmPassword) {
    try {
      return await new CreateUser().call({
        body: {
          name: name,
          email: email,
          password: password,
          confirmPassword: confirmPassword
        }
      })
    } catch (e) {
      console.log(e);
    }
  }

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
