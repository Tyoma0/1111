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
                        <SkillTitle>{props.title}</SkillTitle>
                        <SkillText>{props.text}</SkillText>                   
                
        </StyledSkill>
        
    );
};

const SkillNumber = styled.span`
font-size:70px;
`

const StyledSkill =  styled.div`
    width:33%;
    background-color:#9b7474;
    margin:2px
`

const SkillTitle =  styled.h3`
    
`
const SkillText =  styled.p`
    
`