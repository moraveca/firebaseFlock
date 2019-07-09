import React from "react";
import "./style.css";

function NavBar(props) {
    return (

      <nav className="navbar navbar-light bg-light .navbar-expand{-sm|-md|-lg|-xl">
      <a className="navbar-brand" href="index.html">
      <img src="Flock-transparent.png" width="10%" height="20%" alt="" /></a>
        <ul className="nav justify-content-end">
              <li className="nav-item">
                <a className="nav-link active" href="index.html">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="flock.html">About</a>
              </li>
              <li className="nav-item dropdown">
                      <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Profile
                      </a>
                      <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <a className="dropdown-item" href="">Volunteer Family Board</a>
                        <a className="dropdown-item" href="">Seeking Family Board</a>
                      </div>
                    </li>
                    </div>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="Resource.html">Resource Guide</a>
                </li>
            </ul>
            <nav className="navbar navbar-light bg-light" >
                <form className="form-inline" action="Resource.html">
                  <button className="btn btn-sm btn-outline-secondary">Resources</button>
                </form>
              </nav>
      
    </nav>


    );
}

export default NavBar;
