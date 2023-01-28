import * as actions from '../constants';

export const addTodo = todo => ({ type: actions.ADD_TODO, payload: todo });

export const deleteTodo = id => ({ type: actions.DELETE_TODO, payload: id });

export const toggleTodo = id => ({ type: actions.TOGGLE_TODO, payload: id });