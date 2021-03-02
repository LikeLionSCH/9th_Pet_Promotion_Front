import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
    return (
        <LoginDiv>
            <InputStyle placeholder="아이디를 입력하세요."></InputStyle>
            <InputStyle placeholder="비밀번호를 입력하세요."></InputStyle>
            <Link to="/"><LoginBtn>로그인</LoginBtn></Link>
        </LoginDiv>
    )
}
