import React, { useState } from 'react';
import PropTypes from "prop-types";
import Input from '../Input';
import Controls from '../Controls';
import Label from '../Label';
import { generateId } from "../../utils";
import './styles.scss';


const Form = ({ saveContact, closeForm }) => {
	const [isChanged, setIsChanged] = useState(false);
	const [contact, setContact] = useState({ name: '', surname: '', phone: '' });
	const { name, surname, phone } = contact;

	const onChange = ({ target: { value, name } }) => {
		setContact({...contact, [name]: value, id: generateId() });
		setIsChanged(true);
	}

	const onSubmit = e => {
		e.preventDefault();
		saveContact(contact);
	};

	return (
		<form noValidate className='form' onSubmit={onSubmit}>
			<span className='form__input-wrapper'>
				<Label>Name: </Label>
				<Input onChange={onChange} name='name' value={name} placeholder='Name' required />
			</span>
			<span className='form__input-wrapper'>
				<Label>Surname: </Label>
				<Input onChange={onChange} name='surname' value={surname} placeholder='Surname' />
			</span>
			<span className='form__input-wrapper'>
				<Label>Phone: </Label>
				<Input onChange={onChange} name='phone' value={phone} placeholder='Phone' type='number' />
			</span>
			<Controls
				contact={contact}
				closeForm={closeForm}
				isChanged={isChanged}
			/>
		</form>
	);
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