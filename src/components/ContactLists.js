import React, { useContext } from "react";
import ContactInfo from "./ContactInfo";
import { ContactsContext } from "../contexts/ContactsContext";


const ContactLists = () =>{
  const {userContact, setUserContact} = useContext(ContactsContext);

  return userContact.length ? (
    <div className="contact__container">
      <ul>
      {userContact.map((contact) => { 
        return ( 
        <ContactInfo 
          userContact={userContact}
          setUserContact={setUserContact} 
          contact={contact} 
          key={contact.id}
        /> 
          )})}
      </ul>
    </div>
  ) : (
    <div className="contact__container add__contact">Add a new contact 😁</div>
  );


};


export default ContactLists;