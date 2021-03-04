import React from 'react'
import AnimalDetailProfile from './AnimalDetailProfile'
import { Link } from 'react-router-dom';
import SideMenu from '../../../SidePanel/SideMenu';

export default function AnimalDetailMain() {
    return (
        <div>
            <SideMenu />
            {/* <Link to="/animalpostcreate"><button>작성</button></Link> */}
            <AnimalDetailProfile />
        </div>
    )
}
