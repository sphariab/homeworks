import React from 'react';
import './Button.scss';

const Button = ({ disabled, onClick }) => (
	<button
		className={`button button${disabled ? '__disabled': ''}`}
		disabled={disabled}
		onClick={onClick}
	>
		Save
	</button>
);

export default Button;