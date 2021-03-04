import React from 'react'
import styled from 'styled-components';
import AnimalPostDetail from './AnimalPostDetail'
import AnimalPostComment from './AnimalPostComment'
import SideMenu from '../../../SidePanel/SideMenu';

const AnimalMainContainer = styled.div`
    display: flex;
    height: 100vh;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;


export default function AnimalPostMain() {
    return (
        <div>
            <AnimalMainContainer>
                <AnimalPostDetail />
                <AnimalPostComment />
            </AnimalMainContainer>
        </div>
    )
}
