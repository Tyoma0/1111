import React from 'react';
import styled from 'styled-components';
import photo from '..//../../assets/images/i.webp'
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Container } from '../../../components/Container';
import { theme } from '../../../styles/Treme';
import { font } from '../../../styles/Common';

 export const Main = () => {
    return (
        <StyledMain> 
            <Container>
            <FlexWrapper align='center' justify='center' wrap='wrap'>
            <Me>
            <BigText>HELLO <br/>I’M Tyoma</BigText>
            <Name>A Frontend Developer In Belarus</Name>
            </Me>             
            <Photo src={photo} alt="" />           
          </FlexWrapper>
            </Container>         
           
        </StyledMain>
    );
};



const Me = styled.div`
position:relative;
z-index:1;
`

const StyledMain  = styled.div`
    min-height:100%;
    background-color:#FFFFFF;
    display: flex;
    

`



const  Photo= styled.img`
width:570px;
height:570px;
transform:rotate(8.7deg);
object-fit:cover;
margin-top:106px;
margin:106px 20px;


@media ${theme.media.mobile}{
    width:300px;
    height:300px;
   
}
    





`
const BigText = styled.span`
 ${font({family:'Epilogue',weight:800,Fmax:150,Fmin:75,})}; 
/* font-family: 'Epilogue';
font-size: 150px;
font-weight: 800; */
@media  ${theme.media.mobile}{
    
}
  

`
const Name = styled.h1`

`