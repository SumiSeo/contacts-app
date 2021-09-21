import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar,faUsers } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const Header = () =>{
  return (
    <div className="nav">
      <ul className="nav__lists">
        <li className="nav__list">
          <Link className="nav__link" to="/">
            <FontAwesomeIcon icon={faUsers} />
          </Link>
        </li>
        <li className="nav__list">
          <Link className="nav__link" to="/favorite"> 
            <FontAwesomeIcon icon={faStar} />
          </Link>
        </li>
      </ul>
     
    </div>
  )



};


export default Header;