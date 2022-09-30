import React, { useState } from "react";
import IndirectCommSon from "./IndirectCommSon";

/*
    Na comunicação indireta entre componentes, utilizamos o conceito de estados para transferir valores entre componentes.
    Neste caso, passamos do filho para o pai, de uma camada para a sua superior.

    Isso é possível pois o filho recebe como propriedade uma useStateAction, que quando acionada, altera o estado de uma
    propriedade do pai. 

    **NECESSÁRIO REVISAR**
*/

export default (props: any)=>{

    const [info, setInfo] = useState(0)

    return(
        <div style={{backgroundColor: 'darkblue', color: 'white', padding: '5px'}}>
            <h2>Father Component</h2>
            <div>Info that becomes from son: {info.toFixed(2)}</div>
            <IndirectCommSon passInfo={setInfo}/>
        </div>
    )
}