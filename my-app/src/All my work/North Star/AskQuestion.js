import React, { Component } from "react";
import AskQnav from "./AskQnav";
import UserData from "./UserData";
import Footer from "./Footer";

class AskQuestion extends Component {

   
    render () {
        
        return (
            <div className="div35">
                <AskQnav />
                
                    <UserData />
                
                <div className="div21">
                    <h3 className="text-primary text2">Hot Tours Questions</h3>
                    <h6 className="text-danger text1">i want to visit naran. help me any idea i am in hurry</h6>
                    <h6 className="text-danger text1">i want to visit naran. help me any idea i am in hurry</h6>
                    <h6 className="text-danger text1">i want to visit naran. help me any idea i am in hurry</h6>
                    <h6 className="text-danger text1">i want to visit naran. help me any idea i am in hurry</h6>
                    <h6 className="text-danger text1">i want to visit naran. help me any idea i am in hurry</h6>
                    <h6 className="text-danger text1">i want to visit naran. help me any idea i am in hurry</h6>
                    <h6 className="text-danger text1">i want to visit naran. help me any idea i am in hurry</h6>
                    <h6 className="text-danger text1">i want to visit naran. help me any idea i am in hurry</h6>
                </div>
                <Footer />
                {/* <div class=" ">
                    <div class="card-header div21">
                        <div className="number">
                            <h4 className="h4">{this.state.vote}</h4>
                            <h6 className="h6">{this.state.name}</h6>

                        </div>
                        <div className="number1">
                            <h4 className="h4">{this.state.vote}</h4>
                            <h6 className="h60">{this.state.Ans}</h6>

                        </div>
                        
                        <h4 className="heading1">now check thsi </h4>
                        <p>check this </p>
        
                    </div>
                    
                </div> */}
            </div>
        )
    }
}

export default AskQuestion;