import React from "react";
import "./contactList.css";
import { Input } from 'semantic-ui-react'
import './searchcontact.css'
import { useState } from "react";

const ContactList = ({contacts , setContacts , contact , setContact}) => {

  const [filter,setFilter] = useState('')
    const handelDeleteContact = (id) => {
        setContacts( contacts.filter( contact => contact.id !== id ) )
    }
  return (
    <div>
    <div className='searchContact'>
        <Input onChange={(e) => setFilter(e.target.value)} fluid icon='search' placeholder='Search...' />
        </div>
    <div className="contactList">
      
      {contacts.filter((x) =>
                x.name.toLowerCase().includes(filter.toLowerCase())
              ).length === 0 ? (
                <h1 className='opserore'>OPS ... ! Empty List</h1>
              ) : (
                contacts
                  .filter((x) =>
                    x.name.toLowerCase().includes(filter.toLowerCase())
                  ).map((contact) => (
        <div className="contactCard">
          <div className="contactCard-img">
            <img src={`https://avatars.dicebear.com/api/personas/${contact.id}.svg`} />
          </div>
          <div className="contactCard-data" key={contact.id}>
            <h3>{contact.name}</h3>
            <p>{contact.phone}</p>
          </div>
          <div className='contactCard-button contactCard-button-delete '><p onClick={()=>handelDeleteContact(contact.id)}>Delete</p></div>
          <div className='contactCard-button contactCard-button-edit'><p onClick={ () => {setContact(contact)} }>Edit</p></div>
        </div>
      )))}
      <div className='gif'>
                <img  src={require('./blue.gif')}/>
      </div>
    </div>
    </div>
  )
};

export default ContactList;
