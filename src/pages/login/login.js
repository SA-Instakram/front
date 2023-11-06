import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Wrapper,loginbuttonStyle,headingstyle } from "./styles";
import './styles.css'

export default function Loginpage() {
    const navigate = useNavigate();
    let [Email, setEmail] = useState("");
    let [Password, setPassword] = useState("");
    const onEmailHandler = (event) => {
        setEmail(event.currentTarget.value);
    }
    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value);
    }
    
    return (
        <Wrapper>
            <form style={{ display: 'flex', flexDirection: 'column'}}
            >
                <h1 style={headingstyle}>Instakram</h1>
                <label>Email</label>
                <input placeholder="전화번호 사용자 이름 또는 이메일" type='email' className='customInput' value={Email} onChange={onEmailHandler}/>
                <label>Password</label>
                <input placeholder="비밀번호" type='password' className='customInput' value={Password} onChange={onPasswordHandler}/>
                <br />
                <button style={loginbuttonStyle} 
                    onClick={() => {
                    navigate("/");
                }}>
                    <p className="bold-text">
                    로그인
                    </p>
                </button>
            </form>
        </Wrapper>
    )
}

