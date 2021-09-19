import React,{ useState, useContext } from "react";
import { ContactsContext } from "../contexts/ContactsContext";

let nameInput;
let emailInput;
let phoneInput;

const ContactForm = () =>{
  const {userContact, addContact} = useContext(ContactsContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  
  const onNameChange = () =>{
    nameInput = document.querySelector(".name__container input");
    const nameLetter = nameInput.value.slice(0,1).toUpperCase()+nameInput.value.slice(1).toLowerCase();
    setName(nameLetter);
  }

  const onEmailChange = () =>{
    emailInput = document.querySelector(".email__container input");
    const REGEX_EMAIL = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (REGEX_EMAIL.test(emailInput.value)) {
      setEmail(emailInput.value);
    }
    else{
      emailInput.style.border = "1px solid red";
    }
  }

  const onPhoneChange = () =>{
    phoneInput = document.querySelector(".phone__container input");
    const REGEX_PHONE =/^[0-9]*$/;
    if (REGEX_PHONE.test(phoneInput.value)) {
      setPhone(phoneInput.value);
    }
    else{
      phoneInput.style.border = "1px solid red";
    }
  }


  const onHandleSubmit = (e) =>{
    e.preventDefault();
    addContact(name,email,phone);
    setEmail("");
    setName("");
    setPhone("");
    nameInput.value="";
    emailInput.value="";
    phoneInput.value="";
    
  }


  return(
    <div>
      <div className="form">
        <h2 className="form__header">Add a new contact</h2>
          <form onSubmit ={onHandleSubmit}>
            <div className="name__container">
              <input 
                required 
                type="text"
                placeholder="name"
                onChange={onNameChange}
              />
            </div>
            <div className="email__container">
              <input 
                required 
                type="email"
                onChange = {onEmailChange} 
                placeholder="email"
              />
            </div>
            <div className="phone__container">
              <input 
                type="text"
                onChange={onPhoneChange}
                placeholder="phone"
              />
            </div>
            <input type="submit" value="Add"/>
          </form>
      </div>
    </div>
  )

}


export default ContactForm;