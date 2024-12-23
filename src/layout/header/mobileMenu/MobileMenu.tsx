import React from 'react';
import styled from 'styled-components';
import  {theme}  from '../../../styles/Treme';
import { css } from 'styled-components';




 export const MobileMenu = (props: {menuItems: Array<string>}) => {
    return (
           <StyledMobileMenu>
<BurgerButton isOpen={false}>
<span></span>
</BurgerButton>

<MobileWrapper isOpen={false}>
<ul>
{props.menuItems.map((item,index)=>{
  return  <ListItem key={index}>
    <Link href="">{item}
    
    </Link>
    </ListItem>
})}
    </ul>
</MobileWrapper>
    
</StyledMobileMenu> 
        
    );
};

const  StyledMobileMenu = styled.nav`
    display: none;

    @media ${theme.media.tablet} {
        display: block;
    }
        
    
`
const MobileWrapper = styled.div<{isOpen:boolean}>`
position: fixed;
top:0;
left:0;
right:0;
bottom:0;
z-index:99999;
background-color:#F1F1F1;
display: none;

${props =>props.isOpen && css<{isOpen:boolean}>`
   display: flex; 
   justify-content:center;
   align-items:center;
`}

    ul{
        display: flex;
        gap:30px; 
         justify-content:center; 
         flex-direction:column;
         align-items:center;
    }

`


const BurgerButton = styled.button<{isOpen:boolean}>`
position: absolute;

width:24px;
height:24px;


span{
    display: block;
    width:18px;
    height:1px;
    background-color:${theme.color.accent};
position: absolute;
bottom:1px;
right:30px;

${props =>props.isOpen && css<{isOpen:boolean}>`
background-color:rgba(255, 255, 255, 0);
`
}

&::before{
    content:'';
    display: block;
    width:18px;
    height:1px;
    background-color:${theme.color.accent};
position: absolute;
transform:translateY(-10px)

${props =>props.isOpen && css<{isOpen:boolean}>`
transform: rotate(-45deg) translateY(0px)
`
}
}
&::after{
    content:'';
    display: block;
    width:18px;
    height:1px;
    background-color:${theme.color.accent};
position: absolute;
transform:translateY(10px)

${props =>props.isOpen && css<{isOpen:boolean}>`
transform: rotate(45deg) translateY(0px)
`
}
}
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
