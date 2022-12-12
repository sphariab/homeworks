import React, { Component } from 'react';
import ContactList from "../ContactList";
import Button from '../Button';
import Form from '../Form';
import './styles.scss'


class Widget extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isShowForm: false,
			contacts: [],
		}
	}

	deleteContact = id => this.setState({ contacts: this.state.contacts.filter(contact => contact.id !== id)});

	addContact = () => this.setState({ isShowForm: true });

	closeForm = () => this.setState({ isShowForm: false });

	saveContact = contact => {
		const { contacts = []} = this.state;

		this.setState({ contacts: [...contacts, contact] });
		this.closeForm();
	}

	render () {
		const { contacts, isShowForm } = this.state;

		return (
			<div className='widget'>
				<h4>Address book</h4>
				<ContactList contacts={contacts} deleteContact={this.deleteContact} />
				{!isShowForm && <Button text='Add Contact' onClick={this.addContact} />}
				{isShowForm && <Form closeForm={this.closeForm} contacts={contacts} saveContact={this.saveContact} />}
			</div>
		)
	}
}

export default Widget;