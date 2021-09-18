import React,{useState} from "react";

const ContactForm = ({email, setEmail, phone, setPhone, name, setName}) =>{
 
  const onNameChange = () =>{
    const nameInput = document.querySelector(".name__container input");
    const nameLetter = nameInput.value.slice(0,1).toUpperCase()+nameInput.value.slice(1).toLowerCase();
    setName(nameLetter);
    
  }
  const onEmailChange = () =>{
    const emailInput = document.querySelector(".email__container input");
    const REGEX_EMAIL = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (REGEX_EMAIL.test(emailInput.value)) {
      setEmail(emailInput.value);
    }
    else{
      emailInput.style.border = "1px solid red";
    }
  }

  const onPhoneChange = () =>{
    const phoneInput = document.querySelector(".phone__container input");
    const REGEX_PHONE =/^[0-9]*$/;
    if (REGEX_PHONE.test(phoneInput.value)) {
      setPhone(phoneInput.value);
    }
    else{
      phoneInput.style.border = "1px solid red";
    }
  }

  const onSubmitClick = (e) =>{
    e.preventDefault();
    //Check name and convert to delicate string
    if(name, email){
      localStorage.setItem("userName", name);
      localStorage.setItem("userEmail", email);
      localStorage.setItem("userPhone", phone);
    }
  }

  return(
    <div>
      <div className="form">
        <h2 className="form__header">Add a new contact</h2>
          <form action="#" method="post">
            <div className="name__container">
              <input 
                required 
                id="contact__name" 
                name="contact__name" 
                type="text"
                placeholder="name"
                onChange={onNameChange}
              />
            </div>
            <div className="email__container">
              <input 
                required 
                id="contact__email" 
                name="contact__email" 
                type="email"
                onChange = {onEmailChange} 
                placeholder="email"
              />
            </div>
            <div className="phone__container">
              <input 
                id="contact__phone" 
                name="contact__phone" 
                type="text"
                onChange={onPhoneChange}
                placeholder="phone"
              />
            </div>
            <input onClick={onSubmitClick}type="submit" value="Add"/>
          </form>
      </div>
    </div>
  )

}


export default ContactForm;