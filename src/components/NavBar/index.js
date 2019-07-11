import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { signOut } from "../../api/firebase/auth";
import { userInfo } from "os";


function NavBar(props) {
  return (


    <nav className="navbar navbar-light bg-light .navbar-expand{-sm|-md|-lg|-xl">
      <Link className="navbar-brand" to="/">
        <img src="Flock-transparent.png" width="10%" height="20%" alt="" /></Link>
      <ul className="nav justify-content-end" >
        <li className="nav-item">
          <Link className="nav-link active" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Profile
                      </a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <Link className="dropdown-item" to="/profile">My Profile</Link>
            <Link className="dropdown-item" to="/bulletin">My Messages</Link>
          </div>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/resources">Resource Guide</Link>
        </li>
      </ul>
      <nav className="navbar navbar-light bg-light" >
        <form className="form-inline">
          {props.user.uid && 
          <ul className="nav justify-content-end" >
            <li className="nav-item">
          <img src={props.user.photoURL} alt="Smiley face" height="42" width="42" />
          </li>
          <li className="nav-item">
            <div>    </div>
            </li>
          <button className="btn btn-sm btn-outline-secondary"
          onClick={signOut}>Logout</button>
          </ul>
          }
        </form>
      </nav>

    </nav>


  );
}

export default NavBar;
