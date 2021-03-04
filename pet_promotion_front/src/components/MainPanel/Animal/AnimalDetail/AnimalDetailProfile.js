import React from 'react'
import styled from 'styled-components'
import Profile from '../../../assets/Images/doobu2.jpg';

const ProfileDiv =styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    width: 1100px;
    height: 400px;
    `

const ProfilePic = styled.div `
    margin: 0 auto;
    background: url(${Profile}) no-repeat;
    height: 180px;
    width: 180px;
    border-radius: 50%;
    background-size: cover;
    `;

const ProfileName = styled.p`
    /* text-align: center; */
    font-family: 'IBMPlexSansKR-Regular';
    font-size: 25px;
    margin: 10px;
    `;

const ProfileDiv2 = styled.div`
    width: 500px;
    display: flex;
    flex-direction: column;
    flex: 1 1;
    /* align-items: center; */
    `;

const Tmip = styled.p `
    margin: 1vh 0;
    `;

const TmiTitle = styled.span`
    font-family: 'IBMPlexSansKR-Regular';
    font-size: 25px;
    display: block;
    width: 200px;
    float: left ;
    
    `;

const ProfileContainer = styled.div`
    text-align: center;
    flex: 1 1;
    `;

const Tmibody = styled.span`
    font-family: 'IBMPlexSansKR-Light';
    font-size: 22px;
    display: inline-block;

    `;

export default function AnimalDetailProfile() {
    return (
            <ProfileDiv>
                <ProfileContainer>
                    <ProfilePic />
                    <ProfileName>
                        두부
                    </ProfileName>
                </ProfileContainer>
                <ProfileDiv2>
                    <Tmip>
                        <TmiTitle>생년월일</TmiTitle>
                        <Tmibody>2000.07.08</Tmibody>
                    </Tmip>
                    <Tmip>
                        <TmiTitle>나이</TmiTitle>
                        <Tmibody>22살</Tmibody>   
                    </Tmip>
                    <Tmip>
                        <TmiTitle>좋아하는 간식</TmiTitle>
                        <Tmibody>캔디바</Tmibody>   
                    </Tmip>
                </ProfileDiv2>
            </ProfileDiv>
    )
}
