import React from "react";
import products from "../data/products";
import * as CSS from 'csstype'

export default () => {

    const containerTableStyle: CSS.Properties = {
        display: 'flex',
        justifyContent: 'center'

    }

    const tableStyle: CSS.Properties = {
        backgroundColor: 'black',
        color: 'white'
    }


    const allProducts = products.map(product => {
        return (
            <tr>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td> $ {product.price.toFixed(2)}</td>
            </tr>
        )
    });


    return (
        <div style={containerTableStyle} >
            <table>
                <thead>
                    <tr style={tableStyle}  >
                        <th>ID</th>
                        <th>NOME</th>
                        <th>PREÇO</th>
                    </tr>
                </thead>

                <tbody>
                    {allProducts}
                </tbody>
            </table>
        </div>
    );
}