import React from "react";
import PageTitle from "../../components/layout/PageTitle";
import useCounter from "../../hooks/useCounter";

/*
    Criando um Hook Counter em React

    Que coisa linda, irmão! *-*

*/


const counterPayload = { initialValue: 0, pace: 5 };

const UseRef = (props: {}) => {
  const [count, inc, dec] = useCounter(counterPayload);

  return (
    <div className="UseCustom">
      <PageTitle
        title="Seu Hook"
        subtitle="Vamos aprender como criar o nosso próprio Hook!"
      />

      <div className="center">
        <span>Valor: {count}</span>

        <div>
          <button onClick={() => inc()}>+</button>
          <button onClick={() => dec()}>-</button>
        </div>
      </div>
    </div>
  );
};

export default UseRef;
