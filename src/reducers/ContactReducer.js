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
    case "MODIFY_CONTACT" :
      state.filter(contact => contact.id === action.contact.id)
      .map(contact => {return (
        contact.name =  action.contact.name,
        contact.email =  action.contact.email,
        contact.phone =  action.contact.phone,
        contact.id = action.contact.id,
        contact.isFavorite = contact.isFavorite)}) ;
      return [...state];
    case "REMOVE_CONTACT" : 
      return state.filter(contact => contact.id !== action.id);
    case "ADD_FAVORITE" :
      state.filter(contact => contact.id == action.id).map(contact=>contact.isFavorite=!contact.isFavorite)
      return [...state];
    default :
      return state;
  }
}

export default ContactReduer;