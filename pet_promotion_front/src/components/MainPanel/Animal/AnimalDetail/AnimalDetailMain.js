import React from 'react'
import AnimalDetailProfile from './AnimalDetailProfile'
import { Link } from 'react-router-dom';

export default function AnimalDetailMain() {
    return (
        <div>
            애기 프로필 , 게시글 등 보이는 컴포넌트. 
            {/* 애기 기본 정보  */}
            <Link to="/animalpostcreate"><button>작성</button></Link>
            <AnimalDetailProfile />
        </div>
    )
}
