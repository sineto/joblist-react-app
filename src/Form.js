import React, { useState } from 'react';

const Form = ({ handleSubmit }) => {
	const [ name, setName ] = useState('');
	const [ job, setJob ] = useState('');
	const data = { name, job };

	// const handleName = (event) => {
	// 	const { value } = event.target
	// 	setName(value);
	// };

	// const handleJob = (event) => {
	// 	const { value } = event.target
	// 	setJob(value);
	// };

	const submitForm = () => {
		handleSubmit(data);
		setName('');
		setJob('');
	};

	return(
		<form>
			<label htmlFor='name'>Name</label>
			<input
				type='text'
				name='name'
				id='name'
				value={name}
				// onChange={handleName}
				onChange={e => setName(e.target.value)}
			/>
			<label htmlFor='job'>Job</label>
			<input
				type='text'
				name='job'
				id='job'
				value={job}
				// onChange={handleJob}
				onChange={e => setJob(e.target.value)}
			/>
			<input
				type='button'
				value='Submit'
				onClick={submitForm}
			/>
		</form>
	);
};

export default Form;
