import React from 'react';
import styled from 'styled-components';
import  {theme}  from '../../../styles/Treme';





 export const MobileMenu = (props: {menuItems: Array<string>}) => {
    return (
           <StyledMobileMenu>
<BurgerButton isOpen={true}>
<span></span>
</BurgerButton>

<MobileWrapper isOpen={true}>
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
    

    @media ${theme.media.tablet} {
        display: none;
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

    ul{
        display: flex;
        gap:30px; 
         justify-content:center; 
         flex-direction:column;
         align-items:center;
    }

`


const BurgerButton = styled.button`
position: fixed;

width:24px;
height:24px;


span{
    display: block;
    width:18px;
    height:1px;
    color:${theme.color.accent};
position: absolute;
left:15px;
bottom:7.5px;


&::before{
    content:'';
    display: block;
    width:18px;
    height:1px;
    color:${theme.color.accent};
position: absolute;
transform:translateY(-10px)
}
&::after{
    content:'';
    display: block;
    width:18px;
    height:1px;
    color:${theme.color.accent};
position: absolute;
transform:translateY(10px)
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
