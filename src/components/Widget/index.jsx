import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux'
import ContactList from '../ContactList';
import { addContact, getContacts } from '../../actions';
import Button from '../Button';
import Form from '../Form';
import './styles.scss'


const Widget = ({ contacts, getContacts, addContact }) => {
	const [isShowForm, setShowForm] = useState(false);
	const saveContact = contact => {
		addContact(contact);
		setShowForm(false);
	}

	useEffect(() => {
		getContacts()
	}, [getContacts]);

	return (
		<div className='widget'>
			<h4>Address book</h4>
			<ContactList />
			{!isShowForm && <Button text='Add Contact' onClick={() => setShowForm(true)} />}
			{isShowForm && <Form closeForm={() => setShowForm(false)} contacts={contacts} saveContact={saveContact} />}
		</div>
	)
}

const mapStateToProps = state => ({
	contacts: state.contacts,
});

const mapDispatchToProps = (dispatch) => {
	return {
		addContact: contact => dispatch(addContact(contact)),
		getContacts: () => dispatch(getContacts()),
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(Widget);