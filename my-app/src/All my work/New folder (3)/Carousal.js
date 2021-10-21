import React, { Component } from "react"
import crsl from "./crsl.png"
import one from "./one.jpg"
import two from "./two.jpg"

class Carousal extends Component {
    render () {
        return (
            <div className="div20">
                <div className="div21">
                    <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
                        <ol class="carousel-indicators">
                            <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
                            <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                            <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                        </ol>
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                            <img src={one} class="d-block w-100" alt="404"/>
                            <div class="carousel-caption d-none d-md-block">
                                <h5>First slide label</h5>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </div>
                            </div>
                            <div class="carousel-item">
                            <img src={one} class="d-block w-100" alt="404"/>
                            <div class="carousel-caption d-none d-md-block">
                                <h5>Second slide label</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                            </div>
                            <div class="carousel-item">
                            <img src={one} class="d-block w-100" alt="404"/>
                            <div class="carousel-caption d-none d-md-block">
                                <h5>Third slide label</h5>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                            </div>
                            </div>
                        </div>
                        <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true">
                               
                            </span>
                            <span class="sr-only">Previous</span>
                        </a>
                        
                        <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="sr-only"></span>
                            
                        </a>
                        </div>

                </div>
                <div className="div22">
                    <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src={crsl} className="d-block w-100 img6" alt="404"/>
                        </div>
                        <div class="carousel-item">
                        <img src={crsl} className="d-block w-100 img6" alt="404"/>
                        </div>
                        <div class="carousel-item">
                        <img src={crsl} className="d-block w-100 img6" alt="404"/>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Carousal;