import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Wrapper,
  loginbuttonStyle,
  headingstyle,
  CustomInput,
  BoldText,
  Registerquestion,
  Registerletter,
} from "./styles";

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
          onClick={() => {
            navigate("/");
          }}
        >
          <BoldText>로그인</BoldText>
        </button>
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
