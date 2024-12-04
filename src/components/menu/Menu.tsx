import React from 'react';
import styled from 'styled-components';
 export const Menu = () => {
    return (
        <div>
           <StylenMenu>
    <ul>
        <li><a href="">Projects</a></li>
        <li><a href="">About</a></li>
        <li><a href="">Digital Assets</a></li>
        <li><a href="">Let's Talk</a></li>
    </ul>
</StylenMenu> 
        </div>
    );
};

const  StylenMenu = styled.nav`
    ul{
        display: flex;
        gap:30px;
    }
`