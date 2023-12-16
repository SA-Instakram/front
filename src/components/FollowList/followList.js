import { useNavigate } from "react-router-dom";
import { CloseButton, Wrapper } from "./styles";
import { useRecoilState } from "recoil";
import { followListClickState } from "../../states/states";
import UserRow from "./userRow";
import { useEffect, useState } from "react";
import { userInfoState } from "../../states/userStates";
import followAPI from "../../api/followAPI";

export default function FollowList(props) {
  const navigate = useNavigate();
  const [, setFollowListClick] = useRecoilState(followListClickState);
  const [userInfo] = useRecoilState(userInfoState);
  const [followList, setFollowList] = useState([]);

  useEffect(() => {
    if (props.isFollower) {
      // follower list
      followAPI
        .getFollowerList(userInfo.userId)
        .then((res) => {
          setFollowList(res.data);
          console.log(res);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      // folling list
      followAPI
        .getFollowingList(userInfo.userId)
        .then((res) => {
          setFollowList(res.data);
          console.log(res);
        })
        .then((error) => {
          console.log(error);
        });
    }
  }, [userInfo.userId]);

  const clickExitButton = () => {
    setFollowListClick(false);
  };

  // const followList = [
  //   "Lionel Messi",
  //   "Cristiano Ronaldo",
  //   "Neymar Jr Kylian Mbappé",
  //   "Kylian Mbappé",
  //   "Sergio Ramos",
  //   "Kevin De Bruyne",
  //   "Mohamed Salah",
  //   "Harry Kane",
  //   "Erling Haaland",
  //   "Robert Lewandowski",
  //   "Luka Modrić",
  //   "Karim Benzema",
  //   "Gianluigi Buffon",
  //   "Andres Iniesta",
  //   "Xavi Hernandez",
  //   "David Beckham",
  //   "Zinedine Zidane",
  // ];

  return (
    <Wrapper>
      <div>
        <CloseButton
          src="/icons/x-circle.svg"
          onClick={() => {
            clickExitButton();
          }}
        />
        {followList.map((key, idx) => {
          return <UserRow name={key} />;
        })}
      </div>
    </Wrapper>
  );
}
