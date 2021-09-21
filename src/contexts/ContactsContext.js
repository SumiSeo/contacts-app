import React,{createContext, useReducer, useEffect, useState} from "react";
import ContactReduer from "../reducers/ContactReducer";

export const ContactsContext = createContext();

const ContactsContextProvider = (props) => {
  const [modify, setModify] = useState(false);
  const [id,setId] = useState("");
  const [userContact, dispatch] = useReducer(ContactReduer, [], () => {
    const localData = localStorage.getItem("contacts");
    return localData ? JSON.parse(localData) : []
  });  

  useEffect(()=>{
    localStorage.setItem("contacts", JSON.stringify(userContact));
  },[userContact])
  
  return (
    <ContactsContext.Provider value={{userContact, dispatch, modify, setModify, id,setId}}>
      {props.children}
    </ContactsContext.Provider>
  )
};

export default ContactsContextProvider;






