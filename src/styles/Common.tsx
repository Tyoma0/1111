import styled from "styled-components"
import { theme } from "./Treme"


type FontPropsType= {
family?:string
weight?:number
color?:string
lineHeight?:number
Fmin?:number
Fmax?:number
}




export const font = ({family,weight,color,lineHeight,Fmin,Fmax}:FontPropsType)=>`
    font-family:${family || 'Epilogue'};
    font-weight:${weight || 800};
    color:${color || theme.color.accent };
    lineHeight:${lineHeight || 2};
    font-size: calc( (100vw - 360px) / (1440-360) * (${Fmax} - ${Fmin}) + ${Fmin}px);
    
`