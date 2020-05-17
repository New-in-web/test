import React from 'react';

const SearchBox = ({ searchfiled, searchChange})=>{

	return (
		<div className='pa1'>
			<input 
				className='pa3 ba b--green bg-lightest-blue'
				type='search' placeholder='search robots'
				onChange = {searchChange} 
			/>
		</div>
	);
}

export default SearchBox;