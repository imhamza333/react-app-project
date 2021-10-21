import React, { Component } from "react";
import cover4 from "./cover4.jpg";
import Footer from "./Footer";


class ContactUs extends Component {
    render () {
        return (
            <div >
                <img src={cover4} className="img5" />
                <div className="div29">
                    <h1 className=" text3">NR - NORTH STAR</h1>
                    <h5 className=" text4">For any query & Support</h5>
                    <i className="fas fa-mobile-alt icon5"> </i>
                    <h6 className="icon5-text"> 0321-4201933  |  0333-4773714</h6>
                    <h5 className="text5">For Complaint</h5>
                    <i className="fas fa-mobile-alt icon5"> </i>
                    <h6 className="icon5-text"> 0321-4201933  |  0333-4773714</h6>
                    <i className="fas fa-envelope icon6"></i>
                    <h5 className="text6">northstar@gmail.com</h5>
                    <i className="fas fa-map-marker-alt icon7"></i>
                    <h5 className="text7"> Level 03, I-MAX Plaza, Garden Town Lahore</h5>
                </div>
                <div className="div30">
                <form>
                    <div class="form-group">
                        <label for="exampleInputEmail1" className="text8">Full Name</label>
                        <input type="email" className="form-control input1" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1" className="text9">Contact #</label>
                        <input  className="form-control input2" id="exampleInputPassword1"/>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1" className="text10">Email Address</label>
                        <input  class="form-control input3" id="exampleInputPassword1"/>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1" className="text11">Your Message</label>
                        <textarea className="input4" id="validationTextarea" placeholder=" Typer Here"></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary btn5">Submit</button>
                    </form>
                </div>
                <Footer />
                
                 
            </div>
        )
    }
}

export default ContactUs;