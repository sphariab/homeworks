import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux'
import ContactList from '../ContactList';
import Button from '../Button';
import Form from '../Form';
import { addUser, getUsers } from '../../api';
import './styles.scss'


const Widget = ({ addUser, contacts, getUsers }) => {
	const [isShowForm, setShowForm] = useState(false);

	useEffect(() => {
		getUsers()
	}, [getUsers]);

	const saveContact = contact => {
		addUser(contact)
		setShowForm(false)
	}

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

const mapDispatchToProps = {
	getUsers,
	addUser,
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Widget);