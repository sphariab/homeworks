import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import InputField from '../InputField/InputField';
import Button from '../Button/Button';
import { addTodo } from '../../actions';
import { generateId } from '../../utils.js'
import './Controls.scss';

const Controls = () => {
	const [isChanged, setIsChanged] = useState(false);
	const [inputValue, setInputValue] = useState('');
	const dispatch = useDispatch();
	const onChange = ({ target: { value } }) => {
		setInputValue(value);
		setIsChanged(value && value.length)
	}

	const onSave = () => {
		const newTodo = { text: inputValue, id: generateId(), completed: false }
		dispatch(addTodo(newTodo));

		setInputValue('');
		setIsChanged(false);
	};

	const handleKeypress = e => {
		if (e.keyCode === 13) {
			onSave();
		}
	};

	return (
		<div className='controls'>
			<InputField onChange={onChange} text={inputValue} onKeyPress={handleKeypress} />
			<Button disabled={!isChanged} onClick={() => onSave()} />
		</div>
	);
}

export default Controls;