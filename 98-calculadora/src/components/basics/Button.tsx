import React from "react";
import * as CSS from 'csstype'
import styled from 'styled-components'

type ButtonProps = {
    label: string
    width: string
    height: string
    hasGridColumn?: string
    color?: string
}

const ButtonStyled = styled.button`
    border: 0.5px solid black;

    &:hover{
        opacity: .9;
    }
    
    &:active{
        opacity: .5;
    }
`;

const Button=(props: ButtonProps): React.ReactElement => {

    const ButtonPropsDinamicStyle: CSS.Properties = {
        width: `${props.width}`,
        height: `${props.height}`,
        gridColumn: `${props.hasGridColumn}`,
        backgroundColor:`${props.color}`
    }

    return(
        <ButtonStyled style={ButtonPropsDinamicStyle}>
            {props.label}
        </ButtonStyled>
    )
}

export default Button