import React from 'react';
import { NavLink } from "react-router-dom";
import './styles.scss'


const Navigation = () => (
	<ul className='navigation'>
		<NavLink className={({ isActive }) => isActive ? 'active' : ''} to='/users'>Users</NavLink>
		<NavLink className={({ isActive }) => isActive ? 'active' : ''} to='/albums'>Albums</NavLink>
	</ul>
);

Navigation.propTypes = {
};

Navigation.defaultTypes = {
};

export default Navigation;