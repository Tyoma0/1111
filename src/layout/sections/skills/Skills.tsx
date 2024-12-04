import React from 'react';
import styled from 'styled-components';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Skill } from './skill/Skill';

 export const Skills = () => {
    return (
        <StyledSkills>
            <FlexWrapper>
                <Skill/>
                <Skill/>
                <Skill/>
                <Skill/>
                <Skill/>
                <Skill/>
            </FlexWrapper>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
    
`