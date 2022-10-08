import Calculator from "./main/Calculator";
import styled from "styled-components";

const StyledMain = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;

    color: #FFFFFF;
    background: linear-gradient(to right, #0f0c29, #302b63, #24243e);
`;

const Main =()=>{
    return(
        <StyledMain>
            <h1>Calculator</h1>
            <Calculator />
        </StyledMain>
    )
}

export default Main