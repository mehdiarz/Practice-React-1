import React from "react";

import Wrapper from "../../hoc/Wrapper";
import Controls from "../../components/Controls/Controls";
import Modal from "../../components/UI/Modal/Modal";
import Order from "../../components/Order/Order";


const  prices = { 
    product1: 65,
    product2: 14,
    product3: 144,
    product4: 255,
}
class Shopping extends React.Component{
    state = {
        products: {
            product1: 0,
            product2: 0,
            product3: 0,
            product4: 0,
        },
        totalPrice: 0,
        purchased: false,
    }


    addProductHandler = (type) => {
            const prevCount = this.state.products[type]
            const updatedCount = prevCount + 1
            const updatedProducts = {...this.state.products}
            updatedProducts[type] = updatedCount 
            const priceAdd = prices[type]
            const prevPrice = this.state.totalPrice
            const newPrice = prevPrice + priceAdd
            this.setState({totalPrice: newPrice, products: updatedProducts})
            console.log("add")
    }

    removeProductHandler = (type) =>{
        const prevCount = this.state.products[type]
        if (prevCount > 0 ){
        const updatedCount = prevCount - 1
        const updatedProducts = {...this.state.products}
        updatedProducts[type] = updatedCount 
        const priceSub = prices[type]
        const prevPrice = this.state.totalPrice
        const newPrice = prevPrice - priceSub
        this.setState({totalPrice: newPrice, products: updatedProducts})
        console.log("remove")
        }
        else {
            console.log("no product")
        }
    }

    purchasedHandler = () => {
        this.setState({purchased: !this.state.purchased})
    }

    modalCloseHandler = () => {
        this.setState({purchased: false})
    }

    render(){
        return(
            <Wrapper>
                <Modal show={this.state.purchased} modalClose={this.modalCloseHandler}>
                    <Order products = {this.state.products}></Order>
                </Modal>
            <Controls productAdd = {this.addProductHandler} 
                productRemove={this.removeProductHandler}
                price = {this.state.totalPrice}
                order = {this.purchasedHandler}>
            </Controls>
        </Wrapper>
        )

    }
}

export default Shopping