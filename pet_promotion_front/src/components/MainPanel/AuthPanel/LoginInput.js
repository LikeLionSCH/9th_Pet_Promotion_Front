import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { UserLogin } from '../../../Api/UserApi';
import { setCurrentAuth } from '../../../redux/actions/auth_action';
import styled from 'styled-components';

const LoginDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center
    `;

export const InputStyle = styled.input`
    width: ${props => props.Width};
    height: 30px;
    font-family: 'IBMPlexSansKR-Regular';
    font-size: 20px;
    border-style: none;
    border-bottom: 1px solid black;
    color: black;
    margin: 2vh;
    padding: 10px;
    &:focus{
        border-style:none;
    }
    display: block;
`;

const LoginBtn = styled.button`
    font-family: 'IBMPlexSansKR-Medium';
    border-style: none;
    font-size: 25px;
    background-color: white;
    border: 1px solid lightgrey;
    margin-top: 5vh;
    &:hover{
        cursor: pointer;
        color: #494949;
        transition: .3s;
        color: white;
        background-color: #0093FF;
    }

    width: 320px;
    height: 50px;
    border-radius: 5px;
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
                <InputStyle Width='300px' value={Username} onChange={(e)=>SetUsername(e.target.value)} placeholder="아이디를 입력하세요."></InputStyle>
                <InputStyle Width='300px' type="password" value={Password} onChange={(e)=>SetPassword(e.target.value)} placeholder="비밀번호를 입력하세요."></InputStyle>
                <LoginBtn onClick={handleUserLogin}>로그인</LoginBtn>
        </LoginDiv>
    )
}
