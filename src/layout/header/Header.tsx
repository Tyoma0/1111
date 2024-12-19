import React from "react";
import styled from "styled-components";
import { Logo } from "../../components/logo/Logo";
import { Container } from "../../components/Container";
import { FlexWrapper } from "../../components/FlexWrapper";
import { HeaderMenu } from "./headerMenu/HeaderMenu";


const  items = ['Projects','About','Digital Assets','Let’s Talk']

 export const  Header = ()=>{
    return(
        <StyledHeader>
            <Container>
                <FlexWrapper justify="space-between" align="center">
                    
                    <Logo />
                    
               
                <HeaderMenu menuItems={items}/>
                </FlexWrapper>
            
            </Container>
   
        </StyledHeader>
    );
};




const StyledHeader = styled.header`

padding:20px 0;
position:fixed;
top:0;
left: 0;
right: 0;
z-index:99999;
margin-left:232px;
margin-right:232px
`