import React,{createContext, useReducer, useEffect, useState} from "react";
import ContactReduer from "../reducers/ContactReducer";


export const ContactsContext = createContext();

const ContactsContextProvider = (props) => {
  const [modify, setModify] = useState(false);
  const [userContact, dispatch] = useReducer(ContactReduer, [], () => {
    const localData = localStorage.getItem("contacts");
    return localData ? JSON.parse(localData) : []
  });

  

  useEffect(()=>{
    localStorage.setItem("contacts", JSON.stringify(userContact));
    console.log(userContact);
  },[userContact])
  return (
    <ContactsContext.Provider value={{userContact, dispatch,modify,setModify}}>
      {props.children}
    </ContactsContext.Provider>
  )
};

export default ContactsContextProvider;






