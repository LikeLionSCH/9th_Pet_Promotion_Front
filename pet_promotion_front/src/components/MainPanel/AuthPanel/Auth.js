import React from 'react';
import LoginInput from './LoginInput';
import styled from 'styled-components'
import Logo from '../../assets/Images/logo-regular.png'

const LogoImg=styled.div`
    background: url(${Logo}) center center no-repeat;
    position: fixed;
    // top: 10px;
    bottom: 430px;
    right: 450px;
    width: 600px;
    height: 100px;
    background-size: contain;
    // z-index: 400;
        
    `;

const AuthDiv= styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100%vh;
    `;


const Auth = () => {
    return (
        <AuthDiv>
            <LogoImg />
            <LoginInput />
        </AuthDiv>
    );
}

export default Auth;
