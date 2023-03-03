import React, {useEffect} from 'react';
import PropTypes from "prop-types";
import {connect} from "react-redux";
import { useParams } from 'react-router-dom';
import { getUserItemApi as getUserItem } from "../../../api";
import './styles.scss'


const UserDetail = ({ user, getUserItem }) => {
	const { id } = useParams();

	useEffect(() => {
		getUserItem(id)
	}, [getUserItem, id])

	return (
		<>
			{user && user.name}<br/>
			{user && user.phone}<br/>
			{user && user.address && user.address.street}<br/>
		</>
	);
}

UserDetail.propTypes = {
	item: PropTypes.shape({
		name: PropTypes.string,
		username: PropTypes.string.isRequired,
		phone: PropTypes.string.isRequired,
		key: PropTypes.string,
		id: PropTypes.number.isRequired,
	}),
};

const mapStateToProps = state => ({
	user: state.user,
});

const mapDispatchToProps = {
	getUserItem,
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(UserDetail)