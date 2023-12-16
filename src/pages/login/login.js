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
import userAPI from "../../api/userAPI";
import { userInfoState } from "../../states/userStates";

export default function Loginpage() {
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);

  const navigate = useNavigate();
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  const onEmailHandler = (event) => {
    setEmail(event.currentTarget.value);
  };
  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value);
  };
  const [LoginButtonClick, setLoginButtonClick] =
    useRecoilState(loginModalState);

  const loginRequest = () => {
    const data = {
      email: email,
      password: password,
    };

    // default: {
    //   name: "Jihun Choi",
    //   userId: "ji-hunc",
    //   article: 6,
    //   followers: 31,
    //   followings: 20,
    // },
    console.log("loginData", data);
    userAPI
      .login(data)
      .then((res) => {
        setUserInfo({
          name: res.data.name,
          userId: res.data.userId,
          article: res.data.article,
          followers: res.data.followers,
          followings: res.data.followings,
        });
        console.log("loginResponse", res);
      })
      .catch((error) => console.log(error));
  };

  return (
    <Wrapper>
      <form style={{ display: "flex", flexDirection: "column" }}>
        <h1 style={headingstyle}>Instakram</h1>
        <label>Email</label>
        <CustomInput
          placeholder="전화번호 사용자 이름 또는 이메일"
          type="email"
          value={email}
          onChange={onEmailHandler}
        />
        <label>Password</label>
        <CustomInput
          placeholder="비밀번호"
          type="password"
          value={password}
          onChange={onPasswordHandler}
        />
        <br />
        <button
          style={loginbuttonStyle}
          onClick={(event) => {
            event.preventDefault();
            loginRequest();

            // setLoginButtonClick(true);
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
