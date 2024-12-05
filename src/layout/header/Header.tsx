import React from "react";
import styled from "styled-components";
import { Logo } from "../../components/logo/Logo";
import { Menu } from "../../components/menu/Menu";



const  items = ['Projects','About','Digital Assets','Let’s Talk']

 export const  Header = ()=>{
    return(
        <StyledHeader>
    <Logo/>
    <Menu menuItems={items}/>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    background-color:#9c8585;
display: flex;
justify-content:space-between;
`