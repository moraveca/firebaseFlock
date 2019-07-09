import React from "react";
import "./style.css";

function NavBar(props) {
    return (
        <nav className="navbar navbar-light bg-light .navbar-expand{-sm|-md|-lg|-xl">
            <a className="navbar-brand" href="index.html">
                <img src="Flock-transparent.png" width="20%" height="20%" className="d-inline-block align-top" alt="" />
            </a>

            {/* <div>display: {!props.user.displayName ? 
                            console.log("nope") :

                console.log("props: ", props.user.displayName) 
                }
                
            {/* <img href={href}></img> */}
            {/* </div> */}


            <ul className="nav justify-content-end">
                <li className="nav-item">
                    <a className="nav-link active" href="/">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/bulletin">Bulletin Board</a>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Profile
        </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <a className="dropdown-item" href="/profile">My Profile</a>
                        <a className="dropdown-item" href="/messages">Messages</a>
                    </div>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/resources">Resource Guide</a>
                </li>
            </ul>
        </nav>

    );
}

export default NavBar;
