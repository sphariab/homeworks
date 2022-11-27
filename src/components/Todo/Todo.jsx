import React, { Component } from 'react';
import './Todo.scss'

class Todo extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isCompleted: false,
		}
	}

	componentDidMount() {
		this.setState({ isCompleted: this.props.item.isCompleted })
	}

	changeStatus = () => this.setState({ isCompleted: !this.state.isCompleted });

	render () {
		const { text, key, id } = this.props.item;
		const { isCompleted } = this.state;

		return (
			<li
				className={`todo ${isCompleted ? 'todo_completed': ''}`}
				onClick={this.changeStatus}
				key={key}
			>
				{text}
				<div className='todo_delete' onClick={() => this.props.deleteTodo(id)}></div>
			</li>
		);
	}
}

export default Todo;