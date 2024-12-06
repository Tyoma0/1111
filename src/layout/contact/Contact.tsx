import React from 'react';
import styled from 'styled-components';
import { Menu } from '../../components/menu/Menu';
import { Button } from '../../components/Buttom';

const itemContact = ['Projects','About','Digital Assets']

export const Contact = () => {
    return (
        <StyleContact>
           <Menu menuItems={itemContact}></Menu> 
           <StyledForm>
            <TitleForm>Subscribe to my emailing list</TitleForm>
           <Field placeholder='Enter your email'/>
           <Button  type='submit'>Subscribe</Button>
           <StyledSpanContact>By subscribing you agree to with our Privacy Policy</StyledSpanContact>
           </StyledForm>
        </StyleContact>
    );
};

 const StyleContact = styled.section`
    min-height:50vh;
    background-color:#685763;
    display: flex;
    justify-content:space-evenly;
   align-items:center;
   
 `

const StyledForm = styled.form`
    max-width:500px;
    width:70%;
    gap: 20px;
  
`
const Field = styled.input`
    padding:12px;
    
`

const TitleForm  = styled.legend`
font-size: 16px;
font-weight: 700;
line-height: 24px;
text-align: left;
text-decoration-skip-ink: none;

`

const StyledSpanContact = styled.span`
    display: flex;
    justify-content:start;
font-size: 12px;
font-weight: 400;
line-height: 18px;
text-align: left;
text-decoration-line: underline;
text-decoration-style: solid;

text-decoration-skip-ink: none;

`