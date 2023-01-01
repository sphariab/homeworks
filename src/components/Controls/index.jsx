import React from 'react';
import Button from '../Button';
import './styles.scss';


const Controls = ({ closeForm, isChanged }) => (
	<div className='controls'>
		<Button
			disabled={!isChanged}
			text='Save'
			className='button_green'
			type='submit'
		/>
		<Button onClick={closeForm} text='Cancel' className='button_red' />
	</div>
);

export default Controls;