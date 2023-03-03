import React, { useEffect } from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { useLocation } from 'react-router-dom';
import { getPhotosApi as getPhotos } from "../../api";
import { generateKey } from "../../utils";
import './styles.scss'


const PhotosList = ({ photos, getPhotos }) => {
	const { pathname } = useLocation();

	useEffect(() => {
		getPhotos(pathname);
	}, [getPhotos, pathname]);

	return (
		<>
			{photos && photos.map(({ id, title, url }) =>
				<div className='photo__container' key={id}>
					<img src={url} alt={title} key={generateKey()} className='photo__image m-r m-b' />
					<p>{title}</p>
				</div>)}
			{photos && !photos.length && (<p>There are no photos</p>)}
		</>
	);
}

PhotosList.propTypes = {
	photos: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.number,
		url: PropTypes.string,
		title: PropTypes.string.isRequired,
		albumId: PropTypes.number.isRequired,
		thumbnailUrl: PropTypes.string.isRequired,
	})),
};

PhotosList.defaultTypes = {
	photos: [],
};

const mapStateToProps = state => ({
	photos: state.photos,
});

const mapDispatchToProps = {
	getPhotos,
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(PhotosList)