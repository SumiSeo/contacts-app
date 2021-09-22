import React, { useContext } from "react";
import ContactInfo from "./ContactInfo";
import { ContactsContext } from "../contexts/ContactsContext";

const FavoriteLists = () =>{
  const {userContact, setUserContact} = useContext(ContactsContext);
 
  return (
    <div className="contact__container favorite">
      <ul>
      {userContact.filter(contact=>contact.isFavorite===true).map((contact) => { 
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
  ) 
}

export default FavoriteLists;





