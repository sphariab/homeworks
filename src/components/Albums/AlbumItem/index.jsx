import React from 'react';
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import './styles.scss'


const AlbumItem = ({ album }) => <NavLink to={`/albums/${album.id}/photos`}>{album.title}</NavLink>;


AlbumItem.propTypes = {
	album: PropTypes.shape({
		albumId: PropTypes.number,
		title: PropTypes.string.isRequired,
		id: PropTypes.number.isRequired,
	}),
};

export default AlbumItem;