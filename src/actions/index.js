import * as actions from '../constants';

export const addContact = contact => ({ type: actions.ADD_CONTACT, payload: contact });

export const deleteContact = id => ({ type: actions.DELETE_CONTACT, payload: id });

export const setContacts = contacts => ({ type: actions.SET_CONTACTS, payload: contacts });

export const getContacts = () => ({ type: actions.GET_CONTACTS });