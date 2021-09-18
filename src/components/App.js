import React,{useState,useEffect,useReducer} from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Main from "../scss/main.scss"
import Header from "./Header";
import FavoriteLists from "./FavoriteLists";
import ContactForm from "./ContactForm";
import ContactLists from "./ContactLists";


const App = ( ) => {

  const [userContact, setUserContact] = useState([{
    name: "Sumi",
    email: "qkobr94@gmail.com",
    phone: "010 3447 0136",
    id:1,
  },
  {
    name: "Carla",
    email: "carlabruni@gmail.com",
    phone: "010 8374 2038",
    id:2,
  }]); 
  
 
  useEffect(()=>{
      localStorage.setItem("contact", JSON.stringify({userContact}));
      if(localStorage.getItem("contact")){
        
        console.log(JSON.parse(localStorage.getItem("contact")))
      }
      
  },[userContact]);
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