import React from 'react';
import styled from 'styled-components';


type SkillPropsType = {
    title: string
    spanTitle: string
    text:string
}

export const Skill = (props:SkillPropsType) => {
    return (
        
        <StyledSkill>
                <SkillNumber>{props.spanTitle}</SkillNumber>                                        
            <SpanNumber>
                <SkillTitle>{props.title}</SkillTitle>
                <SkillText>{props.text}</SkillText>  
            </SpanNumber>
        </StyledSkill>
        
    );
};

const SpanNumber = styled.div``

const SkillNumber = styled.span`
font-size:70px;
font-family: 'Epilogue';
font-size: 70px;
font-weight: 100;
line-height: 71.75px;
text-align: left;
text-underline-position: from-font;
text-decoration-skip-ink: none;

`

const StyledSkill =  styled.div`
    width:33%;
    background-color:#131212;
    margin:2px;
    display: flex;
    padding-bottom:51px



`

const SkillTitle =  styled.h3`
  font-family: 'Epilogue';
font-size: 30px;
font-weight: 300;
line-height: 30.75px;
text-align: left;


`
const SkillText =  styled.p`
    font-family: 'Epilogue';
font-size: 18px;
font-weight: 200;
line-height: 22.14px;
text-align: left;
`