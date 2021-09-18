import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar,faEdit } from "@fortawesome/free-solid-svg-icons";

const ContactInfo = ({userContact}) =>{
  return (
    <div className="contact__column">
      <div className="contact__box">
        <h4>{userContact.userContactName}</h4>
      </div>
      <div className="contact__box">
        <p>{userContact.userContactEmail}</p>
        <p>{userContact.userContactPhone}</p>
      </div>
      <div className="contact__box">
      <FontAwesomeIcon className="icon" icon={faEdit} />
      <FontAwesomeIcon className="icon"icon={faStar} />
      </div>
      
     
      
    </div>
  )



};


export default ContactInfo;