import { useRecoilState } from "recoil";
import { loginModalState } from "../../states/states";
import { useNavigate } from "react-router-dom";
import { Wrapper } from "./loginstyles";

export default function LoginModal() {
  const [, setLoginButtonClick] = useRecoilState(loginModalState);
  const navigate = useNavigate();

  return (
    <Wrapper>
      <div>
        <label>로그인 성공</label>
        <div></div>
        <label
          onClick={() => {
            setLoginButtonClick(false);
            navigate("/");
          }}
        >
          확인
        </label>
      </div>
    </Wrapper>
  );
}
