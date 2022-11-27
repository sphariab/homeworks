import React, { Component } from 'react';
import './InputField.scss'

class Input extends Component {
	render () {
		const { text, onChange, onKeyPress } = this.props;
		return (
			<input
				placeholder='Add something to do'
				type="text"
				className='input' onChange={onChange}
				value={text || ''}
				onKeyDown={onKeyPress}
			/>
		);
	}
}

export default Input;