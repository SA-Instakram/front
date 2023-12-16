import axios from "./config";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  signUp(data) {
    return axios.post("/member/signup", data);
  },
  login(data) {
    return axios.post("/member/login", data);
  },
  getUser() {
    return axios.get("");
  },
};
