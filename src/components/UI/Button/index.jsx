import React from 'react';
import PropTypes from "prop-types";
import './styles.scss';


const Button = ({ disabled, type, text, className, onClick }) => (
	<button
		className={`button ${disabled ? 'button_disabled': ''} ${className || ''} `}
		disabled={disabled}
		type={type}
		onClick={onClick}
	>
		{text}
	</button>
);

Button.propTypes = {
	disabled: PropTypes.bool,
	type: PropTypes.string,
	text: PropTypes.string,
	className: PropTypes.string,
	onClick: PropTypes.func,
};

Button.defaultTypes = {
	disabled: false,
	type: 'text',
	className: '',
	onClick: () => {},
};

export default Button;