import React, { Component } from "react"
import payment1 from "./payment1.png"
import payment2 from "./payment2.png"
import payment3 from "./payment3.png"
import payment4 from "./payment4.png"

class Footer1 extends Component{
    render () {
        return (
            <div className="div30">
                <div className="div28">
                    <h1 className="h101"><strong>SHOP</strong>MART</h1>
                    <i class="fas fa-map-marker-alt icon3"> Company 12/34 - West 21st street, New York, USA</i>
                    <i class="fas fa-phone-alt icon4">  +(800) 0123 456 789</i>
                    <i class="fas fa-envelope-open icon5"> support@templates.com</i>
                </div>
                <div className="div29">
                    <pre className="h666">Copyright © 2017<strong> ShopMart </strong> . All Rights Reserved.</pre>

                    <img 
                        src={payment1}
                        className="payment1"
                        alt="404"
                    />
                    <img 
                        src={payment2}
                        className="payment2"
                        alt="404"
                    />
                    <img 
                        src={payment3}
                        className="payment3"
                        alt="404"
                    />
                    <img 
                        src={payment4}
                        className="payment4"
                        alt="404"
                    />

                </div>
                

            </div>
        )
    }
}

export default Footer1;