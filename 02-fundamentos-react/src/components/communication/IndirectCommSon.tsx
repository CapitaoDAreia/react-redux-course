import React, { SetStateAction } from 'react'

export default (props: {passInfo:any})=>{
    const info = Math.random() * (1 - 10) + 1
    return(
        <div style={{backgroundColor: 'blue', padding: '3px'}}>
            <h2>Son Component</h2>
            <div>Click to pass information to my father: </div>
            <button
            onClick={_=>{props.passInfo(info)}}
            >Pass</button>
        </div>
    )
}