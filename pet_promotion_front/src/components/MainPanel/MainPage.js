import React from 'react';
import Auth from './AuthPanel/Auth';
import MainPetList from './MainList/MainPetList';

const MainPage = () => {
    return (
        <div>
            {/* 로그인 안 했을 시 표시 */}
            <Auth />

            {/* ----------------- 경계선 ----------------- */}

            {/* 로그인 했을 시 표시 */}
            <MainPetList />
        </div>
    );
}

export default MainPage;
