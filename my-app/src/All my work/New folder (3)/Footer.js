import React, { Component } from "react"
import me52 from "./me52.jpg"
import me55 from "./me55.jpg"
import me56 from "./me56.jpg"
import me57 from "./me57.jpg"
import images from "./images.png"
import download from "./download.png"

class Footer extends Component {
    render () {
        return (
            <div>
                <div className="div23">
                    <div className="div24">
                        <h6 className="text-danger h66">USEFUL LINKS</h6>
                        <ul class="nav flex-column">
                            <li class="nav-item">
                            <a class="nav-link" href="#"><i class="fas fa-angle-right"></i> Product Recall</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#"><i class="fas fa-angle-right"></i> Gift Vouchers</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#"><i class="fas fa-angle-right"></i> Returns & Exchange</a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link" href="#"><i class="fas fa-angle-right"></i> Shipping Options</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#"><i class="fas fa-angle-right"></i> Help & FAQs</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#"><i class="fas fa-angle-right"></i> Order History</a>
                            </li>
                        </ul>
                    </div>
                    <div className="div25">
                        <h6 className="text-danger text-center">SERVICE</h6>
                        <ul class="nav flex-column servis">
                            <li class="nav-item">
                            <a class="nav-link" href="#"><i class="fas fa-angle-right"></i> Account</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#"><i class="fas fa-angle-right"></i> Wishlist</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#"><i class="fas fa-angle-right"></i> Shopping Cart</a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link" href="#"><i class="fas fa-angle-right"></i> Return Policy</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#"><i class="fas fa-angle-right"></i> Special</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#"><i class="fas fa-angle-right"></i> Lookbook</a>
                            </li>
                        </ul>
                    </div>
                    <div className="div26">
                        <h6 className="text-danger text-center">INFORMATION</h6>
                        <ul class="nav flex-column information">
                            <li class="nav-item">
                            <a class="nav-link" href="#"><i class="fas fa-angle-right"></i> Sites Map</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#"><i class="fas fa-angle-right"></i> News</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#"><i class="fas fa-angle-right"></i> Trends</a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link" href="#"><i class="fas fa-angle-right"></i> About Us</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#"><i class="fas fa-angle-right"></i> Contact Us</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#"><i class="fas fa-angle-right"></i> My Orders</a>
                            </li>
                        </ul>
                    </div>
                    <div className="div27">
                        <h6 className="text-danger">SUBSCRIBE TO OUR NEWS</h6>
                        <p className="text-primary">Subscribe us then you get our Evnts news updates just enter your mail</p>
                        <input type="email" 
                        className="input1" 
                        id="exampleInputEmail1" 
                        aria-describedby="emailHelp"
                        placeholder=" Enter your Email"
                        />
                        <button className="btn btn-primary btn2">
                        <i class="fas fa-envelope"></i>   SUBSCRIBE
                        </button>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <h6 className="text-danger">FOLLOW US</h6>
                        <img
                            src={me56}
                            alt=""
                            className="me56"
                        />
                        <img
                            src={images}
                            alt=""
                            className="images"
                        />
                        <img
                            src={me57}
                            alt=""
                            className="me57"
                        />
                        <img
                            src={me52}
                            alt=""
                            className="me52"
                        />
                        <img
                            src={download}
                            alt=""
                            className="download"
                        />
                        <img
                            src={me55}
                            alt=""
                            className="me55"
                        />

                       
                    </div>
                    <hr className="hr1"/>
                    
                </div>
            </div>
        )
    }
}

export default Footer;