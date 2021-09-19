import React,{createContext, useReducer,useEffect} from "react";
import ContactReduer from "../reducers/ContactReducer";


export const ContactsContext = createContext();

const ContactsContextProvider = (props) => {
  const [userContact, dispatch] = useReducer(ContactReduer, [], () => {
    const localData = localStorage.getItem("contacts");
    return localData ? JSON.parse(localData) : []
  });
  useEffect(()=>{
    localStorage.setItem("contacts", JSON.stringify(userContact))
  },[userContact])
  return (
    <ContactsContext.Provider value={{userContact, dispatch}}>
      {props.children}
    </ContactsContext.Provider>
  )
};

export default ContactsContextProvider;






