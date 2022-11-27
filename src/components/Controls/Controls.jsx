import React, { Component } from 'react';
import { generateId } from '../../utils.js'
import InputField from "../InputField/InputField";
import Button from "../Button/Button";
import './Controls.scss';

class Controls extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isChanged: false,
			inputValue: '',
		}
	}

	onChange = ({ target: { value } }) =>
		this.setState({ isChanged: value && value.length, inputValue: value });

	onSave = () => {
		this.props.saveTodo({ text: this.state.inputValue, id: generateId() });
		this.setState({ inputValue: '', isChanged: false })
	}

	handleKeypress = e => {
		if (e.keyCode === 13) {
			this.onSave();
		}
	};

	render () {
		const { inputValue, isChanged } = this.state;

		return (
			<div className='controls'>
				<InputField onChange={this.onChange} text={inputValue} onKeyPress={this.handleKeypress} />
				<Button disabled={!isChanged} onClick={() => this.onSave()} />
			</div>
		);
	}
}

export default Controls;