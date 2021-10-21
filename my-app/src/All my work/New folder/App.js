import React, { Component } from 'react'
import HomePage from "./HomePage"
import ContactPage from "./ContactPage"
import Default from "./Default"
import ProductsPage from "./ProductsPage"
import AboutPage from "./AboutPage"
import SingleProductPage from "./SingleProductPage"
import CartPage from "./CartPage"
import NavBar from "./NavBar"
import SideBar from "./SideBar"
import SideCart from "./SideCart"
import Footer from "./Footer"
import {Route, Switch}  from "react-router-dom"
import {ProductProvider} from "./context"
import "./App.css"



export default class App extends Component {

    state = {
        name: "hello from context",
    }

    
    render() {
        return (
            <div>
            <ProductProvider> 
            <NavBar />
            <SideBar/>
            <SideCart/>
            <Switch>
                            
                    <Route path="/" exact component={HomePage}  />
                    <Route path="/about" exact component={AboutPage}  />
                    <Route path="/contact" exact component={ContactPage}  />
                    <Route path="/products" exact component={ProductsPage}  />
                    <Route path="/product/:id" exact component={SingleProductPage}  />
                    <Route path="/cart" exact component={CartPage} />
                    <Route component={Default} />
            </Switch>
            <Footer/>
            </ProductProvider>
            </div>
        )
    }
}
