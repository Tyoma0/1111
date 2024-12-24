import React from 'react';
import styled from 'styled-components';
import { About } from './about/About';
import fotoImage from './../../assets/images/i.webp'
import photo from './../../assets/images/i.webp'
import { FlexWrapper } from '../../components/FlexWrapper';
import { theme } from '../../styles/Treme';

export const AboutMe = () => {
    return (
        <StyleAbout>
            <FlexWrapper wrap='wrap' justify='space-evenly'>
            <DivAbout>
            <SpanTitle>About Me</SpanTitle>
            <SectionTitle>I look at usual <br/> things with my <br /> unsual eyes.</SectionTitle>
            <Photo src={photo} alt="" />
            </DivAbout>
            
          
            


            <About text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce varius faucibus massa sollicitudin amet augue. Nibh metus a semper purus mauris duis. Lorem eu neque, tristique quis duis. Nibh scelerisque ac adipiscing velit non nulla in amet pellentesque. Sit turpis pretium eget maecenas. Vestibulum dolor mattis consectetur eget commodo vitae. Amet pellentesque sit pulvinar lorem mi a, euismod risus rhoncus. Elementum ullamcorper nec, habitasse vulputate. Eget dictum quis est sed egestas tellus, a lectus. Quam ullamcorper in fringilla arcu aliquet fames arcu.Lacinia eget faucibus urna, nam risus nec elementum cras porta. Sed elementum, sed dolor purus dolor dui. Ut dictum nulla pulvinar vulputate sit sagittis in eleifend dignissim. Natoque mauris cras molestie velit. Maecenas eget adipiscing quisque viverra lectus arcu, tincidunt ultrices pellentesque.' src={fotoImage}></About>
            </FlexWrapper>
            
        </StyleAbout>
    );
};

const DivAbout = styled.div`
    
`

const Photo = styled.img`
    width:532px;
    height:498px;
    margin-top:238px;
    object-fit:cover;

    @media ${theme.media.mobile}{
    width:305px;
    height:286px;
   margin-top:30px;
   margin-bottom:40px
}
`

 const StyleAbout = styled.section`
background-color:#131212;
color:#ffff;

 `

 const SectionTitle  = styled.h2`
    font-family: 'Epilogue';
font-size: 48px;
font-weight: 254;
line-height: 57.6px;
text-align: left;
width: 422px;
height: 174px;
gap: 0px;
opacity: 0px;


 `

 const   SpanTitle = styled.span`
    font-family: 'Epilogue';
font-size: 16px;
font-weight: 900;
line-height: 24px;
text-align: left;
width: 422px;
height: 24px;
gap: 0px;
opacity: 0px;
padding-bottom:16px

 `