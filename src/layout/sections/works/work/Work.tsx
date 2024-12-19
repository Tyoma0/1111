import React from 'react';
import styled from 'styled-components';

type WorkPropsType = {
title:string
text:string
minInfo:string
name:string

}

export const Work = (props:WorkPropsType) => {
    return (
        <StyledWork>
            <DivName>
                <SpanTitle>{props.minInfo}</SpanTitle>
                <SpanName>{props.name}</SpanName>
                <Title>{props.title}</Title>
            </DivName>
                
             <DivProject>
                <Text>{props.text}</Text>
                <Link>See  more...</Link>
            </DivProject>
                
                

        </StyledWork>
    );
};

const SpanName  = styled.span`
    font-family: 'Epilogue';
font-size: 45px;
font-weight: 200;
line-height: 54px;
text-align: left;


`
const DivName = styled.div`
    padding:92px 81px 153px 46px;
    display: flex;
    flex-direction:column;
    min-width:433px;
    min-height:215px;
    
`
const StyledWork =  styled.div`
    background-color:#979998; 
    width:100%;
    margin:10px;
   display: flex;
   
  
` 

const DivProject = styled.div`
    padding:132px 47px 100px 0;
    min-width:433px;
    min-height:215px
`
const SpanTitle = styled.span`
    font-family: 'Epilogue';
font-size: 16px;
font-weight: 600;
line-height: 24px;
text-align: left;



`

const Link = styled.a`
   font-family: 'Epilogue';
font-size: 16px;
font-weight: 400;
line-height: 24px;
text-align: left;

 
`

const Title   = styled.h3`
    font-family: 'Epilogue';
font-size: 45px;
font-weight: 800;
line-height: 54px;
text-align: left;


`
const Text  = styled.p`
   font-family: 'Epilogue';
font-size: 18px;
font-weight: 400;
line-height: 27px;
margin-bottom:24px;
width: 433px;
height: 135px;
gap: 0px;
opacity: 0px;

 
`