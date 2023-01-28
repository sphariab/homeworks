import React from 'react';
import './InputField.scss'

const Input = ({ text, onChange, onKeyPress }) => (
	<input
		placeholder='Add something to do'
		type="text"
		className='input' onChange={onChange}
		value={text || ''}
		onKeyDown={onKeyPress}
	/>
);

export default Input;