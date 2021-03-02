import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { UserLogin } from '../../../Api/UserApi';
import { setCurrentAuth } from '../../../redux/actions/auth_action';
import styled from 'styled-components';

const LoginDiv = styled.div`
    width: 800px;
    height: 50px;
    `;

const InputStyle = styled.input`
    width: 280px;
    font-family: 'IBMPlexSansKR-Regular';
    font-size: 25px;
    border-style: none;
    border-bottom: 1px solid black;
    color: black;
    margin: 0 3vh;
    &:focus{
        border-style:none;
    }
`;

const LoginBtn = styled.button`
    font-family: 'IBMPlexSansKR-Medium';
    border-style: none;
    font-size: 25px;
    background-color: white;
    &:hover{
        cursor: pointer;
        background-color: lightgrey;
    }
`;
    


export default function LoginInput() {
    
    const [Username,SetUsername] = useState("");
    const [Password, SetPassword] = useState("");
    const dispatch = useDispatch();

    const handleUserLogin = async () => {
        try {
            // API 호출 (UserLogin), 비동기
            // await를 통해 나온 결과 값은 Response(응답 값) 반환
            const UserToken = await UserLogin(Username, Password); 
            dispatch(setCurrentAuth(UserToken.data.token)) // Dispatch : Redux State 값을 넣는다
        } catch(err) {
            console.log(err)
        }
    }

    return (
        <LoginDiv>
            <InputStyle value={Username} onChange={(e)=>SetUsername(e.target.value)} placeholder="아이디를 입력하세요."></InputStyle>
            <InputStyle type="password" value={Password} onChange={(e)=>SetPassword(e.target.value)} placeholder="비밀번호를 입력하세요."></InputStyle>
            <LoginBtn onClick={handleUserLogin}>로그인</LoginBtn>
        </LoginDiv>
    )
}
