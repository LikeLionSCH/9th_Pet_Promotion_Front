import React from 'react'
import styled from 'styled-components';



const CommentDiv = styled.div`
    
`


const CommentTitle = styled.span`
    font-family: 'IBMPlexSansKR-Regular';
    font-size: 30px;
`

const CommentWriter = styled.span`
    font-family: 'IBMPlexSansKR-Regular';
    font-size: 20px;
`

const CommentBody = styled.span`
    font-family: 'IBMPlexSansKR-Light';
    font-size: 18px;
`

const CommentInput = styled.input`
    width: 1000px;
    font-family: 'IBMPlexSansKR-Regular';
    font-size: 25px;
    border-style: none;
    border-bottom: 1px solid #646464;
    color: black;
    margin: 0 3vh;
    &:focus{
        border-style:none;
    }    
`

const CommentBtn = styled.button`
    font-family: 'IBMPlexSansKR-Medium';
    border-style: none;
    font-size: 25px;
    background-color: white;
    &:hover{
        cursor: pointer;
        background-color: lightgrey;
    }
    border-radius: 5px;

    `

export default function AnimalPostComment() {
    return (
        <CommentDiv>
            <p style={{textAlign:"left"}}>
                <CommentTitle>댓글</CommentTitle>
            </p>
            <p style={{textAlign:"left"}}>
                <CommentWriter>유민</CommentWriter>
                <CommentBody>너무너무 귀여워염</CommentBody>
            </p>
            <CommentInput />
            <CommentBtn>작성</CommentBtn>
            
        </CommentDiv>
    )
}
