import React from 'react';
import PropTypes from "prop-types";
import Contact from "../Contact";
import { connect } from "react-redux";
import { deleteUser } from "../../api";
import { generateKey } from "../../utils";
import './styles.scss'


const ContactList = ({ contacts, deleteUser }) => (
	<>
		{contacts && contacts.length > 0 && (
			<table className='contact__list'>
				<caption>List of contacts</caption>
				<tr className='contact__row'>
					<th className='contact__cell' >Name</th>
					<th className='contact__cell' >Username</th>
					<th className='contact__cell' >Phone</th>
					<th className='contact__cell' >Action</th>
				</tr>
				{contacts && contacts.map(item => <Contact item={item} key={generateKey()} deleteUser={deleteUser} />)}
			</table>
		)}
		{!contacts.length && (<p>There are no contacts</p>)}
	</>
);

ContactList.propTypes = {
	deleteUser: PropTypes.func.isRequired,
	contacts: PropTypes.arrayOf(PropTypes.shape({
		name: PropTypes.string,
		username: PropTypes.string.isRequired,
		phone: PropTypes.string.isRequired,
	})),
};

ContactList.defaultTypes = {
	contacts: [],
};

const mapStateToProps = state => ({
	contacts: state.contacts,
});

const mapDispatchToProps = {
	deleteUser
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ContactList)