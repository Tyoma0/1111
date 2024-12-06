import React from 'react';
import styled from 'styled-components';


type AboutPropsType = {
    
    text:string
    src: string
    }


export const About = (props:AboutPropsType) => {
    return (
        <AboutDiv>
            <Image src={props.src} alt="" />
            <Description>{props.text}</Description>
            <Image src={props.src} alt="" />
        </AboutDiv>
    );
};



const AboutDiv  = styled.div``
const Image = styled.img``
const Description = styled.p``