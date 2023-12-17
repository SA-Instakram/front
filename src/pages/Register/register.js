import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { signUpModalState } from "../../states/states";
import { useNavigate } from "react-router-dom";
import {
  Wrapper,
  CustomInput,
  RegisterButton,
  PlaceholderText,
  InputContainer,
} from "./styles";
import SignUpModal from "../../components/Modals/signUpModal";
import userAPI from "../../api/userAPI";

export default function Registerpage() {
  const navigate = useNavigate();
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [name, setName] = useState("");
  let [instaId, setInstaId] = useState("");

  let [IsEmail, setIsEmail] = useState(false);
  let [IsPassword, setIsPassword] = useState(false);
  let [IsName, setIsName] = useState(false);
  let [IsUsername, setIsUsername] = useState(false);

  const [signUpButtonClick, setSignupButtonClick] =
    useRecoilState(signUpModalState);
  const [isRegistered, setIsRegistered] = useState(false);

  const signupRequest = () => {
    if (false) {
      alert("qwe");
    } else {
      const data = {
        email: email,
        password: password,
        instaId: instaId,
        name: name,
      };
      console.log("signupData", data);
      userAPI
        .signUp(data)
        .then((res) => {
          console.log(res);
        })
        .catch((error) => console.log(error));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); // 폼 제출 방지

    // 여기서 회원가입 처리 등을 수행하고
    // setIsRegistered(true); 와 같은 방식으로 상태 변경

    setTimeout(() => {
      setIsRegistered(true);
      setSignupButtonClick(true);
    }, 2000);
  };
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
    setInstaId(currentUsername);
    const userNameRegExp =
      /^[a-zA-Z0-9가-힣!@#$%^&*()_+{}|:"<>?~`\-=[\]\\;',./]{2,25}$/;
    if (!userNameRegExp.test(currentUsername)) {
      setIsUsername(false);
    } else {
      setIsUsername(true);
    }
  };

  return (
    <Wrapper>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <CustomInput
          placeholder="이메일"
          type="email"
          value={email}
          onChange={onEmailHandler}
          IsValid={IsEmail}
        />
        <CustomInput
          placeholder="성명"
          type="name"
          value={name}
          onChange={onNameHandler}
          IsValid={IsName}
        />
        <CustomInput
          placeholder="사용자 이름"
          type="instaId"
          value={instaId}
          onChange={onUsernameHandler}
          IsValid={IsUsername}
        />
        <CustomInput
          placeholder="비밀번호"
          type="password"
          value={password}
          onChange={onPasswordHandler}
          IsValid={IsPassword}
        />
        <RegisterButton onClick={signupRequest}>가입</RegisterButton>
        {/* {signUpButtonClick && <SignUpModal />} */}
      </form>
    </Wrapper>
  );
}
