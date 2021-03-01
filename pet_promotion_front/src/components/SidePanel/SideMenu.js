import React from 'react';
import { Link } from 'react-router-dom';

const SideMenu = () => {
    return (
        <div>
            사이드 메뉴
            <Link to="/animaldetailmain"><p>토리</p></Link>
            <Link to="/animaldetailmain"><p>토리</p></Link>
            <Link to="/animaldetailmain"><p>토리</p></Link>
            
        </div>
    );
}

export default SideMenu;
