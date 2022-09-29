import React from 'react'
import If from './If'

export default (props: { name: string }) => {
    return (
        <div>
            <If sentence={props.name}>
                Seja bem-vindo {props.name}
            </If>
        </div>
    )
}