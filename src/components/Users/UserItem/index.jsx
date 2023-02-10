import React from 'react';
import PropTypes from "prop-types";
import { NavLink, Link } from "react-router-dom";
import Button from '../../UI/Button';
import AlbumIcon from "../../../icons/AlbumIcon";
import './styles.scss'


const UserItem = ({ item , deleteUser }) => (
	<>
		<li className='user__name'>
			<div className='user__name-container'>
				<NavLink to={`/users/${item.id}/albums`} className='m-r'>
					<AlbumIcon />
				</NavLink>
				<NavLink to={`${item.id}`} >
					{item.name}
				</NavLink>
			</div>
			<div className='user__controls'>
				<Link to={`${item.id}/edit`} state={{ item }} className='button button_blue m-r'>Edit</Link>
				<Button text='Delete' onClick={() => deleteUser(item.id)} className='button button_red m-r' />
			</div>
		</li>
	</>
);

UserItem.propTypes = {
	deleteUser: PropTypes.func.isRequired,
	item: PropTypes.shape({
		name: PropTypes.string,
		username: PropTypes.string,
		phone: PropTypes.string,
		key: PropTypes.string,
		id: PropTypes.number,
	}),
};

export default UserItem;