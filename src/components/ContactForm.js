import React,{ useState, useContext,useRef } from "react";
import { ContactsContext } from "../contexts/ContactsContext";


const ContactForm = () =>{
  const emailRef= useRef();
  const nameRef= useRef();
  const phoneRef = useRef();
  const {dispatch} = useContext(ContactsContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  
  const onNameChange = () =>{
    const nameLetter = nameRef.current.value.slice(0,1).toUpperCase()+nameRef.current.value.slice(1).toLowerCase();
    setName(nameLetter);
  }

  const onEmailChange = () =>{
    const REGEX_EMAIL = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if ( REGEX_EMAIL.test(emailRef.current.value)) {
      setEmail(emailRef.current.value);
      emailRef.current.style.border = "none";
    }
    else if(!emailRef.current.value){
      emailRef.current.style.border = "none";
    }
    else{
      emailRef.current.style.border = "1px solid red";
    }
  }

  const onPhoneChange = () =>{
    const REGEX_PHONE =/^[0-9]*$/;
    if (REGEX_PHONE.test(phoneRef.current.value)) {
      setPhone(phoneRef.current.value);
      phoneRef.current.style.border = "none";
    }
    else if(!phoneRef.current.value){
      phoneRef.current.style.border = "none";
    }
    else{
      phoneRef.current.style.border = "1px solid red";
    }
  }


  const onHandleSubmit = (e) =>{
    e.preventDefault();
    dispatch({type:"ADD_CONTACT", contact : {
      name,email,phone
    }});
    setEmail("");
    setName("");
    setPhone("");
    nameRef.current.value="";
    emailRef.current.value="";
    phoneRef.current.value="";
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
                ref={nameRef}
              />
            </div>
            <div className="email__container">
              <input 
                required 
                type="email"
                onChange = {onEmailChange} 
                placeholder="email"
                ref={emailRef}
              />
            </div>
            <div className="phone__container">
              <input 
                type="text"
                onChange={onPhoneChange}
                placeholder="phone"
                ref= {phoneRef}
              />
            </div>
            <input className="form__add"type="submit" value="Add"/>
          </form>
      </div>
    </div>
  )
};


export default ContactForm;