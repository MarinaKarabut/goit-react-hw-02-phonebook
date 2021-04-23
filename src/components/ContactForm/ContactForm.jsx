import React, { Component } from 'react';

import FormField from '../../shared/components/FormField'

import {fields} from "./fields";

import styles from './ContactForm.module.css'

class ContactForm extends  Component {
    state ={
        name: '',
        number: ''
    }

    handelChange = ({target}) => {
        const {name, value} = target
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
                <FormField {...fields.username} value={name} onChange={handelChange} />
                <FormField {...fields.phone} value={number} onChange={handelChange} />
                <button className={styles.btn} type="submit">Add contact</button>
          </form>
        )
    }
};

export default ContactForm;

