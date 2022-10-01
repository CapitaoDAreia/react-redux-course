import React, { Component } from "react";

type MyProps = {
    initialNumber: number
    initialPass: number
}


/*
    COMPONENTE BASEADO EM CLASSE
     Onde cria-se a classe e estende-se a mesma como React Component.
     Perceba que é necessário tipar as props para poder passar props
     para o componente quando este for invocado no app, preparando
     o componente para receber o que ele precisará receber.
*/

//EXEMPLO 1

// export default class Counter extends Component<MyProps, MyState> {

//     constructor(props: MyProps){
//         super(props)

//     }

//     state: MyState = {
//         num: this.props.initialNumber
//     }

//     render(){
//         return(
//             <div>
//                 <h2>Counter</h2>
//                 <p>{this.state.num}</p>
//             </div>
//         )
//     }
// }

//EXEMPLO 2

export default class Counter extends React.Component<MyProps> { 

    state = {
        num: this.props.initialNumber || 0,
        pass: this.props.initialPass || 5
    }

    //nas arrows function o this é imutável e se refere ao contexto em que foi criado
    inc=()=>{
        this.setState({
            num: this.state.num + this.state.pass
        })
    }

    dec=()=>{
        this.setState({
            num: this.state.num - this.state.pass
        })
    }

    setPass=(event:any)=>{
        this.setState({
            pass: parseInt(event.target.value)
        })
    }

    render(){
        return(
            <div>
                <h2>Counter</h2>
                <h3>{this.state.num}</h3>
                <div>
                    <label htmlFor="inputPass">Pass:</label>
                    <input type="number" 
                    name="inputPass" 
                    id="inputPass" 
                    value={this.state.pass} 
                    onChange={this.setPass} 
                    />
                </div>
                <button onClick={this.inc}>+</button>
                <button onClick={this.dec}>-</button>
            </div>
        )
    }
}