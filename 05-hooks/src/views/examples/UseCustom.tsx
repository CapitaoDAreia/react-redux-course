import React from "react";
import PageTitle from "../../components/layout/PageTitle";
import useCounter from "../../hooks/useCounter";
import useFetch from "../../hooks/useFetch";

/*
    Criando um Hook Counter em React

    Que coisa linda, irmão! *-*

*/

const counterPayload = { initialValue: 0, pace: 5 };

const UseRef = (props: {}) => {
  const [count, inc, dec] = useCounter(counterPayload);
  const url = "http://files.cod3r.com.br/curso-react/estados.json";
  const response = useFetch(url);

  function showStates(states: [state: { nome: string; sigla: string }]) {
    return states.map((state) => (
      <li key={state.sigla}>
        {state.nome} - {state.sigla}
      </li>
    ));
  }

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

      <PageTitle title="Exercício #02" subtitle="Criando useFetch Hook" />
      <h1>Resposta do useFetch Hook</h1>   
      <div style={{ overflowY: "scroll", padding: "10px" }}>
        <div>
          <ul>
            {response.data
              ? showStates(response.data)
              : "requisição mal sucedida"}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UseRef;
