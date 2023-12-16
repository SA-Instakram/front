import axios from "./config";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  requestPost(data) {
    return axios.post("/post/create", data);
  },
  getPosts() {
    return axios.get("/post/allpost");
  },
  getPost(postId) {
    return axios.get(`/post/${postId}`);
  },
  deletePost(postId) {
    return axios.delete(`/post/delete/${postId}`);
  },
  modifyPost(postId, data) {
    return axios.post(`/post/modify/${postId}`, data);
  },
};
