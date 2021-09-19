import React,{createContext,useState} from "react";
import {v1 as uuid} from "uuid";

export const ContactsContext = createContext();

const ContactsContextProvider = (props) => {
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

  const addContact = (name, email, phone) =>{
    setUserContact([...userContact, {name, email, phone, id:uuid() }]);
  }

  const removeContact = (id) =>{
    setUserContact(userContact.filter(contact => contact.id !== id))
  };

  return (
    <ContactsContext.Provider value={{userContact, setUserContact, addContact, removeContact}}>
      {props.children}
    </ContactsContext.Provider>

  )

};

export default ContactsContextProvider;






