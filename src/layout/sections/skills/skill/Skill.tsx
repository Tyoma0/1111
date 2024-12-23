import React from 'react';
import styled from 'styled-components';
import { theme } from '../../../../styles/Treme';
import { font } from '../../../../styles/Common';


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
padding-right:25px

`

const StyledSkill =  styled.div`
    width:440px;
    background-color:#131212;
    margin:2px;
    display: flex;
    padding-bottom:51px;

@media ${theme.media.mobile}{
    display: flex;
    align-items:center;
    justify-content:center;
   
    
}
    


`

const SkillTitle =  styled.h3`
  font-family: 'Epilogue';
font-size: 30px;
font-weight: 300;

/* ${font({family:'Epilogue',weight:300,Fmax:30,Fmin:25})} */



`
const SkillText =  styled.p`
    font-family: 'Epilogue';
font-size: 18px;
font-weight: 200;
line-height: 22.14px;
text-align: left;
`