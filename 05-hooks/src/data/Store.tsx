import React, { useState } from "react";



const initialState = {
    number: 0,
    text: 'Context API + Hooks',
    setNumber:(n:any)=>{},
    setText:(t:any)=>{}
}

export const AppContext = React.createContext(initialState) // Aqui é criado o contexto, invocando o Hook e passando para ele um estado que será gerenciado por este contexto

interface StoreProps {
    children: JSX.Element
}

const Store = (props: StoreProps) => {

    const [state, setState] = useState(initialState)

    function updateState(key: any, value: any) { //Essa função é responsável por alterar o estado do contexto através do useSate
        setState({
            ...state,
            [key]: value
        })
    }

    return (
        <AppContext.Provider value={{ //Envolvemos nossa aplicação (props.children) com o AppContext.Provider, que será o responsável por prover nossos estados. Esse provider recebe todos os estados que precisamos compartilhar, provendo estes para todos os componentes que forem aninhados dentro dele.
            number: state.number,
            text: state.text,
            setNumber: (n:any) => updateState('number', n),
            setText: (t:any) => updateState('text', t)
        }}>
            <div>
                {props.children}
            </div>
        </AppContext.Provider>
    )
}

export default Store