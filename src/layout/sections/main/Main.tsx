import React from 'react';
import styled from 'styled-components';
import photo from '..//../../assets/images/i.webp'
import { FlexWrapper } from '../../../components/FlexWrapper';


 export const Main = () => {
    return (
        <StyledMain>          
            <FlexWrapper align='center' justify='space-around'>
            <Me>
            <span>HELLO I’M Tyoma</span>
            <h1>A Frontend Developer</h1>
            </Me>  
            <Kub></Kub>
            <Photo src={photo} alt="" />
          </FlexWrapper>
        </StyledMain>
    );
};


const Me = styled.div`
position:relative;
right:250px
`

const StyledMain  = styled.div`
    min-height:100vh;
    background-color:#FFFFFF;
    position: relative;
    display: flex;
    justify-content:space-evenly
`
const Kub = styled.div`
width:570px;
height:570px;
background-color:#E7E7E7;
transform:rotate(-7.56deg);
position:absolute;
right:50px
`


const  Photo= styled.img`
width:570px;
height:570px;
transform:rotate(7.56deg);
position:absolute;
right:50px
`
