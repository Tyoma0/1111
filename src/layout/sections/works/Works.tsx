import React from 'react';
import styled from 'styled-components';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Work } from './work/Work';

export const Works = () => {
    return (
        <StyledWorks>
            <SectionTitle>MY PROJECTS</SectionTitle>
            <FlexWrapper>
                <Work/>
                <Work/>
                <Work/>
            </FlexWrapper>
        </StyledWorks>
    );
};

const StyledWorks = styled.section`
    
    min-height:100vh;
    background-color:#acf8b7
`

const SectionTitle = styled.h2`
    
`