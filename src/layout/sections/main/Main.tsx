import React from 'react';
import styled from 'styled-components';
import photo from '..//../../assets/images/i.webp'
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Container } from '../../../components/Container';

 export const Main = () => {
    return (
        <StyledMain> 
            <Container>
            <FlexWrapper align='center' justify='space-between'>
            <Me>
            <BigText>HELLO <br/>I’M Tyoma</BigText>
            <Name>A Frontend Developer In Belarus</Name>
            </Me>  
            <DivFon>
            <Kub></Kub>
            <Photo src={photo} alt="" />
            </DivFon>
            
          </FlexWrapper>
            </Container>         
           
        </StyledMain>
    );
};

const DivFon = styled.div`
    
    height:100vh;
    display: flex;
    align-items:center;
    justify-content:center
`

const Me = styled.div`
position:relative;
z-index:1;
`

const StyledMain  = styled.div`
    min-height:100vh;
    background-color:#FFFFFF;
    display: flex;
    

`
const Kub = styled.div`

background-color:#E7E7E7;
right:90px;
left:990px;

width:570px;
height:570px;

transform:rotate(-8.7deg);

position:absolute;


`


const  Photo= styled.img`
position:absolute;
right:90px;
left:990px;    
width:570px;
height:570px;
transform:rotate(8.7deg);






`
const BigText = styled.span`
width: 651px;
height: 352px;
top: 222px;
left: 189px;
gap: 0px;
opacity: 0px;
font-family: 'Epilogue';
font-size: 150px;
font-weight: 800;
line-height: 176.25px;
text-align: left;
text-underline-position: from-font;
text-decoration-skip-ink: none;

`
const Name = styled.h1`

`