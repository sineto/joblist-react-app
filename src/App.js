import React, { useState } from 'react';
import Table from './Table';
import Form from './Form';

const App = () => {
	const [ characters, setCharacters ] = useState([]);

	const removeCharacter = (index) => {
		const chars = characters.filter((char, i) => {
			return i !== index;
		});

		setCharacters(chars);
	};

	const handleSubmit = (char) => {
		setCharacters([ ...characters, char ]);
	};

	return(
		<div className='container'>
			{ /* Passing Props to Component */ }
			<Table
				charactersData={characters}
				removeCharacter={removeCharacter}
			/>
			<Form handleSubmit={handleSubmit}/>
		</div>
	);
};

export default App;
