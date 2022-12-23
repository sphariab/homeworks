import React, { Component } from 'react';
import { generateRandomNumber } from "../../utils";
import './styles.scss'


class Cat extends Component {
	constructor(props) {
		super(props);
		this.state = {
			x: generateRandomNumber() * 600,
			y: generateRandomNumber() * 600,
		}
	}
	render () {
		const { clientX, clientY, children } = this.props;
		const { x, y } = this.state;

		return (
			<div
				className='cat'
				style={{ left: clientX + x, top: clientY + y, transition: ` all ${generateRandomNumber() + 1}s ease-out` }}
			>
					{children}
			</div>
		);
	}
}

export default Cat;