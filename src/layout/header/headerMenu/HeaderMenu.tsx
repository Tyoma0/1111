import React from 'react';
import styled from 'styled-components';





 export const HeaderMenu = (props: {menuItems: Array<string>}) => {
    return (
        <div>
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
        </div>
    );
};

const  StyledHeaderMenu = styled.nav`
    ul{
        display: flex;
        gap:30px;
        
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
