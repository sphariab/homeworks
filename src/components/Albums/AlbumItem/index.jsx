import React from 'react';
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import './styles.scss'


const AlbumItem = ({ album }) => <NavLink to={`/albums/${album.id}/photos`} className='link'>{album.title}</NavLink>;


AlbumItem.propTypes = {
	album: PropTypes.shape({
		userId: PropTypes.number.isRequired,
		title: PropTypes.string.isRequired,
		id: PropTypes.number.isRequired,
	}),
};

export default AlbumItem;