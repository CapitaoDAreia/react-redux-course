import React from "react";
import styled from "styled-components";
import Card from "./Card";

const Intervalo = () => {
  return (
    <Card title="CARD #01" headColor="#472121" bodyColor="#580903">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <span
          style={{
            flex: "1",
            display: 'flex',
            gap: '10px',
            justifyContent: 'center'
          }}
        >
          <strong>Mínimo</strong>
          <input type="number" value={0} readOnly />
        </span>

        <span
          style={{
            flex: "1",
            display: 'flex',
            gap: '10px',
            justifyContent: 'center'
          }}
        >
          <strong>Máximo</strong>
          <input type="number" value={0} readOnly />
        </span>
      </div>
    </Card>
  );
};

export default Intervalo;
