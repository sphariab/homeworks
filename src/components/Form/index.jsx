import React, { Component } from 'react';
import PropTypes from "prop-types";
import Input from '../Input';
import Controls from '../Controls';
import Label from '../Label';
import { generateId } from "../../utils";
import './styles.scss';


class Form extends Component {
	constructor(props) {
		super(props);
		this.state = {
			contact: {
				name: '',
				surname: '',
				phone: '',
			},
			isChanged: false,
		}
	}

	onChange = ({ target: { value, name } }) =>
		this.setState({ contact: {...this.state.contact, [name]: value, id: generateId() }, isChanged: true});

	onSubmit = e => {
		const { contact } = this.state;
		const { saveContact } = this.props;

		e.preventDefault();
		saveContact(contact);
	};

	render () {
		const { isChanged, contact } = this.state;
		const { name, surname, phone } = contact;
		const { closeForm } = this.props;

		return (
			<form noValidate className='form' onSubmit={this.onSubmit}>
				<span className='form__input-wrapper'>
					<Label>Name: </Label>
					<Input onChange={this.onChange} name='name' value={name} placeholder='Name' required />
				</span>
				<span className='form__input-wrapper'>
					<Label>Surname: </Label>
					<Input onChange={this.onChange} name='surname' value={surname} placeholder='Surname' />
				</span>
				<span className='form__input-wrapper'>
					<Label>Phone: </Label>
					<Input onChange={this.onChange} name='phone' value={phone} placeholder='Phone' type='number' />
				</span>
				<Controls
					contact={contact}
					closeForm={closeForm}
					isChanged={isChanged}
				/>
			</form>
		);
	}
}

Form.propTypes = {
	saveContact: PropTypes.func.isRequired,
	closeForm: PropTypes.func.isRequired,
	contacts: PropTypes.arrayOf(PropTypes.shape({
		name: PropTypes.string,
		surname: PropTypes.string.isRequired,
		phone: PropTypes.string.isRequired,
	})),
};

Form.defaultTypes = {
	contacts: [],
};

export default Form;