import React from "react";
import PageTitle from "../../components/layout/PageTitle";

/*
    De acordo com a documentação do w3c, o useReducer é semelhante ao useState, mas permite
    lidar com estados que dependem de uma lógica mais complexa.

    Assim como descreve a documentação oficial do React, que diz que o useReducer é preferível quando
    temos certa complexidade lógica no gerenciamento de estados que por vezes envolve múltiplos
    sub-valores ou quando o próximo estado depende do estado anterior.

    Basicamente, o useReducer consome uma função, mais comumente denomidada 'reducer' e os valores do estado inicial com o qual vamos lidar. 
    Essa função é a responsável por prover a logica de funcionamento do useReducer e esses valores iniciais determinam quais serão os valores
    controlados por estado.

    Do useReducer desestruturamos em array dois elementos. O primeiro é o elemento 'state', que guarda o estado dos valores iniciais que passamos para
    o useReducer. O segundo elemento é o 'dispatch', este se remete à função 'reducer' para recorrer a lógica dela retornando o estado atualizado por essa lógica.

    Dada a complexidade do tema, esta sessão de estudos foi dedicada a ler e compreender, além de consumir exemplos.

    Exploraremos mais o useReducer na próxima sessão!

*/

type initialStateType = {
  click: number;
  info: string;
};

type action = {
  type: string;
  payload: number;
};

//Estado inicial a ser servido para o useReducer
const initialState = {
  click: 0,
  info: "Estado inicial",
};

//Função reducer, responsável por controlar a lógica do gerenciamento de estado
function reducer(
  state: typeof initialState /*Para tipar a state, poderíamos usar o tipo initialStateType*/,
  action: action
) {
  switch (action.type) {
    case "increment":
      return { ...state, click: state.click + action.payload };
    default:
      return state;
  }
}

const UseReducer = () => {
  //useReducer - Recebe a função reducer, responsável por gerenciar a lógica que determinará as mudanças de estado, e recebe
  //os valores iniciais do estado a ser gerenciado. Provê um estado com base nos valores recebidos e uma função que o altera.
  const [state, dispatch] = React.useReducer(reducer, initialState);

  return (
    <div className="UseReducer">
      <PageTitle
        title="Hook UseReducer"
        subtitle="Uma outra forma de ter estado em componentes funcionais!"
      />
      <div className="center">
        <span style={{ marginBottom: "10px", fontSize: "1.5rem" }}>
          Valor inicial do estado: {state.click}
        </span>
        <div>
          <button
            style={{ width: "100px", height: "40px" }}
            onClick={() => dispatch({ type: "increment", payload: 1 })} 
            //A função dispatch é responsável por alterar o estado, recebe um objeto com o tipo da ação e com o payload. O tipo
            //da ação determinará o gerenciamento do estado na função reducer.
          >
            Increment
          </button>
        </div>
      </div>
    </div>
  );
};

export default UseReducer;
