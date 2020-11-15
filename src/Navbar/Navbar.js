import React, {Component} from 'react';
import {withRouter} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';

class Navbar extends Component
{
    constructor ()
    {
        super();
        this.state = {
            activeTab: 'Home'
        }
    }
    

    clickHome = () =>
    {
        this.setState({activeTab: 'Home'});
        this.props.history.push("/");
    };

    clickAbout = () =>
    { 
        this.setState({activeTab: 'About'});
        this.props.history.push("/About");
    };

    render() {
        return (
            <div className="navbar">
                <div className="buttons">
                    <button onClick={this.clickHome} className={ this.state.activeTab === 'Home' ? 'active' : '' }>Home</button>
                    <button onClick={ this.clickAbout } className={ this.state.activeTab === 'About' ? 'active' : '' }>About</button>
                </div>
            </div>
        )
    }
}

export default withRouter(Navbar);
