import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import { loginModalState } from "../../states/states";
import {
  Wrapper,
  loginbuttonStyle,
  headingstyle,
  CustomInput,
  BoldText,
  Registerquestion,
  Registerletter,
} from "./styles";
import LoginModal from "../../components/Modals/loginModal";

export default function Loginpage() {
  const navigate = useNavigate();
  let [Email, setEmail] = useState("");
  let [Password, setPassword] = useState("");
  const onEmailHandler = (event) => {
    setEmail(event.currentTarget.value);
  };
  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value);
  };
  const [LoginButtonClick, setLoginButtonClick] =
    useRecoilState(loginModalState);

  return (
    <Wrapper>
      <form style={{ display: "flex", flexDirection: "column" }}>
        <h1 style={headingstyle}>Instakram</h1>
        <label>Email</label>
        <CustomInput
          placeholder="전화번호 사용자 이름 또는 이메일"
          type="email"
          value={Email}
          onChange={onEmailHandler}
        />
        <label>Password</label>
        <CustomInput
          placeholder="비밀번호"
          type="password"
          value={Password}
          onChange={onPasswordHandler}
        />
        <br />
        <button
          style={loginbuttonStyle}
          onClick={(event) => {
            event.preventDefault();
            setLoginButtonClick(true);
          }}
        >
          <BoldText>로그인</BoldText>
        </button>
        {LoginButtonClick ? <LoginModal /> : null}
        <Registerquestion>
          계정이 없으신가요?
          <Registerletter
            onClick={() => {
              navigate("/register");
            }}
          >
            가입
          </Registerletter>
        </Registerquestion>
      </form>
    </Wrapper>
  );
}
