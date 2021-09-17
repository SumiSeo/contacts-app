import React from "react";

const ContactForm = () =>{
  const onEmailBlur = () =>{
    const emailInput = document.querySelector(".emailContainer input");
    const REGEX_EMAIL = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (REGEX_EMAIL.test(emailInput.value)) {
      console.log("This is valid")
    }
    else{
      console.log("nono")
    }
  }

  const onPhoneBlur = () =>{
    const phoneInput = document.querySelector(".phoneContainer input");
    const REGEX_PHONE =/^[0-9]*$/;
    if (REGEX_PHONE.test(phoneInput.value)) {
      console.log("This is valid phone")
    }
    else{
      console.log("nono Phone")
    }
  }

  const onSubmitClick = (e) =>{
    e.preventDefault();
    //Check name and convert to delicate string
    const nameInput = document.querySelector(".nameContainer input");
    const nameLetter = nameInput.value.slice(0,1).toUpperCase()+nameInput.value.slice(1).toLowerCase();
  }

  return(
    <div>
      <form action="#" method="post">
        <div className="nameContainer">
          <label htmlFor="contactName">Name</label>
          <input required id="contactName" name="contactName" type="text"/>
        </div>
        <div className="emailContainer">
          <label htmlFor="contactEmail">Email</label>
          <input onBlur = {onEmailBlur}required id="contactEmail" name="contactEmail" type="email"/>
        </div>
        <div className="phoneContainer">
          <label htmlFor="contactPhone">Phone</label>
          <input onBlur={onPhoneBlur}id="contactPhone" name="contactPhone" type="text"/>
        </div>
        <input onClick={onSubmitClick}type="submit" value="add"/>
      </form>
    </div>
  )

}


export default ContactForm;