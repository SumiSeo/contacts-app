import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Main from "../scss/main.scss"

import ContactsContextProvider from "../contexts/ContactsContext";

import Header from "./Header";
import ContactForm from "./ContactForm";
import ContactLists from "./ContactLists";
import FavoriteLists from "./FavoriteLists";
import ContactModify from "./ContactModify";


const App = () => {
  
  return(
    <div className="main">
      <BrowserRouter>
        <div className="main__container">
          <ContactsContextProvider >
            <div className="main__column">
              <Header/>
              <Route path="/" exact component={ContactLists} />
              <Route path="/favorite" component={FavoriteLists}/>
              <ContactModify />
            </div>
            <div className="main__column">
              <ContactForm/>
            </div>
          </ContactsContextProvider>
        </div>
      </BrowserRouter>
    </div>
  )
};


export default App;