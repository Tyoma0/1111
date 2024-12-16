import React from 'react';
import styled from 'styled-components';


type AboutPropsType = {
    
    text:string
    src: string
    }


export const About = (props:AboutPropsType) => {
    return (
        <AboutDiv>
            <Description>{props.text}</Description>
            <Image width={440} height={411} src={props.src} alt="" />
        </AboutDiv>
    );
};



const AboutDiv  = styled.div``
const Image = styled.img``
const Description = styled.p`
width: 437px;
height: 540px;
gap: 0px;
opacity: 0px;

font-family: 'Roboto';
font-size: 18px;
font-weight: 400;
line-height: 27px;
text-align: left;


`