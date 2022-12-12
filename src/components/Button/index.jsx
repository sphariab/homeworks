import React, { Component } from 'react';
import PropTypes from "prop-types";
import './styles.scss';


class Button extends Component {
	render () {
		const { disabled, type, text, className, onClick } = this.props;

		return (
			<button
				className={`button button${disabled ? '_disabled': ''} ${className}`}
				disabled={disabled}
				type={type}
				onClick={onClick}
			>
				{text}
			</button>
		);
	}
}

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