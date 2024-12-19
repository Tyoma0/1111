import React from 'react';
import iconSprite from './../../assets/images/icons-sprite.svg'
import styled from 'styled-components';

type IconPropsType = {
    iconId:string
    width?:string
    height?:string
    viewBox?: string
}

 export const Icon = (props:IconPropsType) => {
    return (
        <svg fill="none" width='50' height='50' viewBox = '0 0 50 50'  xmlns="http://www.w3.org/2000/svg" >
            <use xlinkHref={`${iconSprite}#${props.iconId}`}/>
        </svg>
            

       
    );
};

