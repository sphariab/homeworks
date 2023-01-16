import React from 'react';
import PropTypes from "prop-types";
import './styles.scss'


const Contact = ({ item: { name, key, id, username, phone }, deleteContact }) => (
	<tr className='contact contact__row' key={key}>
		<td className='contact__cell'>{name}</td>
		<td className='contact__cell'>{username}</td>
		<td className='contact__cell'>{phone}</td>
		<td className='contact__cell contact_delete' onClick={() => deleteContact(id)}></td>
	</tr>
);

Contact.propTypes = {
	deleteContact: PropTypes.func.isRequired,
	item: PropTypes.shape({
		name: PropTypes.string,
		username: PropTypes.string.isRequired,
		phone: PropTypes.string.isRequired,
		key: PropTypes.string,
		id: PropTypes.number.isRequired,
	}),
};

Contact.defaultTypes = {
	contacts: [],
};

export default Contact;