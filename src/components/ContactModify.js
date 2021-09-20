import React,{useContext,useState,useRef} from "react";
import { useEffect } from "react/cjs/react.development";
import { ContactsContext } from "../contexts/ContactsContext";


const ContactModify = () =>{
  const {dispatch,modify,setModify} = useContext(ContactsContext);
  const ref = useRef();
  const emailRef= useRef();
  const nameRef= useRef();
  const phoneRef = useRef();

  useEffect(()=>{
    if(modify === true ){
      ref.current.classList.remove("hidden");
      console.log(ref.current);
    }
  },[modify])
 
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
    ref.current.classList.add("hidden");
    setModify(false);
    setEmail("");
    setName("");
    setPhone("");
    nameRef.current.value="";
    emailRef.current.value="";
    phoneRef.current.value="";
  }

 
    return(
      <div >
        <div ref={ref} className="modify hidden">
          <h2 className="modify__title">Edit your contact</h2>
          <form 
          onClick={onHandleSubmit}
          className="modify__form">
            <div className="modify__name">
              <label >Name</label>
              <input ref={nameRef} onChange={onNameChange} type="text"/>
            </div>
            <div className="modify__email">
              <label htmlFor="modify__email">Email</label>
              <input onChange={onEmailChange} ref={emailRef} type="email"/>
            </div>
            <div className="modify__phone">
              <label htmlFor="modify__phone">Phone</label>
              <input onChange={onPhoneChange} ref={phoneRef} type="text"/>
            </div>
            <div>
              <input 
              className="modify__btn" type="submit" value="Edit"/>
            </div>
          </form>
        </div>
      </div>
    )






};


export default ContactModify;