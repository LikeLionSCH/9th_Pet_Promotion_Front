import React from 'react'
import styled from 'styled-components';
import {InputStyle}  from '../../AuthPanel/LoginInput';


const CommentDiv = styled.div`
    
`


const CommentTitle = styled.span`
    font-family: 'Regular';
    font-size: 30px;
`

const CommentWriter = styled.span`
    font-family: 'Regular';
    font-size: 20px;
`

const CommentBody = styled.span`
    font-size: 18px;
`
const CommentContainer = styled.div`
    margin: 2.5vh 0;
    text-align: ${props => props.textAlign};
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
            <CommentContainer textAlign='left'>
                <CommentTitle>댓글</CommentTitle>
            </CommentContainer>
            <CommentContainer textAlign='left'>
                <CommentWriter>유민</CommentWriter>
                <CommentBody>너무너무 귀여워염</CommentBody>
            </CommentContainer>
            <InputStyle Width='800px'/>
            <CommentBtn>작성</CommentBtn>
            
        </CommentDiv>
    )
}
