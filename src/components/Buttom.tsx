import styled from "styled-components";
import { theme } from "../styles/Treme";

export const Button = styled.button`
width: 127px;
height: 43px;
padding: 12px 24px 12px 24px;
gap: 8px;
border: 1px solid #000000;
opacity: 0px;
margin:16px;

@media ${theme.media.mobile}{
    
width: 127px;
height: 48px;
padding: 12px 24px 12px 24px;
gap: 8px;
border: 1px 0px 0px 0px;
opacity: 0px;
 
 margin:16px 0;
}
`