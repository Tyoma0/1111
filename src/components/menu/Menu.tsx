import React from 'react';
import styled from 'styled-components';





 export const Menu = (props: {menuItems: Array<string>}) => {
    return (
        
           <StylenMenu>
    <ul>
{props.menuItems.map((item,index)=>{
  return  <li key={index}>
    <a href="">{item}</a>
    </li>
})}
    </ul>
</StylenMenu> 
       
    );
};

const  StylenMenu = styled.nav`
    
  ul{
        display: flex;
        gap:30px;
        
    }
     a{
        color:black;
        text-shadow: 1px 3px 5px #00000067;
    }
    
    
      
`
 