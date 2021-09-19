import React,{useEffect} from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Main from "../scss/main.scss"
import Header from "./Header";
import FavoriteLists from "./FavoriteLists";
import ContactForm from "./ContactForm";
import ContactLists from "./ContactLists";
import ContactsContextProvider from "../contexts/ContactsContext";


const App = ( ) => {
  
  useEffect(()=>{
    //When user lands on the page display all the contacts in the local storage
    // if(localStorage.getItem("contact")){
    //   const localData = JSON.parse(localStorage.getItem("contact"));
    //   console.log(`useEffect: firstTime Redner ${localData}`)
    //   setUserContact(localData);
    // }
    
  },[]);

  
  return(
    <div className="main">
      <BrowserRouter>
        <div className="main__container">
          <ContactsContextProvider >
            <div className="main__column">
              <Header/>
              <Route path="/" exact component={ContactLists} />
              <Route path="/favorite" component={FavoriteLists}/>
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