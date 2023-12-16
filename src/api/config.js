import axios from "axios";

export const getBaseURL = () => {
  if (process.env.NODE_ENV === "development") {
    return process.env.REACT_APP_LOCAL_DOMAIN;
  } else if (process.env.NODE_ENV === "production") {
    return process.env.REACT_APP_DOMAIN;
  }
};

axios.defaults.baseURL = getBaseURL();

export default axios;
