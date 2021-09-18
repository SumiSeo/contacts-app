import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar,faEdit,faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const ContactInfo = ({contact,setUserContact,userContact}) =>{
  const removeContact = (id) => {
    setUserContact(userContact.filter(contact=>contact.id !== id));

  }
  return (
    <li className="contact__column">
      <div className="contact__box">
        <h4>{contact.name}</h4>
      </div>
      <div className="contact__box">
        <p>{contact.email}</p>
        <p>{contact.phone}</p>
      </div>
      <div className="contact__box">
      <FontAwesomeIcon className="icon" icon={faEdit} />
      <FontAwesomeIcon className="icon"icon={faStar} />
      <FontAwesomeIcon 
      onClick={()=>removeContact(contact.id)}
      className="icon"icon={faTrashAlt} />
       </div>
    </li>
      
   
  )



};


export default ContactInfo;