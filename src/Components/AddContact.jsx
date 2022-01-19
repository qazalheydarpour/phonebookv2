import React from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'
import './addContact.css'

const makeUinqID = () => {
    return parseInt(100000 * Math.random())
}
const AddContact = ({contacts,setContacts,contact,setContact}) => {
    const handelAdd = (e) => {
        e.preventDefault()
        if (contact.id) {
            setContacts(contacts.map(oldcontact => contact.id === oldcontact.id ? contact : oldcontact))
        } else {
            setContacts([...contacts, { id: makeUinqID(), ...contact }])
        }
        setContact({ firstName: "", lastName: '', job: '' })
    }
    const handelChange = (e) => {
        const { name, value } = e.target
        setContact({ ...contact, [name]: value })
    }
    
    return (
        <div className='addContact'>
             <Form onSubmit={handelAdd}>
                <Form.Field>
                <label htmlFor='input1'>Name</label>
                <input onChange={handelChange} id={'input1'} name={'name'} placeholder='Name' value={contact.name} />
                </Form.Field>
                <Form.Field>
                <label htmlFor='input2'>Phone</label>
                <input onChange={handelChange} id={'input1'} name={'phone'} placeholder='Phone' value={contact.phone}/>
                </Form.Field>
                <Button color='blue' type='submit'>Submit</Button>
            </Form>
        </div>
    )
}

export default AddContact
