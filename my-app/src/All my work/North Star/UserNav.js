import React, { Component } from 'react';
import {Link } from "react-router-dom";

export default class UserNav extends Component {
    render() {
        return (
            <div>
                <ul class="nav nav3">
                        <li class="nav-item">
                            <Link class="nav-link active" href="#">New User</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" href="#">Voters</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" href="#">Editors</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" href="#">Reputation</Link>
                        </li>
                        <input type="search"  className="form-control search1" placeholder="  Search.... " />
                         
                   
                    </ul>
                
            </div>
        )
    }
}
