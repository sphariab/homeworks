import React, { Component } from 'react';
import './styles.scss'


class Cat extends Component {
	constructor(props) {
		super(props);
		this.state = {
			x: Math.random() * 600,
			y: Math.random() * 600,
		}
	}
	render () {
		const { clientX, clientY, children } = this.props;
		const { x, y } = this.state;

		return (
			<div
				className='cat'
				style={{ left: clientX + x, top: clientY + y, transition: ` all ${Math.random() + 1}s ease-out` }}
			>
					{children}
			</div>
		);
	}
}

export default Cat;