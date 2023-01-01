import React from 'react';
import PropTypes from "prop-types";
import './styles.scss';


const Label = ({ children }) => <span>{children}</span>;

Label.propTypes = {
	children: PropTypes.node,
};

export default Label;