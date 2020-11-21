import React, {Component} from 'react';
import "./Sidenav.css";
import 'bootstrap/dist/css/bootstrap.min.css';

class Sidenav extends Component
{


    render ()
    {
        return (
            <div className="sidenav col-xs-2 col-sm-3 col-md-2 col-lg-2">
                <span className="categoryHeader">Categories:</span>
                <button>Most Viewed</button>
                <button>Most Shared</button>
            </div>
        )
    }
}

export default Sidenav;
