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
            {products.map((item) => {
                return <Builder key={item.title} title={item.title}></Builder>
            })}
        </div>
    )
}

export default Controls