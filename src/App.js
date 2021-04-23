import React, {Component} from 'react';
import ContactForm from './components/ContactForm';
import Filter from './components/Filter';
import ContactList from './components/ContactList';
import { v4 as uuidv4 } from 'uuid'

import styles from './App.module.css';


class App extends Component {
  state = {
    contacts: [
      // {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      // {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      // {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      // {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: ''
  }

 
addContacts = ({name,number})=> {
    const newContact = {
      id: uuidv4(),
      name,
      number,
    }
  this.setState(({contacts}) => ({
  
    contacts: [...contacts, newContact]

  })
  )
}

onDeleteContacts = (idx)=>{
  this.setState(({contacts})=>{
      const newContacts = [...contacts];
      newContacts.splice(idx, 1);
      return {
        contacts: newContacts
      }
  });
}

handelChange =(e) => {
    const {value} = e.currentTarget
    this.setState({filter: value})
}

getVisibleContacts = () => {
  const { contacts, filter } = this.state;
  const normalizedFilter = filter.toLowerCase();

  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter),
  );
};
  
  render(){
    
  const {filter,contacts} = this.state;
  const {handelChange, addContacts, onDeleteContacts, getVisibleContacts} = this;
 
  const visibleContacts = getVisibleContacts()
  
  
    return (
      <div className={styles.box}>
        <h1 className={styles.tittle}>Phonebook</h1>
        <ContactForm  onSubmit={addContacts} />
        <h2 className={styles.tittle}>Contacts</h2>
        {contacts.length >1 && (<Filter value={filter} onChange={handelChange}/>)}
        {contacts.length >0? (<ContactList 
        contacts ={visibleContacts}
        onDeleteContacts={onDeleteContacts}
        />) : <p className={styles.notification}>Your phonebook is empty. Please add contact.</p>}
      </div>
    )
  }
}

export default App;
