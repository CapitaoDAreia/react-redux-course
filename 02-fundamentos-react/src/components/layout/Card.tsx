import React from "react";
import './Card.scss'


export default (props: any) => {
    return (
        <div className="cards">
            <div className="title" >{props.title}</div>
            <div className="content" >
                {props.children}
            </div>
        </div>
    );
}