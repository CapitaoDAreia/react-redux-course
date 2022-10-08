import React from "react";
import styled from 'styled-components'

type DisplayProps = {
    value: string
}

const DisplayStyled = styled.div`
    height: 40px;
    grid-column: span 4;
    background-color: #0004;

    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 10px;
    font-size: 2.1rem;
    overflow: hidden;
`;

const Display = (props: DisplayProps) => {
    return (
        <DisplayStyled>
            {props.value}
        </DisplayStyled>
    )
}

export default Display