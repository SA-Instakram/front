import { useNavigate } from "react-router-dom";
import { Wrapper } from "./styles";
import { userInfoState } from "../../states/userStates";
import { useRecoilState } from "recoil";

export default function Header() {
  const navigate = useNavigate();
  const [userInfo] = useRecoilState(userInfoState);

  return (
    <Wrapper>
      <h1
        style={{ marginLeft: "16px" }}
        onClick={() => {
          navigate("/");
        }}
      >
        Instakram
      </h1>
      <div style={{ marginRight: "16px" }}>
        <img src={"/icons/search.svg"} alt="search icon"></img>
        <img
          src={"/icons/plus-square.svg"}
          onClick={() => {
            navigate("/newfeed");
          }}
          alt="newfeed icon"
        />
        <img
          src={"/icons/user.svg"}
          onClick={() => {
            navigate(`/profile/${userInfo.userId}`);
          }}
          alt="user icon"
        />
      </div>
    </Wrapper>
  );
}
