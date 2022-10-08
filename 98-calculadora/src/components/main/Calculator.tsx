import React from "react";
import styled from 'styled-components'

import Button from "../basics/Button";
import Display from "../basics/Display";

const CalculatorStyled = styled.div`
    /* height: 420px; */
    width: 235px;
    border-radius: 10px;
    overflow: hidden;

    display: grid;
    grid-template-columns: repeat(4, 25%);
    grid-template-rows: 1fr 48px 48px 48px 48px 48px;
`;

export default class Calculator extends React.Component {
    render() {
        return (
            <CalculatorStyled>
                <Display value={'100'} />
                <Button label="AC" width="100%" height="50px" hasGridColumn="" color="#fa8231cc" />
                <Button label="/" width="100%" height="50px" hasGridColumn="" color="#fa8231cc" />
                <Button label="7" width="100%" height="50px" hasGridColumn="" />
                <Button label="8" width="100%" height="50px" hasGridColumn="" />
                <Button label="9" width="100%" height="50px" hasGridColumn="" />
                <Button label="*" width="100%" height="50px" hasGridColumn="" />
                <Button label="4" width="100%" height="50px" hasGridColumn="" />
                <Button label="5" width="100%" height="50px" hasGridColumn="" />
                <Button label="6" width="100%" height="50px" hasGridColumn="" />
                <Button label="-" width="100%" height="50px" hasGridColumn="" color="#fa8231cc" />
                <Button label="1" width="100%" height="50px" hasGridColumn="" />
                <Button label="2" width="100%" height="50px" hasGridColumn="" />
                <Button label="3" width="100%" height="50px" hasGridColumn="" />
                <Button label="+" width="100%" height="50px" hasGridColumn="" color="#fa8231cc" />
                <Button label="0" width="100%" height="50px" hasGridColumn="" />
                <Button label="." width="100%" height="50px" hasGridColumn="" color="#fa8231cc" />
                <Button label="=" width="100%" height="50px" hasGridColumn="" color="#fa8231cc" />
            </CalculatorStyled>
        )
    }
}

