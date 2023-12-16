import { atom } from "recoil";

export const userInfoState = atom({
  key: "userInfoState",
  default: {
    name: "Jihun Choi",
    userId: "ji-hunc",
    article: 6,
    followers: 31,
    followings: 20,
  },
});
