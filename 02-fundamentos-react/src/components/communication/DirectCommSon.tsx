import React from "react";

export default (props:{inherit: string})=>{
    return(
        <div style={{backgroundColor: 'blue'}}>
            <h2>Son Component</h2>
            <div>Herança do meu pai: {props.inherit}</div>
        </div>
    )
}