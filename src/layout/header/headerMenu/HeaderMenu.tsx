import React from 'react';
import styled from 'styled-components';
import  {theme}  from '../../../styles/Treme';





 export const HeaderMenu = (props: {menuItems: Array<string>}) => {
    return (
           <StyledHeaderMenu>
    <ul>
{props.menuItems.map((item,index)=>{
  return  <ListItem key={index}>
    <Link href="">{item}
    
    </Link>
    </ListItem>
})}
    </ul>
</StyledHeaderMenu> 
        
    );
};

const  StyledHeaderMenu = styled.nav`
    ul{
        display: flex;
        gap:30px; 
         justify-content:center; 
    }

    @media ${theme.media.tablet} {
        display: none;
    }
        
    
`
const ListItem = styled.li`
 
`

const  Link = styled.a`
font-family: 'Epilogue';
font-size: 16px;
font-weight: 400;
line-height: 24px;
text-align: left;
text-underline-position: 'from-font';
text-decoration-skip-ink: none;
color:#2D2C2C

`
