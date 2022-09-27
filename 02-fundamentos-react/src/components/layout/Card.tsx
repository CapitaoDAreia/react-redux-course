import React from "react";
import './Card.scss'
import * as CSS from 'csstype'



export default (props: any) => {
    const CardStyle: CSS.Properties = {
        backgroundColor: props.color || 'none',
        borderColor: props.color || 'none'
    }

    return (
        <div className="cards" style={CardStyle}>
            <div className="title" >{props.title}</div>
            <div className="content" >
                {props.children}
            </div>
        </div>
    );
}