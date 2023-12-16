import axios from "./config";

// Access token
const accessToken =
  "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJnZWVob29uNjIwMTdAZ21haWwuY29tIiwiaWF0IjoxNzAyNzMxMzUwLCJleHAiOjE3MDI4MDMzNTB9.bb1-_Y0u6g6sHC_9qkQHohBBY7LiC4gjIb_ISiYMoZF2Ulf8K3Mji9Kt5cKB-UuRaGsOJvN5ofW8NPhjMf8p-g";

// Axios 전역 설정
// axios.defaults.headers.common["Authorization"] = `${accessToken}`;

// const accessToken = "your_access_token_here";

// Axios 인스턴스 생성
const axiosWithToken = axios.create({
  headers: {
    Authorization: `Bearer ${accessToken}`,
    "Content-Type": "application/json",
  },
});

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getProfile(userName) {
    return axiosWithToken.get(`/profile/${userName}`);
  },
  editProfile(data) {
    return axiosWithToken.post("/profile/edit", data);
  },
};
