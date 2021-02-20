import React, { Component } from 'react'
import Products from '../Products';
import Feature from '../Feature';
import Hero from '../Hero';
import Footer from '../Footer';
import { productData, productDataTwo } from '../Products/data';

export default class Main extends Component {


    constructor(props) {
        super(props)
        this.state = { cart: [] }
    }

    addToCart = (Product) => {
        let products = this.state.cart
        products.push(Product)
        console.log(products)
        this.setState({ cart: products }, this.productAdded)
    }
    productAdded = () => {
        console.log(this.state)
    }

    render() {
        return (
            <div>
                <Hero />
                <Products heading='Choose your favorite' data=
                    {productData} addToBasket={this.addToCart} />
                <Feature />
                <Products heading='Sweet Treats for You' data=
                    {productDataTwo} />
                <Footer />
            </div>
        )
    }
}
