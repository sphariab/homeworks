import React, {useEffect, useState} from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useLocation, useNavigate } from "react-router-dom";
import userValidationSchema from '../../../userValidationSchema';
import { addUserApi as addUser, editUserApi as editUser } from "../../../api";
import Controls from '../../UI/Controls';
import Label from '../../UI/Label';
import './styles.scss';


const FormCmp = ({ addUser, editUser }) => {
	const newUser = { name: '', username: '', phone: '', id: 11 };
	const { state } = useLocation();
	const navigate = useNavigate();
	const [user, setUser] = useState(newUser);

	useEffect(() => {
		if (state && state.item){
			setUser(state.item)
		}
	}, [state])

	const onSubmit = (values) => {
		!state ? addUser(values) : editUser(values);
		onClose()
	};

	const onClose = () => navigate('/users');

	return (
		<Formik
			initialValues={state ? user : newUser}
			validationSchema={userValidationSchema}
			enableReinitialize
			onSubmit={onSubmit}
		>
		{({ dirty, isValid, handleSubmit }) => (
			<Form className='form' onSubmit={handleSubmit}>
				<span className='form__close' onClick={onClose}></span>
				<span className='form__input-wrapper'>
					<Label htmlFor="name">Name: </Label>
					<Field type="text" name="name" placeholder='Name' className='input' />
					<ErrorMessage name="name" component="div" className='error' />
				</span>
				<span className='form__input-wrapper'>
					<Label htmlFor="username">Username: </Label>
					<Field type="text" name="username" placeholder='Username' className='input' />
					<ErrorMessage name="username" component="div" className='error' />
				</span>
				<span className='form__input-wrapper'>
					<Label htmlFor="phone">Phone: </Label>
					<Field type="text" name="phone" placeholder='Phone' className='input' />
					<ErrorMessage name="phone" component="div" className='error' />
				</span>
				<Controls
					onClose={onClose}
					disabled={!dirty && isValid}
				/>
			</Form>)}
		</Formik>
	);
}

FormCmp.propTypes = {
	addUser: PropTypes.func.isRequired,
	users: PropTypes.arrayOf(PropTypes.shape({
		name: PropTypes.string,
		surname: PropTypes.string,
		phone: PropTypes.string,
	})),
};

FormCmp.defaultTypes = {
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
)(FormCmp)