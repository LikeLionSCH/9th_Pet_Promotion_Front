import React from 'react'
import SideMenu from '../../SidePanel/SideMenu';
import MainBestList from './MainBestList';
import MainPetList from './MainPetList';

export default function Main() {
    return (
        <div>
            로그인 후 메인
            {/* 베스트 사진 3장 정도 뜨는 컴포넌트  */}
            <MainBestList />
            {/* 최신순으로 사진 뜨는 거  */}
            <MainPetList />
            <SideMenu />
        </div>
    )
}
