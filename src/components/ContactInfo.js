import React, { useContext } from "react";
import { ContactsContext } from "../contexts/ContactsContext";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar,faEdit,faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const ContactInfo = ({contact}) =>{
  const { dispatch, setModify, setId } = useContext(ContactsContext);

  return (
    <li className="contact__column">
      <div className="contact__box"><h4>{contact.name}</h4></div>
      <div className="contact__box">
        <p>{contact.email}</p>
        <p>{contact.phone}</p>
      </div>
      <div className="contact__box">
        <FontAwesomeIcon 
        className="contact__icon" icon={faEdit}
        onClick={()=>{setModify(true); setId(contact.id); }} />
        <FontAwesomeIcon 
        className="contact__icon" 
        onClick={()=> dispatch({type:"ADD_FAVORITE", id:contact.id})}
        icon={faStar} />
        <FontAwesomeIcon onClick={()=>dispatch({type:"REMOVE_CONTACT", id:contact.id})} className="contact__icon" icon={faTrashAlt} />
       </div>
    </li>
  )
};

export default ContactInfo;





