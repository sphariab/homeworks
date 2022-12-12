import React, { Component } from 'react';
import PropTypes from "prop-types";
import './styles.scss';


class Label extends Component {
	render () {
		const { children } = this.props;

		return <span>{children}</span>;
	}
}

Label.propTypes = {
	children: PropTypes.node,
};

export default Label;