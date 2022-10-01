import React, { useState } from "react"
import * as CSS from 'csstype'

/*
    Perceba que o primeiro componente input recebe uma setStateAction, e é ela quem faz a mudança do estado desse componente
    quando algo é digitado. Ou seja, este é um componente controlado, observado. Todas as modificações neste campo input passam
    por funções antes de serem replicadas.

    No caso do outro componente, perceba que seu value é undefined, ou seja, seu valor é um 'tanto faz'. Este é um componente não controlado.
*/

export default (props: any) => {
    const [value, setValue] = useState('Início: ')

    const inputStyle: CSS.Properties = {
        fontSize: '1.4 rem',
    }

    function fazMudanca(event: any){
        setValue(event.target.value)
    }
    
    return(
        <div style={inputStyle} >
            <h2>Controlled Component</h2>
            <input type="text" maxLength={18} value={value} onChange={e=>{fazMudanca(e)}} />

            <h2>Uncontrolled Component</h2>
            <input type="text" value={undefined} />
        </div>
    )
}