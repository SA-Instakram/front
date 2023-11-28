import { useRecoilState } from "recoil";
import { logoutModalState } from "../../states/states";
import { useNavigate } from "react-router-dom";
import { Wrapper } from "./loginstyles";

export default function LogoutModal() {
  const [, setLogoutButtonClick] = useRecoilState(logoutModalState);
  const navigate = useNavigate();

  return (
    <Wrapper>
      <div>
        <label>정말 로그아웃 하시겠습니까?</label>
        <div></div>
        <label
          onClick={() => {
            setLogoutButtonClick(false);
            navigate("/login");
          }}
        >
          확인
        </label>
      </div>
    </Wrapper>
  );
}
