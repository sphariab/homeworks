import React, { useEffect } from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { useLocation } from 'react-router-dom';
import { getAlbumsApi as getAlbums } from "../../../api";
import Album from "../AlbumItem";
import { generateKey } from "../../../utils";
import './styles.scss'


const AlbumsList = ({ albums, getAlbums }) => {
	const { pathname } = useLocation();

	useEffect(() => {
		getAlbums(pathname);
	}, [getAlbums, pathname]);

	return (
		<>
			{albums && albums.map(album => <Album album={album} key={generateKey()} />)}
			{albums && !albums.length && (<p>There are no albums</p>)}
		</>
	);
}

AlbumsList.propTypes = {
	albums: PropTypes.arrayOf(PropTypes.shape({
		title: PropTypes.string,
		id: PropTypes.number.isRequired,
		albumId: PropTypes.number.isRequired,
	})),
};

AlbumsList.defaultTypes = {
	albums: [],
};

const mapStateToProps = state => ({
	albums: state.albums,
});

const mapDispatchToProps = {
	getAlbums,
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(AlbumsList)