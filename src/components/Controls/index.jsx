import React, { Component } from 'react';
import Button from '../Button';
import './styles.scss';


class Controls extends Component {
	onCancel = () => this.props.closeForm();

	render () {
		return (
			<div className='controls'>
				<Button
					disabled={!this.props.isChanged}
					text='Save'
					className='button_green'
					type='submit'
				/>
				<Button onClick={this.onCancel} text='Cancel' className='button_red' />
			</div>
		);
	}
}

export default Controls;