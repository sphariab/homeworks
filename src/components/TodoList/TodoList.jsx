import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import Todo from '../Todo/Todo';
import { deleteTodo } from "../../actions";

import './TodoList.scss'

const TodoList = () => {
	const dispatch = useDispatch();
	const todos = useSelector(state => state.todos);

	return (
		<>
			{todos && todos.length > 0 && (
				<ul className='todo__list'>
					{todos.map(item =>
						<Todo item={item} key={item.id} deleteTodo={() => dispatch(deleteTodo(item.id))} />)}
				</ul>)}
			{todos && !todos.length && (<p>There is nothing to do ...</p>)}
		</>
	);
}

export default TodoList;