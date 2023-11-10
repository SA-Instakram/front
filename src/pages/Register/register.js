import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Wrapper,
  CustomInput,
  RegisterButton,
  PlaceholderText,
  InputContainer,
} from "./styles";

export default function Registerpage() {
  const navigate = useNavigate();
  let [Email, setEmail] = useState("");
  let [Password, setPassword] = useState("");
  let [Name, setName] = useState("");
  let [Username, setUsername] = useState("");

  let [IsEmail, setIsEmail] = useState(false);
  let [IsPassword, setIsPassword] = useState(false);
  let [IsName, setIsName] = useState(false);
  let [IsUsername, setIsUsername] = useState(false);

  const onEmailHandler = (event) => {
    const currentEmail = event.currentTarget.value;
    setEmail(currentEmail);
    const emailRegExp =
      /^[A-Za-z0-9_]+[A-Za-z0-9]*[@]{1}[A-Za-z0-9]+[A-Za-z0-9]*[.]{1}[A-Za-z]{1,3}$/;
    if (!emailRegExp.test(currentEmail)) {
      setIsEmail(false);
    } else {
      setIsEmail(true);
    }
  };
  const onPasswordHandler = (event) => {
    const currentPassword = event.currentTarget.value;
    setPassword(currentPassword);
    const passwordRegExp =
      /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{1,25}$/;
    if (!passwordRegExp.test(currentPassword)) {
      setIsPassword(false);
    } else {
      setIsPassword(true);
    }
  };
  const onNameHandler = (event) => {
    const currentName = event.currentTarget.value;
    setName(currentName);
    const nameRegExp =
      /^[a-zA-Z0-9가-힣!@#$%^&*()_+{}|:"<>?~`\-=[\]\\;',./]{0,25}$/;
    if (!nameRegExp.test(currentName)) {
      setIsName(false);
    } else {
      setIsName(true);
    }
  };
  const onUsernameHandler = (event) => {
    const currentUsername = event.currentTarget.value;
    setUsername(currentUsername);
    const userNameRegExp = /^[a-zA-z0-9]{4,12}$/;
    if (!userNameRegExp.test(currentUsername)) {
      setIsUsername(false);
    } else {
      setIsUsername(true);
    }
  };

  return (
    <Wrapper>
      <form style={{ display: "flex", flexDirection: "column" }}>
        <CustomInput
          placeholder="이메일"
          type="email"
          value={Email}
          onChange={onEmailHandler}
          IsValid={IsEmail}
        />
        <CustomInput
          placeholder="성명"
          type="name"
          value={Name}
          onChange={onNameHandler}
          IsValid={IsName}
        />
        <CustomInput
          placeholder="사용자 이름"
          type="username"
          value={Username}
          onChange={onUsernameHandler}
          IsValid={IsUsername}
        />
        <CustomInput
          placeholder="비밀번호"
          type="password"
          value={Password}
          onChange={onPasswordHandler}
          IsValid={IsPassword}
        />
        <RegisterButton
          onClick={() => {
            navigate("/profile");
          }}
        >
          가입
        </RegisterButton>
      </form>
    </Wrapper>
  );
}
