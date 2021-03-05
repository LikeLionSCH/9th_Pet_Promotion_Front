import React from 'react'
import MainBestList from './MainBestList';
import MainPetList from './MainPetList';
import Header from '../../Header/Header';
import SideMenu from '../../SidePanel/SideMenu';
import styled from 'styled-components';
import Test from '../../assets/Images/test2.jpg';

const BackDiv = styled.div`
    position: fixed;
    top: 0; 
    left: 0;
    bottom: 0;
    right: 0;
    background: url(${Test}) no-repeat;
    background-size: cover;
    z-index: -1;
    `;


export default function Maintest() {
    return (
        <div>
            {/* <BackDiv /> */}
            <SideMenu />
            <MainBestList />
            <MainPetList />
        </div>
    )
}
