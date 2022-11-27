import React, { Component } from 'react';
import './Button.scss';

class Button extends Component {
	constructor(props) {
		super(props);
		this.state = {}
	}

	render () {
		const { disabled, onClick } = this.props;

		return (
			<button
				className={`button button${disabled ? '__disabled': ''}`}
				disabled={disabled}
				onClick={onClick}
			>
				Save
			</button>
		);
	}
}

export default Button;