import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Main from "../scss/main.scss"
import Header from "./Header";
import FavoriteLists from "./FavoriteLists";
import ContactForm from "./ContactForm";


const App = ( ) => {
  return(
    <div>
      <BrowserRouter>
        <div className="main">
          <Route path="/" exact component={ContactForm}/>
          <Route path="/favorite" exact component={FavoriteLists}/>
          <Header/>
         
        </div>
      </BrowserRouter>
    </div>
  )
};


export default App;