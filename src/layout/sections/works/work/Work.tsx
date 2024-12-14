import React from 'react';
import styled from 'styled-components';


type WorkPropsType = {
title:string
text:string

}

export const Work = (props:WorkPropsType) => {
    return (
        <StyledWork>
                
                <Title>{props.title}</Title>
                <Text>{props.text}</Text>
                <Link></Link>
                

        </StyledWork>
    );
};

const StyledWork =  styled.div`
    background-color:#4d6b57; 
    width:100%;
    margin:10px;
   
` 



const Link = styled.a`
    
`

const Title   = styled.h3`
    
`
const Text  = styled.p`
    
`