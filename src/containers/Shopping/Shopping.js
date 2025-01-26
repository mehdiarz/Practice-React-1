import React from "react";

import Wrapper from "../../hoc/Wrapper";
import Controls from "../../components/Controls/Controls";
import Modal from "../../components/UI/Modal/Modal";
import Order from "../../components/Order/Order";
import axios from "../../axios-orders";
import Loader from "../../components/UI/Loader/Loader";

const  prices = { 
    product1: 65,
    product2: 14,
    product3: 144,
    product4: 255,
}
class Shopping extends React.Component{
    state = {
        products: null,
        totalPrice: 0,
        purchased: false,
        loading: false,
    }

    componentDidMount(){
        axios.get('https://react-practice-1-abe5b-default-rtdb.firebaseio.com/products.json')
        .then(response => {
            this.setState({products: response.data})
        })
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

    purchaseContinueHandler = () =>{
        this.setState({loading: true})
        const order = {
            products : this.state.products,
            totalPrice: this.state.totalPrice,
            customer: {
                name: 'mehdi',
                email: 'mahdi_arezoomand@yahoo.com'
            },
        }
        axios.post('/orders.json', order)
            .then((response) => {
                this.setState({loading: false, purchased: false})
            })
            .catch((err) => {
                this.setState({loading: false, purchased: false})
            })
    }

    render(){
        let order = null

        if(this.state.loading){
            order = <Loader></Loader>
        }
        let controls = <Loader></Loader>
        if(this.state.products){
            controls = (<Controls productAdd = {this.addProductHandler} 
            productRemove={this.removeProductHandler}
            price = {this.state.totalPrice}
            order = {this.purchasedHandler}>
            </Controls>)

            order = (<Order products = {this.state.products} cancel = {this.modalCloseHandler} 
            continue = {this.purchaseContinueHandler}
            totalPrice ={this.state.totalPrice}></Order>)
        }
        return( 
            <Wrapper>
                <Modal show={this.state.purchased} modalClose={this.modalCloseHandler}>
                    {order}
                </Modal>
                {controls}
        </Wrapper>
        )

    }
}

export default Shopping