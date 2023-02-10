import React from 'react';
import { NavLink } from "react-router-dom";
import './styles.scss'


const Navigation = () => (
	<ul className='navigation'>
		<NavLink className={({ isActive }) => isActive ? 'active' : ''} to='/users' end>Users</NavLink>
		<NavLink className={({ isActive }) => isActive ? 'active' : ''} to='/albums' end>Albums</NavLink>
	</ul>
);

Navigation.propTypes = {
};

Navigation.defaultTypes = {
};

export default Navigation;