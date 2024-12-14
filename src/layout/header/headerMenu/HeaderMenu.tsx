import React from 'react';
import styled from 'styled-components';





 export const HeaderMenu = (props: {menuItems: Array<string>}) => {
    return (
        <div>
           <StyledHeaderMenu>
    <ul>
{props.menuItems.map((item,index)=>{
  return  <ListItem key={index}>
    <Link href="">{item}</Link>
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
font-family:'Jesefin Sans',sans-serif ;
font-weight:400;
font-size:16px;
text-align:center;

`