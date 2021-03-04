import React from 'react'
import MainBestList from './MainBestList';
import MainPetList from './MainPetList';
import Header from '../Header/Header';
import SideMenu from '../../SidePanel/SideMenu';


export default function Maintest() {
    return (
        <div>
            <Header />
            <SideMenu />
            <MainBestList />
            <MainPetList />
        </div>
    )
}
