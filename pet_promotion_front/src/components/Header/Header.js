import React from 'react'
import styled from 'styled-components'
import SideMenu from '../SidePanel/SideMenu'
const TestDiv = styled.div`
    top: 0;
    left: 0; 
    right: 0; 
    height: 60px;
    width: 100%; 
    background-color: lightgrey;
    font-size: 30px;
    text-align: center;
    position: fixed;
`;

export default function Header() {
    return (
        <div>
            <TestDiv>
            </TestDiv>
        </div>
    )
}
