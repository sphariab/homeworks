import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTodo } from '../../actions';
import './Todo.scss'

const Todo = ({ item: { text, key, id, completed }, deleteTodo }) => {
	const dispatch = useDispatch();

	return (
		<li
			className={`todo ${completed ? 'todo_completed': ''}`}
			onClick={() => dispatch(toggleTodo(id))}
			key={key}
		>
			{text}
			<div className='todo_delete' onClick={() => deleteTodo(id)}></div>
		</li>
	);
}

export default Todo;