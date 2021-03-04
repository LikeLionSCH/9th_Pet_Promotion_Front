import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Pic2 from '../../assets/Images/doobu2.jpg';


const RecentDiv = styled.div`
    width: 900px;
    margin: 0 auto;
    `;

const RecentTitle = styled.p`
    font-family: 'IBMPlexSansKR-Regular';
    font-size: 22px;
    display: block;
    width: 1000px;
    margin-left: 2vh;
    `;

const RecentPicDiv = styled.div`
    display: flex; 
    flex-wrap: wrap;
    width: 1000px;
    `;

const RecentPic = styled.div`
    background: url(${Pic2}) no-repeat;
    width: 220px;
    height: 220px;
    background-size: cover;
    margin: 4vh 2vh 2vh 2vh;
    border-radius: 6px;
    `;

const RecentPicTitle = styled.p`
    font-family: 'IBMPlexSansKR-Light';
    font-size: 20px;
    text-align: center;
`;


const MainPetList = () => {
    return (
        <RecentDiv>
            <RecentTitle>최근에 올라온 사진</RecentTitle>
            <RecentPicDiv>
                <div>
                    <RecentPic />
                    <RecentPicTitle>두부</RecentPicTitle>
                </div>
                <div>
                    <RecentPic />
                    <RecentPicTitle>두부</RecentPicTitle>
                </div>
                <div>
                    <RecentPic />
                    <RecentPicTitle>두부</RecentPicTitle>
                </div>
                <div>
                    <RecentPic />
                    <RecentPicTitle>두부</RecentPicTitle>
                </div>
                <div>
                    <RecentPic />
                    <RecentPicTitle>두부</RecentPicTitle>
                </div>
                <div>
                    <RecentPic />
                    <RecentPicTitle>두부</RecentPicTitle>
                </div>
            </RecentPicDiv>
        </RecentDiv>
    );
}

export default MainPetList;
