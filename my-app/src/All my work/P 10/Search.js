import React, { Component } from 'react'
import PropTypes from "prop-types"

export default class Search extends Component {

    state = {
        text: ""
    }

    static propTypes = {
        searchUsers: PropTypes.func.isRequired,
        clearUsers: PropTypes.func.isRequired,
        showClear: PropTypes.bool.isRequired,
        setAlert:PropTypes.func.isRequired,
    }

    

    onChange = e => {
        this.setState ({ [e.target.name]: e.target.value })
    }

    onSubmit = e => {
        e.preventDefault();
        if(this.state.text === ''){
            this.props.setAlert("please type something", "alert-warning")
        }else{
            this.props.searchUsers(this.state.text);
            this.setState({text: ''})
        }
    }

    render() {

        const {showClear, clearUsers} = this.props;

        return (
            <div>
                <form onSubmit={this.onSubmit} className="form">
                    <input  type="text" 
                            name="text" 
                            placeholder=" Search here...." 
                            className="form-control from1"
                            value={this.state.text}
                            onChange={this.onChange}
                    />
                    
                    <input  type="submit" 
                            value="SEARCH" 
                            
                            className="btn btn-danger btn-block form1" />
                </form>
                {showClear && (
                <button className="btn btn-dark btn-block form2" 
                        onClick={clearUsers}
                        >
                    CLEAR
                </button>)}
            
            </div>
        )
    }
}


