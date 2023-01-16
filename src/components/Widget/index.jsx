import React, { useEffect, useState } from 'react';
import ContactList from '../ContactList';
import Button from '../Button';
import Form from '../Form';
import { addUser, deleteUser, getUsers } from '../../api';
import './styles.scss'


const Widget = () => {
	const [isShowForm, setShowForm] = useState(false);
	const [contacts, setContacts] = useState([]);

	useEffect(() => {
		getUsers().then((data) => setContacts(data));
	}, []);

	const deleteContact = id => {
		return deleteUser(id).then(() => setContacts(contacts.filter(contact => contact.id !== id)));
	}

	const addContact = () => setShowForm(true);

	const closeForm = () => setShowForm(false );

	const saveContact = contact => {
		addUser(contact).then((data) => setContacts([...contacts, data]));

		closeForm();
	}

	return (
		<div className='widget'>
			<h4>Address book</h4>
			<ContactList deleteContact={deleteContact} contacts={contacts} />
			{!isShowForm && <Button text='Add Contact' onClick={addContact} />}
			{isShowForm && <Form closeForm={closeForm} contacts={contacts} saveContact={saveContact} />}
		</div>
	)
}

export { Widget };