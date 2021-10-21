import React,{Component} from "react"
import NavBar from "./NavBar"
import Hader from "./Hader"
import logo2 from "./logo2.jpg"
import "./App.css"
import HaderData from "./HaderData"
import Hader1 from "./Hader1"
import Hader2 from "./Hader2"
import Carousal from "./Carousal"
import Footer from "./Footer"
import Footer1 from "./Footer1"
import MyAccount from "./myAccount"
import WishList from "./WishList"
import Campres from "./Campres"
import CheckOut from "./CheckOut"
import Login from "./logIn"
import {BrowserRouter as Router, Route,Switch} from "react-router-dom";



class App extends Component {
    render () {
        return (
            <Router>
                <div>
                    <div className="div">
                        <NavBar />
                    </div>
                    <Switch>
                        <Route path="/myaccount" exact component={MyAccount} />
                        <Route path="/wishList" exact component={WishList} />
                        <Route path="/checkOut" exact component={CheckOut} />
                        <Route path="/campres" exact component={Campres} />
                        <Route path="/login" exact component={Login} />
                    </Switch>
                    <div className="div7">
                        <HaderData />
                    </div>
                    <Hader />
                    <Hader1 />
                    <Hader2 />    
                    <Carousal />
                    <Footer />
                    <Footer1 />
                    
                </div>
            </Router>
        )
    }
}

export default App;
