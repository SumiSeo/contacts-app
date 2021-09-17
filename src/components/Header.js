import React from "react";
import { BrowserRouter, Route,Link } from "react-router-dom";
const Header = () =>{
  return (
    <div className="nav">
      <Link to="/favorite">Favorite</Link>
      <br/>
      <Link to="/">+</Link>
      <br/>
      <Link to="/contacts">All lists</Link>
    </div>
  )



};


export default Header;