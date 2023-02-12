import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss'


const Input = ({ onChange, placeholder, value, name, type, required, className = '' }) => (
	<input
		placeholder={placeholder}
		className={`input ${className || ''}`}
		onChange={onChange}
		value={value || ''}
		name={name}
		type={type}
		required={required}
	/>
);

Input.propTypes = {
	name: PropTypes.string,
};

Input.defaultTypes = {
	type: 'text',
}
export default Input;