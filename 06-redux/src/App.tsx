import React from "react";
import Media from "./Components/Media";
import Soma from "./Components/Soma";
import Sorteio from "./Components/Sorteio";


import styled from "styled-components";
import Intervalo from "./Components/Intervalo";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Row = styled.div`
  display: flex;
`;

function App() {

  
  return (
    <Container>
      <Title>Exercício React-Redux</Title>
      <Row>
        <Intervalo 
        />
      </Row>

      <Row>
        <Media title="CARD #02" headColor="#050f31" bodyColor="#19223f"></Media>

        <Soma title="CARD #03" headColor="#1d4225" bodyColor="#224e2b"></Soma>

        <Sorteio title="CARD #04" headColor="#36051e" bodyColor="#491932"></Sorteio>
      </Row>
    </Container>
  );
}

export default App;
