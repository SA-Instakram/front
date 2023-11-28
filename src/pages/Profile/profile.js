import { useState } from "react";
import Header from "../../components/Header/header";
import { Wrapper } from "./styles";
import FollowList from "../../components/FollowList/followList";
import { useRecoilState } from "recoil";
import { followListClickState } from "../../states/states";
import { userInfoState } from "../../states/userStates";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const [followListClick, setFollowListClick] =
    useRecoilState(followListClickState);
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);

  const images = [
    "vava.jpeg",
    "vava1.jpeg",
    "vava2.jpeg",
    "vava.jpeg",
    "vava1.jpeg",
    "vava2.jpeg",
  ];
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Header />
      {followListClick ? <FollowList /> : null}
      <div style={{ padding: "16px" }}>
        <div style={{ display: "flex" }}>
          <img
            width="80px"
            height="80px"
            src="/images/default_profile.jpeg"
            alt="profile"
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginLeft: "30px",
              justifyContent: "center",
              alignItems: "start",
            }}
          >
            <label>{userInfo.userId}</label>
            <button
              style={{ marginTop: "10px" }}
              onClick={() => {
                navigate("/editprofile");
              }}
            >
              프로필 편집 or 팔로우
            </button>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "30px",
            alignItems: "start",
          }}
        >
          <label>{userInfo.name}</label>
          <label>{userInfo.description}</label>
          <a href={userInfo.link}>{userInfo.link}</a>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          marginTop: "20px",
          justifyContent: "space-around",
          borderTop: "1.4px solid #dbdbdb",
          borderBottom: " 1.4px solid #dbdbdb",
          padding: "12px",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label>게시물</label>
          <label>{userInfo.article}</label>
        </div>
        <div
          style={{ display: "flex", flexDirection: "column" }}
          onClick={() => {
            setFollowListClick(true);
          }}
        >
          <label>팔로워</label>
          <label>{userInfo.followers}</label>
        </div>
        <div
          style={{ display: "flex", flexDirection: "column" }}
          onClick={() => {
            setFollowListClick(true);
          }}
        >
          <label>팔로우</label>
          <label>{userInfo.followings}</label>
        </div>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(110px, 1fr))",
          gridGap: "10px",
        }}
      >
        {images.map((key, idx) => {
          return <img width={110} src={`/images/${key}`} />;
        })}
      </div>
    </Wrapper>
  );
}
