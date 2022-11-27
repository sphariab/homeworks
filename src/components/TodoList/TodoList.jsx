import React, { Component } from 'react';
import Todo from "../Todo/Todo";
import './TodoList.scss'

class TodoList extends Component {
	render () {
		const { todos, deleteTodo } = this.props;

		return (
			<>
				{todos.length > 0 && (
					<ul className='todo__list'>
						{todos && todos.map(item => <Todo item={item} key={item.id} deleteTodo={deleteTodo} />)}
					</ul>)}
				{!todos.length && (<p>There is nothing to do ...</p>)}
			</>
		)
	}
}

export default TodoList;