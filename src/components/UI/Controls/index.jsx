import React from 'react';
import Button from '../Button';
import './styles.scss';


const Controls = ({ onClose, isChanged }) => (
	<div className='controls'>
		<Button
			disabled={!isChanged}
			text='Save'
			className='button_green m-r'
			type='submit'
		/>
		<Button onClick={onClose} text='Cancel' className='button_red' />
	</div>
);

export default Controls;