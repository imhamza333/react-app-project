import React,{Component} from "react"
import f from "./f.jpg"
import g from "./g.png"
import uk from "./uk.jpg"
import {Link} from "react-router-dom"


class NavBar extends Component {
    render () {
        return (
            <div>
                <div className="div1">
                        <ul class="nav nav-pills">
                            <li className="nav-item dropdown left">
                                <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                                <img 
                                src={uk}
                                alt=""
                                className="english"
                                />   English
                                </a>
                                <div class="dropdown-menu">
                                <a class="dropdown-item" href="#">
                                <img 
                                src={f}
                                alt=""
                                className="french"
                                />  French</a>
                                <a class="dropdown-item" href="#">
                                <img 
                                src={g}
                                alt=""
                                className="german"
                                />  German</a>
                                </div>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                                    Currency $
                                </a>
                                <div class="dropdown-menu">
                                <a class="dropdown-item" href="#">€ Euros</a>
                                <a class="dropdown-item" href="#">$ Dollar</a>
                                </div>
                            </li>
                            <li class="nav-item">
                                <Link to="/myaccount" className="nav-link right" >My Account</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/wishList">Wishlist</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/checkOut">Checkout</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/campres">Campres</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/login">Log in</Link>
                            </li>
                            
                        </ul>
                    <hr/>
                </div>
               
                <div className="div2 navbar1 stickey content">
                    <h6 className="h6"><strong>Shop</strong>Mart </h6>
                    <ul class="nav justify-content-center ul">
                        <li class="nav-item">
                            <a class="nav-link " href="#">HOME</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">PAGES</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">CAMERA</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">LAPTOPS</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">TVS & AUDIO</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">CELL PHONES</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">ACCESORIES</a>
                        </li>
                    </ul>
                    <div className="div6">
                        <i className="fas fa-shopping-cart icon"></i>
                    </div>
                    <div className="div5">
                        <i className="fas fa-search icon1"></i>
                    </div>
                </div>
                 
                <div className="div3">
                    <div className="div4">
                        <h1 className="text-center h1">Special Offer</h1>
                        <h2 className="text-center h2">BEST COLLECTION</h2>
                        <pre className="text-center pre">
                            i have no idea what thye write in this place so i am writning 
                                                 <br/>
                                    this one here then any one understande this ok
                        </pre>
                        <button className="btn btn-primary btn1">
                            SHOP COLLECTION
                        </button>
                    </div>
                </div>


                




        </div>
        )
    }
}

// window.onscroll = function() {myFunction()};

// const navbar1 = document.getElementById("navbar1");
// const sticky = navbar1;

// function myFunction() {
//   if (window.pageYOffset >= sticky) {
//     navbar1.classList.add("sticky")
//   } else {
//     navbar1.classList.remove("sticky");
//   }
// }


export default NavBar;
