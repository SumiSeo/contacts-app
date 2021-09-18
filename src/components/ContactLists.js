import React from "react";
import ContactInfo from "./ContactInfo";


const ContactLists = ({userContact}) =>{
  return(
    <div className="contact__container">
      <ContactInfo userContact={userContact}/>
     
    </div>
  )


};


export default ContactLists;