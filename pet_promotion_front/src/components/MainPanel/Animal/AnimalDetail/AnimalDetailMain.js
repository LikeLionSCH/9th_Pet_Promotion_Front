import React from 'react'
import AnimalDetailProfile from './AnimalDetailProfile'
import { Link } from 'react-router-dom';
import SideMenu from '../../../SidePanel/SideMenu';
import Header from '../../../Header/Header';
export default function AnimalDetailMain() {
    return (
        <div>
            {/* <Header /> */}
            <SideMenu />
            {/* <Link to="/animalpostcreate"><button>작성</button></Link> */}
            <AnimalDetailProfile />
        </div>
    )
}
