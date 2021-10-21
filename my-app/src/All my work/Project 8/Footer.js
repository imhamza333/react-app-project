import React, { Component } from "react"

class Footer extends Component {
    render () {
        return (
            <div>
                <div className="div14">
                    <div className="div18">
                        <h3 className=" text-center text-primary footer">About North Star</h3>
                        <br/>
                        <div className="div19">
                            <p className="text-center">
                                North Star is tavling guide compny 
                                if you want to visite the north area 
                                of pakistan butt you have no idea how 
                                and what you do fist you can connect withe us
                            </p>
                        </div>
                        
                        <i className="fab fa-facebook-f icon"></i>
                        <i className="fab fa-youtube icon2"></i>
                        <i className="fab fa-linkedin-in icon3"></i>
                        <i className="fab fa-twitter icon4"></i>
                    </div>
                    <div className="div20">
                        <i class="fas fa-map-marker-alt icon1"></i>
                        <p className="adrs"> 
                            21 international market 
                            <br/>
                            Lahore, pakistan
                        </p>
                        <i class="fas fa-phone icon1"></i>
                        <p className="adrs1"> 
                            +92 321 3333333 
                        </p>
                        <i class="fas fa-envelope icon1"></i>
                        <p className="adrs1"> 
                            northstar@gmail.com 
                        </p>
                    

                    </div>

                </div>
                
            </div>
        )
    }
}

export default Footer;