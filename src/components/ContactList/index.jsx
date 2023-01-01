import React from 'react';
import PropTypes from "prop-types";
import Contact from "../Contact";
import './styles.scss'


const ContactList = ({ contacts, deleteContact }) => (
	<>
		{contacts.length > 0 && (
			<table className='contact__list'>
				<caption>List of contacts</caption>
				<tr className='contact__row'>
					<th className='contact__cell' >Name</th>
					<th className='contact__cell' >Surname</th>
					<th className='contact__cell' >Phone</th>
					<th className='contact__cell' >Action</th>
				</tr>
				{contacts && contacts.map(item => <Contact item={item} key={item.id} deleteContact={deleteContact} />)}
		</table>
		)}
		{!contacts.length && (<p>There are no contacts</p>)}
	</>
);

ContactList.propTypes = {
	deleteContact: PropTypes.func.isRequired,
	contacts: PropTypes.arrayOf(PropTypes.shape({
		name: PropTypes.string,
		surname: PropTypes.string.isRequired,
		phone: PropTypes.string.isRequired,
	})),
};

ContactList.defaultTypes = {
	contacts: [],
};

export default ContactList;