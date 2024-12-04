import React from 'react';
import styled from 'styled-components';
import photo from '..//../../assets/images/images.jpg'
import { FlexWrapper } from '../../../components/FlexWrapper';

 export const Main = () => {
    return (
        <StyledMain>
          <FlexWrapper align='center' justify='space-around'>
          <div>
            <span>HELLO I’M Tyoma</span>
            <h1>A Frontend Developer</h1>
            </div>  

            <Photo src={photo} alt="" />
          </FlexWrapper>
        </StyledMain>
    );
};

const StyledMain  = styled.div`
    min-height:100vh;
    background-color:#6e5454
`



const  Photo= styled.img`
    width: 570px;
height: 570px;
object-fit:cover;
rotate:-7.52 deg;
`
