import axios from "./config";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  signUp(data) {
    return axios.post("", data);
  },
  login(data) {
    return axios.post("", data);
  },
  logout(data) {
    return axios.post("", data);
  },
  getUser() {
    return axios.get("");
  },
};
