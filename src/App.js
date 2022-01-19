import AddContact from "./Components/AddContact";
import Header from './Components/Header'
import ContactList from "./Components/ContactList";
import './App.css'
import { useState } from "react";
import data from "./data";



function App() {
  const [contacts , setContacts ] = useState(data)
  const [contact,setContact] = useState({name : '' , phone : ''}) 
  return (
    <div className="App">
      <Header/>
      <div className='appBody'>
        <div><AddContact contacts = { contacts } setContacts = {setContacts} contact = { contact } setContact = {setContact} /></div>
        <div><ContactList contacts = { contacts } setContacts = {setContacts} contact = { contact } setContact = {setContact}/></div>
      </div>
      
    </div>
  );
}

export default App;
