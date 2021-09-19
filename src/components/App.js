import React,{useState,useEffect} from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Main from "../scss/main.scss"
import Header from "./Header";
import FavoriteLists from "./FavoriteLists";
import ContactForm from "./ContactForm";
import ContactLists from "./ContactLists";



const App = ( ) => {
    // return localData ? JSON.parse(localData) : []
  const [userContact, setUserContact] = useState([
    {
      name:"Jane",
      email : "qkobr94@gmail.com",
      phone : "04034324",
      id:"1",
    },
    {
      name:"Tom",
      email : "tomholland94@gmail.com",
      phone : "04034324",
      id:"2",
    },
  ]); 



  useEffect(()=>{
    //When user lands on the page display all the contacts in the local storage
    if(localStorage.getItem("contact")){
      const localData = JSON.parse(localStorage.getItem("contact"));
      console.log(`useEffect: firstTime Redner ${localData}`)
      setUserContact(localData);
    }
  },[]);
  return(
    <div className="main">
      <BrowserRouter>
          <div className="main__container">
          <div className="main__column">
            <Header/>
            <Route
              path="/" 
              exact 
              render={() => <ContactLists setUserContact={setUserContact} userContact={userContact} />}
              />
            <Route 
              path="/favorite" 
              component={FavoriteLists}/>
          </div>
        
          <div className="main__column">
            <ContactForm
              userContact={userContact}
              setUserContact={setUserContact}
            />
          </div>
         
         
        </div>
      </BrowserRouter>
    </div>
  )
};


export default App;