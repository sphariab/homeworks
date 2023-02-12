import React from 'react';
import PropTypes from "prop-types";
import { Link, useHistory } from "react-router-dom";
import Button from '../../UI/Button';
import AlbumIcon from "../../../icons/AlbumIcon";
import './styles.scss';


const UserItem = ({ item , deleteUser }) => {
	const history = useHistory();
	const onDelete = () => {
		deleteUser(item.id)
		history.push('/users');
	};

	return (
		<>
			<li className='user__name'>
				<div className='user__name-container'>
					<Link to={`/users/${item.id}/albums`} className='m-r'><AlbumIcon /></Link>
					<Link to={`/users/${item.id}`}>{item.name}</Link>
				</div>
				<div className='user__controls'>
					<Link to={{pathname: `/users/${item.id}/edit`, state: { item } }}  className='button button_blue m-r'>Edit</Link>
					<Button text='Delete' onClick={onDelete} className='button button_red m-r' />
				</div>
			</li>
		</>
	);
}

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