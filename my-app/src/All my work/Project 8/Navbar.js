import React,{ Component }  from "react"
import {Link} from "react-router-dom"
import ns1 from "./ns1.png"
import logo3 from "./logo3.png"




class NavBar extends Component {
        render () {
            return (
                <div>
                <div className="navbar navbar-light  nav1">
                    <Link to="/" className="navbar-brand ns">
                    <img  
                        src={logo3}
                        alt= "error 404"
                        className="d-inline-block align-top logo"
                    />
                       <h6 className="name1">
                           <strong className="text-primary">n</strong>orth <strong className="text-primary">s</strong>tar 
                        </h6>
                    </Link>
                    

                    <ul class="nav justify-content-end">
                        <li class="nav-item">
                            <Link to="/" class="nav-link">
                                HOME
                            
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/askquestion">
                                ASK QUESTION
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/user">
                                USER
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/blogs">
                                BLOGS
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/contactus">
                                CONTECT US
                            </Link>
                        </li>
                        
  
                    </ul>
                     
                </div>
                
                </div>
            )
        }
}

export default NavBar;