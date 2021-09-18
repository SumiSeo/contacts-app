import React,{useState,useEffect} from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Main from "../scss/main.scss"
import Header from "./Header";
import FavoriteLists from "./FavoriteLists";
import ContactForm from "./ContactForm";
import ContactLists from "./ContactLists";


const App = ( ) => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [userContact, setUserContact] = useState({
    userContactName: "",
    userContactEmail: "",
    userContactPhone: "",
  }); 
  
 
  useEffect(()=>{
    const contactsName = localStorage.getItem("userName") ?  localStorage.getItem("userName") : "";
    const contactsEmail = localStorage.getItem("userEmail") ?  localStorage.getItem("userEmail") : "";
    const contactsPhone = localStorage.getItem("userPhone") ?  localStorage.getItem("userPhone") : "";
    setUserContact({
      ...userContact,
      "userContactName":contactsName,
      "userContactEmail": contactsEmail,
      "userContactPhone": contactsPhone,
    });

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
              render={() => <ContactLists userContact={userContact} />}
              />
            <Route 
              path="/favorite" 
              component={FavoriteLists}/>
          </div>
        
          <div className="main__column">
            <ContactForm
              name={name}
              setName={setName}
              email={email}
              setEmail={setEmail}
              phone={phone}
              setPhone={setPhone}
            />
          </div>
         
          {/* <Header/> */}
         
        </div>
      </BrowserRouter>
    </div>
  )
};


export default App;