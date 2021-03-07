import React from 'react';
import styled from 'styled-components';
import pic from '../../../assets/Images/dobu.jpg'

const PetPic=styled.div`
    background: url(${pic}) center center no-repeat;
    width: 100%;
    height: 300px;
    background-size: contain;
    margin: 3vh 0 ;
    `;


const PostTitle = styled.span`
    font-family: 'Bold';
    font-size: 35px;
`
const PostDate = styled.span`
    font-size: 20px;
`

const PostBody = styled.p`
    width: 800px;
    height: auto;
    min-height: 120px;
    font-size: 20px;
`


export default function AnimalPostDetail() {
    return (
        <div>
            <PostTitle>맘마 먹는 우리 두부</PostTitle>
            <PostDate>2021.03.03</PostDate>
            <PetPic />
            <PostBody>
                세상에 우리 두부가 맘마를 먹었어요 정말 귀엽죠? 
                우리 두부 최고최고 
                룰루랄ㄹ로 두부 보고 싶다 강아지들 다 행복해야해 
            </PostBody>
        </div>
    )
}
