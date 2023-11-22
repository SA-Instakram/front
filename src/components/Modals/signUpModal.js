import { useRecoilState } from "recoil";
import { signUpModalState } from "../../states/states";
import { useNavigate } from "react-router-dom";
import { Wrapper } from "./styles";

export default function SignUpModal() {
  const [, setSignupButtonClick] = useRecoilState(signUpModalState);
  const navigate = useNavigate();

  return (
    <Wrapper>
      <div>
        <label>회원가입 성공</label>
        <div></div>
        <label
          onClick={() => {
            setSignupButtonClick(false);
            navigate("/login");
          }}
        >
          확인
        </label>
      </div>
    </Wrapper>
  );
}
