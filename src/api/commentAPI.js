import axios from "./config";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  postComment(data) {
    return axios.post("/comment/create", data);
  },
  modifyComment(commentId, data) {
    return axios.post(`/comment/${commentId}`, data);
  },
  deleteComment(commentId, data) {
    return axios.delete(`/comment/delete/${commentId}`, data);
  },
  getComment(postId) {
    return axios.get(`/comment/${postId}`);
  },
};
