import React from "react";
import styled from "styled-components";
import { Logo } from "../../components/logo/Logo";
import { Container } from "../../components/Container";
import { FlexWrapper } from "../../components/FlexWrapper";
import { HeaderMenu } from "./headerMenu/HeaderMenu";
import { MobileMenu } from "./mobileMenu/MobileMenu";

const  items = ['Projects','About','Digital Assets','Let’s Talk']

 export const  Header = ()=>{
    return(
        <StyledHeader>
            <Container>
                <FlexWrapper justify="space-between" align="center">
                    
                    <Logo />
                    
               
                <HeaderMenu menuItems={items}/>
                <MobileMenu menuItems={items}/>
                </FlexWrapper>
            
            </Container>
   
        </StyledHeader>
    );
};




const StyledHeader = styled.header`

padding:20px 0;
`