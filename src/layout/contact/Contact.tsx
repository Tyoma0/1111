import React from 'react';
import styled from 'styled-components';
import { Menu } from '../../components/menu/Menu';
import { Button } from '../../components/Buttom';
import { Container } from '../../components/Container';
import { FlexWrapper } from '../../components/FlexWrapper'
const itemContact = ['Projects','About','Digital Assets']

export const Contact = () => {
    return (
        <StyleContact>
            <Container>
                

                <DivContact>
                <Menu menuItems={itemContact}></Menu> 
           <StyledForm>
            <TitleForm>Subscribe to my emailing list</TitleForm>
           <Field placeholder='Enter your email'/>
           <Button   type='submit'>Subscribe</Button>
           <StyledSpanContact>By subscribing you agree to with our <Span> Privacy Policy</Span> </StyledSpanContact>
           </StyledForm>
                </DivContact>
           
            </Container>
          
        </StyleContact>
    );
};

const Span = styled.span`
    
font-family: 'Roboto';
font-size: 12px;
font-weight: 400;
line-height: 18px;
text-align: left;
text-decoration-line: underline;
text-decoration-style: solid;

`


const DivContact  = styled.div`
    display: flex;
    justify-content:space-evenly;
   align-items:center;
   border-bottom:1px solid #000000;
   width: Fixed 1,064px;
height: Fixed 146px;
gap: 377px;
opacity: 0px;

`


 const StyleContact = styled.section`
    min-height:50vh;
    background-color:#ffffff;
    
    
 `

const StyledForm = styled.form`
    max-width:500px;
    width:70%;
    gap: 20px;
    font-family: 'Epilogue';
font-size: 16px;
font-weight: 700;
line-height: 24px;
margin-top:92px

  
`
const Field = styled.input`
    padding:12px;
    border:1px solid #000000;
    
`

const TitleForm  = styled.legend`
font-size: 16px;
font-weight: 700;
line-height: 24px;
text-align: left;
text-decoration-skip-ink: none;
padding-bottom:16px;

`

const StyledSpanContact = styled.span`
    display: flex;
    justify-content:start;
padding-top:16px;
padding-bottom:76px;
gap: 4px;


font-family: 'Roboto';
font-size: 12px;
font-weight: 400;
line-height: 18px;
text-align: left;
text-underline-position: from-font;
text-decoration-skip-ink: none;

`