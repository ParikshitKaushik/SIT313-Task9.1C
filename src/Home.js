import React from "react";
import { Link } from "react-router-dom";

function Home(props) {
    return (
        <div>
            <div>
                <h1>
                    <Link to="/login">Login</Link>
                </h1>
            </div>
            <br />
            <h2>{props.name ? `Welcome - ${props.name}` : "Please Login"}</h2>
        </div>
    );
}

export default Home;