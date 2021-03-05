import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Pic from '../../assets/Images/dobu.jpg'

const BestPicDiv= styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding-top: 7vh;
    `;

const BestPic =styled.div`
    background: url(${Pic}) no-repeat;
    height: 200px;
    width: 200px;
    border-radius: 250px;
    background-size: cover;
    margin: 3vh 4vh;
    `;

const BestPicName = styled.p`
    text-align: center;
    font-family: 'IBMPlexSansKR-Regular';
    /* color: white; */
    font-size: 25px;
    margin-bottom: 6vh ;

    `;

export default function MainBestList() {
    return (
        <div>
            <BestPicDiv>
                <div>
                    <BestPic />
                    <BestPicName>두부</BestPicName>
                </div>
                <div>
                    <BestPic />
                    <BestPicName>두부</BestPicName>
                </div>
                <div>
                    <BestPic />
                    <BestPicName>두부</BestPicName>
                </div>                
            </BestPicDiv> 
        </div>
    )
}
