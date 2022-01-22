import AddContact from "./Components/AddContact";
import Header from './Components/Header'
import ContactList from "./Components/ContactList";
import './App.css'
import { useEffect, useState } from "react";
// import data from "./data";



function App() {
  const [contacts , setContacts ] = useState([])
  useEffect(() => {
    fetch('api/contacts').then(res => res.json()).then(data => setContacts(data.contacts))
  },[])
  
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
