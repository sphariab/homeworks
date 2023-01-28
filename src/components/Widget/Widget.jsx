import React from 'react';
import TodoList from '../TodoList/TodoList';
import Controls from '../Controls/Controls';
import './Widget.scss'

const Widget = () => (
	<div className='widget'>
		<TodoList />
		<Controls />
	</div>
);

export default Widget;