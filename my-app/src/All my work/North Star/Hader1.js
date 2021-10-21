import React, { Component } from 'react';
import logo3 from "./logo3.png"

export default class Hader1 extends Component {
    render() {
        return (
            <div>
                <div className="div5">
                        <div className="card mb-3 div7">
                            <div className="row no-gutters div9">
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
                                                    </small>
                                               </p>
                                            </div>
                                        </div>
                                    </div>
                            </div>
                            <div>
                                <nav class="nav nav4">
                                       <a class="nav-link active" href="#">30 ANSWER</a>
                                       <a class="nav-link" href="#">IN PROGRESS</a>
                                       <a class="nav-link" href="#">10D AGO</a>
                                       <a class="nav-link" href="#">300 VIEWS</a>
                                </nav>
                               </div>

                        </div>
                        
                        
                    </div>
                
            </div>
        )
    }
}
