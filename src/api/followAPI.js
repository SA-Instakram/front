import axios from "./config";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  followOther(data) {
    return axios.post("/follow", data);
  },
  getFollowerList(userName) {
    return axios.get(`/follow/followerlist/${userName}`);
  },
  getFollowingList(userName) {
    return axios.get(`/follow/followinglist/${userName}`);
  },
};
