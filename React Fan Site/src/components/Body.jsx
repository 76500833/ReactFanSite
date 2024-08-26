import React from "react";
import ReactDOM from "react-dom"

function Body() {
    return(
        <>        <div className="body">
            <h1 className="header">Fun facts about react</h1>
        </div>
        <div className="bullet-container">
            <ul className="list">
                <li>Was first released in 2013
Was originally created by Jordan Walke
Has well over 200K stars on GitHub
Is maintained by Meta
Powers thousands of enterprise apps, including mobile apps</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 200K stars on GitHub</li>
                <li>Is maintained by Meta</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
        </div>
        </>

    )
}

export default Body;