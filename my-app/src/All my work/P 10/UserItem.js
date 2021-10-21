import React from 'react'
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";


const UserItem = ({user: {avatar_url, html_url, login}}) => {

    // constructor() {
    //     super();
    //     this.state = {
    //         id: "1",
    //         login: "mojombo",
    //         avatar_url: "https://avatars0.githubusercontent.com/u/1?v=4",
    //         html_url: "https://github.com/mojombo"
    //     }
    // }

    
        return (
            <div className="card text-center">
                <img src={avatar_url} 
                alt="404" 
                className="img1" 
                 />
                
                <h3>
                    {login}
                </h3>

                <Link to={`/user/${login}`} className="btn btn-danger btn-sm btn-1 btn1">
                    More 
                </Link>

            </div>
        )
    
}

export default  UserItem;

UserItem.propTypes = {
    user:PropTypes.object.isRequired,
}