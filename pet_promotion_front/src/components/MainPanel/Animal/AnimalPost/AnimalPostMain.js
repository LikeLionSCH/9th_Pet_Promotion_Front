import React from 'react'
import AnimalPostDetail from './AnimalPostDetail'
import AnimalPostComment from './AnimalPostComment'
export default function AnimalPostMain() {
    return (
        <div>
            <h1>게시글 메인 컴포넌트 .</h1>
            <AnimalPostDetail />
            <AnimalPostComment />
            
        </div>
    )
}
