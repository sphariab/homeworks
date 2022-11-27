import React, { Component } from 'react';
import TodoList from "../TodoList/TodoList";
import Controls from "../Controls/Controls";
import './Widget.scss'

class Widget extends Component {
	constructor(props) {
		super(props);
		this.state = {
			todos: []
		}
	}

	saveTodo = todo => this.setState({ todos: [...this.state.todos, todo]});

	deleteTodo = id => this.setState({ todos: this.state.todos.filter(todo => todo.id !== id)});

	render () {
		const { todos } = this.state;
		return (
			<div className='widget'>
				<TodoList todos={todos} deleteTodo={this.deleteTodo} />
				<Controls saveTodo={this.saveTodo} />
			</div>
		)
	}
}

export default Widget;