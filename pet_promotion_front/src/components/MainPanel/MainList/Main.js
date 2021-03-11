import React from 'react'
import {useSelector} from 'react-redux';
import SideMenu from '../../SidePanel/SideMenu';
import Auth from '../AuthPanel/Auth';
import MainBestList from './MainBestList';
import MainPetList from './MainPetList';
import "../../assets/css/style.css";
import Header from '../../Header/Header';
import styled from 'styled-components';

const Test = styled.div`
    @media screen and (min-width: 768px) {
        display: none;
    }`


export default function Main() {
    // 리덕스
    // dispatch, selector
    const auth = useSelector(state => state.auth.currentAuth) // 저장 된 Redux State을 가져온다.

    return (
        <div>
            { 
            <>
                {/* 베스트 사진 3장 정도 뜨는 컴포넌트  */} 
                <Test>
                    <SideMenu />
                </Test>
                <MainBestList />
                <MainPetList />
            </>
            }
        </div>
    )
}
