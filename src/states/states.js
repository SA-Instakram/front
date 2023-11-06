import { atom } from "recoil";

export const commentViewClickState = atom({
  key: "commentViewClickState",
  default: false,
});

export const followListClickState = atom({
  key: "followListClickState",
  default: false,
});
