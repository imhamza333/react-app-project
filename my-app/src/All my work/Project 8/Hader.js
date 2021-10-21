import React, { Component } from "react"
import {BrowserRouter as Router, Route,Switch} from "react-router-dom"
import {Link} from "react-router-dom"
import MostResponses from "./mostResponses"
import NoAnsweres from "./noAnsweres"
import RecentQuestions from "./recentQuestions"
import RecentlyAnswered from "./recentlyAnswered"
import logo03 from "./logo03.jpg" 
import logo3 from "./logo3.png"

class Hader extends Component {
    render () {
        return (
            <div className="div1">
                
                 <img 
                    className="logo1"
                    src={logo03}
                />
                <div className="input-group mb-3 div2">
                    <input type="text" 
                        className="form-control" 
                        placeholder="Type here..." 
                        aria-label="Recipient's username" 
                        aria-describedby="button-addon2" />
                    <button class="btn btn-primary" type="button" id="button-addon2">
                        ASK QUESTION
                    </button>
                </div> 
                <div className="div15">
                <div className="input-group mb-3 div17">
                    <input type="text" 
                        className="form-control" 
                        placeholder="Search..." 
                        aria-label="Recipient's username" 
                        aria-describedby="button-addon2" />
                    <button class="btn btn-primary btn3" type="button" id="button-addon2">
                        SEARCH
                    </button>
                </div>
                
                <div className="div4">
                                <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                                    <li class="nav-item">
                                        <Link class="nav-link" 
                                        id="pills-contact-tab" 
                                        data-toggle="pill" 
                                        to="/mostresponses" 
                                        role="tab" 
                                        aria-controls="pills-contact" 
                                        aria-selected="false">RECENT QUESTIONS</Link>
                                    </li>
                                <li class="nav-item">
                                    <a class="nav-link active" 
                                    id="pills-home-tab" 
                                    data-toggle="pill" 
                                    href="#pills-home" 
                                    role="tab" 
                                    aria-controls="pills-home" 
                                    aria-selected="true">MOST RESPONSES</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" 
                                    id="pills-profile-tab" 
                                    data-toggle="pill" 
                                    href="#pills-profile" 
                                    role="tab" 
                                    aria-controls="pills-profile" 
                                    aria-selected="false">RECENTLY ANSWERED</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" 
                                    id="pills-contact-tab" 
                                    data-toggle="pill" 
                                    href="#pills-contact" 
                                    role="tab" 
                                    aria-controls="pills-contact" 
                                    aria-selected="false">NO ANSWERS</a>
                                </li>
                            </ul>
                        </div>
                        <Router>
                            <Switch>
                                <Route path="/mostresponses" exact component={MostResponses} />
                                <Route path="/noAnsweres" exact component={NoAnsweres} />
                                <Route path="/recentQuestions" exact component={RecentQuestions} />
                                <Route path="/recentlyAnswered" exact component={RecentlyAnswered} />
                            </Switch>
                        </Router>
                        <div className="div5">
                        <div className="card mb-3 div7">
                            <ul class="nav list">
                                <li class="nav-item">
                                    <a className="nav-link text-danger" href="#">REPORT</a>
                                </li>
                            </ul>
                        `   <div className="row no-gutters div9">
                                <div className="col-md-4">
                                    <img src={logo3} className="card-img img1" alt="404"/>
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body div6">
                                        <h5 class="card-title">Muhammad Hamza</h5>
                                        <p class="card-text">I want to visite the Hunza velly in this spring can you please guide me what is the best way thank you </p>
                                
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="div8">
                                <div class="card mb-3 div10" >
                                    <div class="row no-gutters">
                                        <div class="col-md-4">
                                            <img src={logo3} className="card-img img2" alt="404"/>
                                        </div>
                                        <div className="col-md-8 div11">
                                            <a className="nav-link text-danger list1" href="#">REPORT</a>
                                            <div class="card-body div12">
                                                <h5 class="card-title">Muhammad Qamar <i class="fas fa-check-circle"></i></h5>
                                                <p class="card-text">Its depand on your buget if you have lots of money take a lan and reached ther if not then go buy road</p>
                                                <p class="card-text">
                                                    <small class="text-muted">
                                                        POLL 
                                                        <i className="fas fa-star star"></i>
                                                        <i class="fas fa-star"></i>
                                                        <i class="fas fa-star"></i>
                                                        <i class="far fa-star"></i>
                                                        <i class="far fa-star"></i>
                                                    <a className="nav-link list3" href="#">CORRET</a>
                                                    <a className="nav-link list4" href="#">WRONG</a>
                                                </small></p>
                                                
                                                
                                            </div>
                                            
                                        </div>
                                        
                                    </div>
                                    
                                </div>
                                <div>
                                    <nav class="nav">
                                        <a class="nav-link active" href="#">30 ANSWER</a>
                                        <a class="nav-link" href="#">IN PROGRESS</a>
                                        <a class="nav-link" href="#">10D AGO</a>
                                        <a class="nav-link" href="#">300 VIEWS</a>
                                    </nav>
                                </div>

                        </div>`

                    </div>
                    <div className="div13">
                        <div className="card mb-3 div7">
                            <ul class="nav list">
                                <li class="nav-item">
                                    <a className="nav-link text-danger" href="#">REPORT</a>
                                </li>
                            </ul>        
                            <div className="row no-gutters div9">
                                <div className="col-md-4">
                                    <img src={logo3} className="card-img img3" alt="404"/>
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body div6">
                                        <h5 class="card-title">Muhammad Hamza</h5>
                                            <p class="card-text">I want to visite the Hunza velly in this spring can you please guide me what is the best way thank you </p>
                                                
                                    </div>
                                </div>
                            </div>
                        </div>
                    <div className="div8">
                            <div class="card mb-3 div10" >
                                <div class="row no-gutters">
                                    <div class="col-md-4">
                                        <img src={logo3} className="card-img img2" alt="404"/>
                                    </div>
                                    <div className="col-md-8 div11">
                                        <a className="nav-link text-danger list1" href="#">REPORT</a>
                                        <div class="card-body div12">
                                            <h5 class="card-title">Muhammad Qamar <i class="fas fa-check-circle"></i></h5>
                                            <p class="card-text">Its depand on your buget if you have lots of money take a lan and reached ther if not then go buy road</p>
                                            <p class="card-text">
                                                <small class="text-muted">
                                                    POLL 
                                                    <i className="fas fa-star star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="far fa-star"></i>
                                                    <i class="far fa-star"></i>
                                                <a className="nav-link list3" href="#">CORRET</a>
                                                <a className="nav-link list4" href="#">WRONG</a>
                                            </small></p>
                                            
                                            
                                        </div>
                                        
                                    </div>
                                    
                                </div>
                                
                            </div>
                                <div>
                                    <nav class="nav">
                                        <a class="nav-link active" href="#">10 ANSWER</a>
                                        <a class="nav-link" href="#">CLOSED</a>
                                        <a class="nav-link" href="#">10D AGO</a>
                                        <a class="nav-link" href="#">300 VIEWS</a>
                                    </nav>
                                </div>

                        </div>`
                    </div> 
                
                </div>

            </div>
        )
    }
} 

export default Hader;