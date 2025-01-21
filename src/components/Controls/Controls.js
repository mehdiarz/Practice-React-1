import React from "react"

import Builder from "./Builder/Builder"

import './Controls.css'

const products = [
    {title : 'product1', type: 'product1'},
    {title : 'product2', type: 'product2'},
    {title : 'product3', type: 'product3'},
    {title : 'product4', type: 'product4'},
]
const Controls = (props) => {
    return(
        <div className="controls">
            <div className="price">
                <p>Total Price: {props.price}</p>
            </div>
            {products.map((item) => {
                return <Builder 
                key={item.title} 
                title={item.title}
                add={() => props.productAdd(item.type)}
                remove={() => props.productRemove(item.type)}>
                </Builder>
            })}
            <button className="order-btn">Order</button>
        </div>
    )
}

export default Controls