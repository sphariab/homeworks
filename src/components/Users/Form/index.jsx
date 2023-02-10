import React, {useState, useEffect } from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import Input from '../../UI/Input';
import Controls from '../../UI/Controls';
import Label from '../../UI/Label';
import { addUserApi as addUser, editUserApi as editUser } from "../../../api";
import './styles.scss';


const Form = ({ addUser, editUser }) => {
	const newUser = { name: '', username: '', phone: '', id: 11 };
	const { state } = useLocation();
	const navigate = useNavigate();
	const [isChanged, setIsChanged] = useState(false);
	const [user, setUser] = useState(newUser);

	useEffect(() => {
		if (state){
			setUser(state.item)
		} else {
			setUser({ name: '', username: '', phone: '', id: 11 })
		}
	},[state]);

	const { name, username, phone } = user;
	const onChange = ({ target: { value, name } }) => {
		setUser({...user, [name]: value });
		setIsChanged(true);
	}
	const onSubmit = e => {
		e.preventDefault();
		!state ? addUser(user) : editUser(user);
		onClose()
	};

	const onClose = () => {
		navigate('/users')
	}

	return (
		<form noValidate className='form' onSubmit={onSubmit}>
			<span className='form__close' onClick={onClose}></span>
			<span className='form__input-wrapper'>
				<Label>Name: </Label>
				<Input onChange={onChange} name='name' value={name} placeholder='Name' required />
			</span>
			<span className='form__input-wrapper'>
				<Label>Username: </Label>
				<Input onChange={onChange} name='username' value={username} placeholder='Username' />
			</span>
			<span className='form__input-wrapper'>
				<Label>Phone: </Label>
				<Input onChange={onChange} name='phone' value={phone} placeholder='Phone' />
			</span>
			<Controls
				onClose={onClose}
				isChanged={isChanged}
			/>
		</form>
	);
}

Form.propTypes = {
	addUser: PropTypes.func.isRequired,
	users: PropTypes.arrayOf(PropTypes.shape({
		name: PropTypes.string,
		surname: PropTypes.string,
		phone: PropTypes.string,
	})),
};

Form.defaultTypes = {
	users: [],
};


const mapStateToProps = state => ({
	albums: state.albums,
});

const mapDispatchToProps = {
	addUser,
	editUser,
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Form)