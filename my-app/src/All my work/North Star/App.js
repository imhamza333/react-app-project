import React, { Component } from "react"
import NavBar from "./Navbar"
import Hader from "./Hader"
import {Route,Switch} from "react-router-dom"
import Footer from "./Footer"
import Blogs from "./Blogs"
import ContactUs from "./ContactUs"
import User from "./User"
import AskQuestion from "./AskQuestion"
import Home from "./Home";
import AskQnav from "./AskQnav";
import "./App.css";

class App extends Component {
     render () {
         return (
             <div>
                <NavBar />
                
                <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/askquestion" exact component={AskQuestion} />
                        <Route path="/user" exact component={User} />
                        <Route path="/Blogs" exact component={Blogs} />
                        <Route path="/ContactUs" exact component={ContactUs} />
                </Switch>
        
                  
                    {/* <div className="div15">
                        
                        <Hader />   
                    </div>        
                    <div className="div14">
                        <Footer />
                    </div>  */}
                    

                </div>
             
         )
     }
}

export default App;