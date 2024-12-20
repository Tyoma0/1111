import React from 'react';
import styled from 'styled-components';
import { useRef } from 'react';

type WorkPropsType = {
title:string
text:string
minInfo:string
name:string

}

export const Work = (props:WorkPropsType) => {
    const overlayMenuRef = useRef<HTMLDialogElement>(null);

    const handleShowMore = () => {
        if (overlayMenuRef.current) {
            (overlayMenuRef.current as any).showModal();

        }


        
    };
    return (
        <StyledWork>
            <DivName>
                <SpanTitle>{props.minInfo}</SpanTitle>
                <SpanName>{props.name}</SpanName>
                <Title>{props.title}</Title>
            </DivName>
                
             <DivProject>
                <Text>{props.text}</Text>
                
                <Link type='button' onClick={handleShowMore}>See  more...</Link>
          
          <StyledDialog  id='overlayMenu'ref={overlayMenuRef}>
            <Styleform method='dialog'>                   
                <DialogContent>
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt fugit, obcaecati expedita dolorum quia asperiores sapiente harum eveniet cum! Velit maxime, nemo qui molestiae quo nesciunt deserunt sit? Placeat, sapiente!Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque asperiores nemo totam repudiandae quas, molestias accusantium quo sit, impedit magni saepe quis doloremque modi cupiditate optio earum obcaecati aspernatur iusto? Lorem ipsum dolor sit amet consectetur adipisicing elit. Et facere voluptas minima deserunt pariatur libero, error assumenda officia hic quibusdam dolorem quidem necessitatibus asperiores incidunt animi quasi! Fuga, ratione amet.</p>
                    <CloseButton  type='submit' >close</CloseButton>
                </DialogContent>
            </Styleform>                   
        </StyledDialog>
                  
        
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

const Link = styled.button`
   font-family: 'Epilogue';
font-size: 16px;
font-weight: 400;
line-height: 24px;
text-align: left;

&:hover{
    cursor:pointer;
   

}

	

	
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





  

   
  
  
  
const StyledDialog = styled.dialog`
border:none;
background-color:#979998b2;
border-radius:80px;

`



const CloseButton = styled.button`
  background-color: #000000cc;
  color: white;
  border: none;
  padding: 10px 20px;
  margin:10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 50px;
  box-shadow: 0 4px 15px rgba(94, 90, 90, 0.2);
  &:hover {
    background-color: #e60000;
    transform:translate3d(5px);
    box-shadow: 0 4px 15px rgba(255, 0, 0, 1.6);
  }
`

const DialogContent = styled.div`
  background-color: #bebebeab; 
  color: #333333;
  padding: 30px;
  border-radius: 80px; 
  max-width: 500px;
  width: 100%;
  text-align: center;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2); 
  
`

const Styleform = styled.form`
    
`