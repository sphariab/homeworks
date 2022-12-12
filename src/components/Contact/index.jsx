import React, { Component } from 'react';
import PropTypes from "prop-types";
import './styles.scss'


class Contact extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isCompleted: false,
		}
	}

	componentDidMount() {
		this.setState({ isCompleted: this.props.item.isCompleted })
	}

	changeStatus = () => this.setState({ isCompleted: !this.state.isCompleted });

	render () {
		const { name, key, id, surname, phone } = this.props.item;

		return (
			<tr className='contact contact__row' onClick={this.changeStatus} key={key}>
				<td className='contact__cell'>{name}</td>
				<td className='contact__cell'>{surname}</td>
				<td className='contact__cell'>{phone}</td>
				<td className='contact__cell contact_delete' onClick={() => this.props.deleteContact(id)}></td>
			</tr>
		);
	}
}

Contact.propTypes = {
	deleteContact: PropTypes.func.isRequired,
	item: PropTypes.shape({
		name: PropTypes.string,
		surname: PropTypes.string.isRequired,
		phone: PropTypes.string.isRequired,
		key: PropTypes.string,
		id: PropTypes.number.isRequired,
	}),
};

Contact.defaultTypes = {
	contacts: [],
};

export default Contact;