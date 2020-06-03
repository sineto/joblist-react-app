import React from 'react';

// simple/function component
const TableHeader = () => {
	return(
		<thead>
			<tr>
				<th>Name</th>
				<th>Job</th>
			</tr>
		</thead>
	);
};

const TableBody = ({ charactersData, removeCharacter }) => {
	const rows = charactersData.map((row, index) => {
		return(
			<tr key={index}>
				<td>{row.name}</td>
				<td>{row.job}</td>
				<td>
					<button 
						onClick={() => removeCharacter(index)}>
						Delete
					</button>
				</td>
			</tr>
		);
	});

	return(
		<tbody>
			{rows}
		</tbody>
	);
};

// class component
const Table = (props) => {
	const { charactersData, removeCharacter } = props;

	return(
		<table>
			<TableHeader />
			<TableBody 
				charactersData={charactersData}
				removeCharacter={removeCharacter}
			/>
		</table>
	);
};

export default Table;
