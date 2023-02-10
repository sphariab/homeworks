import React, { useEffect } from 'react';
import {NavLink, Outlet} from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteUserApi as deleteUser, getUsersApi as getUsers, editUserApi as editUser } from "../../../api";
import { generateKey } from "../../../utils";
import User from "../UserItem";
import './styles.scss'


const UsersList = ({ users, deleteUser, getUsers }) => {
	useEffect(() => {
		getUsers()
	},[getUsers])

	return (
		<>
			<div className='user__container'>
				<ul className='user__list'>
					<NavLink to='/users/add' className='button button_green m-b'>Add user</NavLink>
					{users && users.map(item => <User item={item} key={generateKey()} deleteUser={deleteUser} />)}
					{users && !users.length && (<p>There are no users</p>)}
				</ul>
				<Outlet />
			</div>
		</>
	);
}

UsersList.propTypes = {
	deleteUser: PropTypes.func.isRequired,
	users: PropTypes.arrayOf(PropTypes.shape({
		name: PropTypes.string,
		username: PropTypes.string,
		phone: PropTypes.string,
		id: PropTypes.number.isRequired,
	})),
};

UsersList.defaultTypes = {
	users: [],
};

const mapStateToProps = state => ({
	users: state.users,
});

const mapDispatchToProps = {
	deleteUser, getUsers, editUser,
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(UsersList)