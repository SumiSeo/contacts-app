import {v1 as uuid} from "uuid";

const ContactReduer = (state, action) =>{
  switch(action.type) {
    case "ADD_CONTACT" : 
      return [...state, {
        name: action.contact.name,
        email : action.contact.email,
        phone : action.contact.phone,
        id: uuid(),
        isFavorite: false,
      }]
    case "REMOVE_CONTACT" : 
      return state.filter(contact => contact.id !== action.id)
    default :
      return state
  }
}

export default ContactReduer;