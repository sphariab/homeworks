import React, { useState } from 'react';
import ContactList from "../ContactList";
import Button from '../Button';
import Form from '../Form';
import './styles.scss'


const Widget = () => {
	const [isShowForm, setShowForm] = useState(false);
	const [contacts, setContacts] = useState([]);

	const deleteContact = id => setContacts(contacts.filter(contact => contact.id !== id));
	const addContact = () => setShowForm(true);
	const closeForm = () => setShowForm(false );
	const saveContact = contact => {
		setContacts([...contacts, contact]);
		closeForm();
	}

	return (
		<div className='widget'>
			<h4>Address book</h4>
			<ContactList contacts={contacts} deleteContact={deleteContact} />
			{!isShowForm && <Button text='Add Contact' onClick={addContact} />}
			{isShowForm && <Form closeForm={closeForm} contacts={contacts} saveContact={saveContact} />}
		</div>
	)
}

export default Widget;