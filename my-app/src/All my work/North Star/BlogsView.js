import React, { Component } from 'react';

export default class BlogsView extends Component {

    state = {
        showInfo: false
    }
    
    handleInfo = () => {
        this.setState({
            showInfo: !this.state.showInfo
        })
    }

    render() {

        const {city, img, name, info} = this.props.user;

        return (
            <article className="blog">
                <div className="div27">
                    <img src={img} alt="404" />
                </div>
                <div className="div28">
                    <h3 className="h3-city text-primary">{city}</h3>
                    <h4 className="h4-name">{name}</h4>
                    <h5 className="h5-info">
                        info{""}
                        <span onClick={this.handleInfo} className="span text-primary">
                            <i className="fas fa-caret-square-down" />
                        </span>
                    </h5>
                    {this.state.showInfo && <p>{info}</p> }
                    
                </div>
            </article>
        )
    }
}
