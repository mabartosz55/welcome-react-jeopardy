import React from "react";
import { Link } from "react-router-dom"

function Navigation(props) {
    return (
        < div className="Navigation">
            <ul>
                <li><Link to="/"> home </Link></li>
                <li><Link to="/clock"> clock </Link></li>
                <li><Link to="/contact"> contact </Link></li>
                <li><Link to="/TestFetch"> test fetch </Link></li>
                <li><Link to="/Jeopardy"> jeopardy </Link></li>
            
            </ul>
            
        </div>
    )

}
export default Navigation
