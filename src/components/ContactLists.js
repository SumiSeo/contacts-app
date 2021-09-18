import React, { useCallback } from "react";
import ContactInfo from "./ContactInfo";


const ContactLists = ({userContact,setUserContact}) =>{

  return userContact.length ? (
    <div className="contact__container">
      <ul>
     
      {userContact.map((contact) => { 
        return ( <ContactInfo 
          userContact={userContact}
          setUserContact={setUserContact} 
        contact={contact} key={contact.id}/> )})}
      </ul>
       
    </div>
  ) : (
    <div className="contact__container"></div>
  );


};


export default ContactLists;