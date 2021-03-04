import React from 'react';
import LoginInput from './LoginInput';
import styled from 'styled-components'
import Logo from '../../assets/Images/logo-regular.png'

const LogoImg=styled.div`
    background: url(${Logo}) center center no-repeat;
    width: 300px;
    height: 200px;
    background-size: contain;
    margin-bottom: 2vh;
    background-size: contain;
    // z-index: 400;
        
    `;

const AuthDiv= styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100%;
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
