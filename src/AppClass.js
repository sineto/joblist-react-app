import React, { Component } from 'react';
import Table from './Table';
import Form from './Form';

class App extends Component {
	state = {
		characters: [],
	};

	// needs tobe an arrow function to catch
	// this.state
	removeCharacter = (index) => {
		const { characters } = this.state;

		this.setState({
			characters: characters.filter((character, i) => {
				return i !== index
			})
		});
	};

	handleSubmit = (character) => {
		this.setState({ characters: [ ...this.state.characters, character ] });
	};

	render() {
		const { characters } = this.state;

		return(
			<div className='container'>
				{ /* Passing Props to Component */ }
				<Table
					charactersData={characters}
					removeCharacter={this.removeCharacter}
				/>
				<Form handleSubmit={this.handleSubmit}/>
			</div>
		);
	}
}

export default App;
