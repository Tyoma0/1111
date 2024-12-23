import { createGlobalStyle } from "styled-components";
import { theme } from "./Treme";

export const GlobalStyle = createGlobalStyle`
*,*::before,
*::after{
    margin:0;
    padding:0;
    box-sizing:border-box;
}




body {
  margin: 0;
  font-family:"Epilogue",   'Roboto', 
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

 header nav{
height:48px;
display: flex;
align-items:center
} 
 a{
 text-decoration:none;
 font-family: 'Epilogue';
font-size: 16px;
font-weight: 400;
line-height: 24px;
text-align: left;
} 

 nav{
  color:${theme.color.accent}
} 



  header li:last-child{
  background-color:#2D2C2C;
 border-radius:2px;
 transition: transform 0.5s ease-in-out;
 

}  
 header li:last-child:hover{
  transform:scale(1.1);
  
}

ul{
    list-style-type: none;
} 

button{
    background-color:unset;
    border:none
}

section{
  padding:100px 0;

  @media ${theme.media.mobile}{
    padding: 80px 0
  }
    
  
}


section:nth-of-type(odd){
   background-color:${theme.color.primaryBg};
  color:${theme.color.font}; 
   
}


section:nth-of-type(even){
  background-color:${theme.color.secondaryBg};
  color:${theme.color.accent};
}

`

