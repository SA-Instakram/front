import { useEffect, useState } from "react";
import Header from "../../components/Header/header";
import { Wrapper, EditButton } from "./styles";
import FollowList from "../../components/FollowList/followList";
import LogoutModal from "../../components/Modals/logoutModal";
import { useRecoilState } from "recoil";
import {
  followListClickState,
  followerListClickState,
  followingListClickState,
  logoutModalState,
} from "../../states/states";
import { userInfoState } from "../../states/userStates";
import { useNavigate, useParams } from "react-router-dom";
import profileAPI from "../../api/profileAPI";

export default function Profile() {
  const [followerListClick, setFollowerListClick] = useRecoilState(
    followerListClickState
  );
  const [followingListClick, setFollowingListClick] = useRecoilState(
    followingListClickState
  );
  const [logoutButtonClick, setLogoutButtonClick] =
    useRecoilState(logoutModalState);
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);
  const [profileInfo, setProfileInfo] = useState();
  const { userId } = useParams();

  useEffect(() => {
    console.log(userId);
    profileAPI
      .getProfile(userId)
      .then((res) => {
        console.log("profile", res.data);
        setProfileInfo(res.data);
      })
      .then((error) => console.log(error));

    setProfileInfo({
      userId: "userId",
      name: "name",
      description: "description",
      link: "link",
      article: 1,
      followers: 2,
      followings: 3,
    });
  }, []);

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
      {profileInfo ? (
        <div>
          <Header />
          {followerListClick ? <FollowList isFollower={true} /> : null}
          {followingListClick ? <FollowList isFollower={false} /> : null}
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
                <label>{profileInfo.userId}</label>
                <div style={{ display: "flex", gap: "10px" }}>
                  <EditButton
                    onClick={() => {
                      navigate("/editprofile");
                    }}
                  >
                    프로필 편집
                  </EditButton>
                  <EditButton
                    onClick={() => {
                      setLogoutButtonClick(true);
                    }}
                  >
                    로그아웃
                  </EditButton>
                  {logoutButtonClick ? <LogoutModal /> : null}
                </div>
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
              <label>{profileInfo.name}</label>
              <label>{profileInfo.description}</label>
              <a href={profileInfo.link}>{profileInfo.link}</a>
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
              <label>{profileInfo.article}</label>
            </div>
            <div
              style={{ display: "flex", flexDirection: "column" }}
              onClick={() => {
                setFollowerListClick(true);
              }}
            >
              <label>팔로워</label>
              <label>{profileInfo.followers}</label>
            </div>
            <div
              style={{ display: "flex", flexDirection: "column" }}
              onClick={() => {
                setFollowingListClick(true);
              }}
            >
              <label>팔로우</label>
              <label>{profileInfo.followings}</label>
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
        </div>
      ) : null}
    </Wrapper>
  );
}
