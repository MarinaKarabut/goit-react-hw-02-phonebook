import React, { Component } from 'react';

import styles from './ContactForm.module.css'

class ContactForm extends  Component {
    state ={
        name: '',
        number: ''
    }

    handelChange =(e) => {
        const {name, value} = e.currentTarget
        this.setState({[name]: value})
    }
        
    handelSubmit = (e)=>{
        e.preventDefault()
        this.props.onSubmit(this.state)
        this.reset()
    }

    reset = () => {
        this.setState({name: '', number: ''})
    }
        


    render(){
        const {name, number} = this.state;
        const {handelChange, handelSubmit} =this;
        
        return (
            <form className={styles.form} onSubmit={handelSubmit}>
                <label className={styles.label}>
                Name <input
                    className={styles.input}
                    type="text"
                    name="name"
                    value = {name}
                    onChange={handelChange}
                    placeholder="Jacob Mercer"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                    required
                    
                    />
                </label>
                <label className={styles.label}>
                Number <input
                    className={styles.input}
                    type="tel"
                    name="number"
                    value = {number}
                    onChange={handelChange}
                    placeholder="111-11-11"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                    required
                    
                    />
                </label>
                <button className={styles.btn} type="submit">Add contact</button>
          </form>
        )
    }
};

export default ContactForm;

