import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles.scss'


class Input extends Component {
	render () {
		const { onChange, placeholder, value, name, type, required, className = '' } = this.props;
		return (
			<input
				placeholder={placeholder}
				className={`input ${className}`}
				onChange={onChange}
				value={value || ''}
				name={name}
				type={type}
				required={required}
			/>
		);
	}
}

Input.propTypes = {
	name: PropTypes.string,
};

Input.defaultTypes = {
	type: 'text',
}

export default Input;