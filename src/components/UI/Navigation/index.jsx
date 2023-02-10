import React from 'react';
import { NavLink } from "react-router-dom";
import './styles.scss'


const Navigation = () => (
	<ul className='navigation'>
		<NavLink className={({ isActive }) => isActive ? 'active' : ''} to={`${process.env.PUBLIC_URL}/users`} end>Users</NavLink>
		<NavLink className={({ isActive }) => isActive ? 'active' : ''} to={`${process.env.PUBLIC_URL}/albums`} end>Albums</NavLink>
	</ul>
);

Navigation.propTypes = {
};

Navigation.defaultTypes = {
};

export default Navigation;