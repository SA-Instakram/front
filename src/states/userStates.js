import { atom } from "recoil";

export const userInfoState = atom({
  key: "userInfoState",
  default: {
    name: "Jihun Choi",
    userId: "ji-hunc",
    description: "KMU SOFTWARE 19",
    link: "https://github.com/ji-hunc",
    article: 6,
    followers: 31,
    followings: 20,
  },
});
