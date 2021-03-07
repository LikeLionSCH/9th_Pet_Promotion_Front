import React from 'react';
import styled from'styled-components';
import {slide as Menu} from 'react-burger-menu';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const SideMenu = () => {

    const MenuItem = styled(AnchorLink)`
        color: white;
        font-size: 25px;
        text-align: center;
        margin-bottom: 20px;
        font-family: 'Regular';
    `;

    return (
        <Menu left>
            <MenuItem href="">토리</MenuItem>
            <MenuItem href="">봄이</MenuItem>
            <MenuItem href="">옹이</MenuItem>
            <MenuItem href="">단추</MenuItem>
            <MenuItem href="">땅콩</MenuItem>
            <MenuItem href="">두부</MenuItem>
        </Menu>
    );
}

export default SideMenu;