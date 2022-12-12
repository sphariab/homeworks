import React, { Component } from 'react';
import Input from '../Input';
import Controls from '../Controls';
import Label from '../Label';
import { generateId } from "../../utils";
import './styles.scss';
import PropTypes from "prop-types";


class Form extends Component {
	constructor(props) {
		super(props);
		this.state = {
			contact: {
				name: '',
				surname: '',
				phone: '',
			},
			errors: {},
			formValid: false,
			isChanged: false,
		}
	}

	onChange = ({ target: { value, name } }) =>
		this.setState({ contact: {...this.state.contact, [name]: value, id: generateId() }},
			() => { this.checkForm(name, value) });

	validateForm = () => {
		const { surname, phone } = this.state.errors;

		this.setState({ formValid: surname.length === 0 && phone.length === 0});
	}

	checkIfFieldsValid = (name, value) => {
		let errors = this.state.errors;
		let { surnameValid, phoneValid } = this.state;

		switch(name) {
			case 'surname':
				surnameValid = value.length > 0;
				errors.surname = surnameValid ? '' : 'Required';
				break;

			case 'phone':
				phoneValid = value.length > 0;
				errors.phone = phoneValid ? '': 'Required';
				break;

			default:
				break;
		}

		this.setState({ errors, surnameValid, phoneValid, isChanged: true }, this.validateForm);
	}

	checkForm = () => Object.entries(this.state.contact).map(([name, value]) => this.checkIfFieldsValid(name, value));

	onSubmit = e => {
		const { formValid, contact } = this.state;
		const { saveContact } = this.props;

		e.preventDefault();
		this.checkForm()

		if (formValid) {
			saveContact(contact);
		}
	};

	render () {
		const { isChanged, contact, errors } = this.state;
		const { name, surname, phone } = contact;
		const { closeForm } = this.props;

		return (
			<form noValidate className='form' onSubmit={this.onSubmit}>
				<span className='form__input-wrapper'>
					<Label>Name: </Label>
					<Input onChange={this.onChange} name='name' value={name} placeholder='Name' required />
					{errors && errors.name}
				</span>
				<span className='form__input-wrapper'>
					<Label>Surname: </Label>
					<Input onChange={this.onChange} name='surname' value={surname} placeholder='Surname' />
					{errors && errors.surname}
				</span>
				<span className='form__input-wrapper'>
					<Label>Phone: </Label>
					<Input onChange={this.onChange} name='phone' value={phone} placeholder='Phone' type='number' />
					{errors && errors.phone}
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