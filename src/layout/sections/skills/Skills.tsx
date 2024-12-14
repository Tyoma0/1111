import React from 'react';
import styled from 'styled-components';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Skill } from './skill/Skill';


 export const Skills = () => {
    return (
        <StyledSkills>
            <Box>
            <FlexWrapper wrap='wrap'justify='space-between' >
                
                <Skill text='consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue' spanTitle='01.' title = {'React'}/>
                <Skill text='consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue' spanTitle='02.' title = {'Styled Components'}/>
                <Skill text='consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue' spanTitle='03.' title = {'Figma'}/>
                <Skill text='consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue' spanTitle='04.' title = {'HTML'}/>
                <Skill text='consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue' spanTitle='05.' title = {'CSS'}/>
                <Skill text='consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue' spanTitle='06.' title = {'JavaScript'}/> 
                
                
            </FlexWrapper> 
            </Box>
           
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
  
`
const Box = styled.div`
    margin:59px 51px
`