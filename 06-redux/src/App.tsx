import React from "react";
import Card from "./Components/Card";

import styled from "styled-components";

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
        <Card title="CARD #01" headColor="#472121" bodyColor="#580903">
          Card
        </Card>

        <Card title="CARD #01" headColor="#1d4225" bodyColor="#224e2b">
          Card
        </Card>
      </Row>

      <Row>
        <Card title="CARD #02" headColor="#050f31" bodyColor="#19223f">
          Card
        </Card>

        <Card title="CARD #02" headColor="#36051e" bodyColor="#491932">
          Card
        </Card>
      </Row>
    </Container>
  );
}

export default App;
