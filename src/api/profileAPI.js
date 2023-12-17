import axios from "./config";

// Access token
const accessToken =
  "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJqamhpbnUxMDA0QGdtYWlsLmNvbSIsImlhdCI6MTcwMjgyMTcwNiwiZXhwIjoxNzA0MDMxMzA2fQ.y2yo4OU2S9ylp2w9MuwdeQ1bP3tMrn4iL1mViZmeD5EP3H5cP6MZyO9gKiG5UFPbJxqbSb7WU2CV4acVPQEf_Q";

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
