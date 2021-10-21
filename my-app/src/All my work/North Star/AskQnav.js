import React, { Component } from 'react';
import {Link} from "react-router-dom";

export default class AskQnav extends Component {
    render() {
        return (
                <div>
                    <ul class="nav nav3">
                        <li class="nav-item">
                            <Link class="nav-link active" href="#">Recent</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" href="#">Hot!</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" href="#">Most Votes</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" href="#">Most Answers</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" href="#">Most Views</Link>
                        </li>
                        
                    <input type="search"  className="form-control search" placeholder="  Search.... " />
                    <button class="btn btn-primary my-2 my-sm-0 btn4" type="submit">Search</button>
                    </ul>
                </div>
        )
    }
}
