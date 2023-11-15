import { atom } from "recoil";

export const commentViewClickState = atom({
  key: "commentViewClickState",
  default: false,
});

export const followListClickState = atom({
  key: "followListClickState",
  default: false,
});

export const feedMoreButtonClickState = atom({
  key: "feedMoreButtonClickState",
  default: false,
});
