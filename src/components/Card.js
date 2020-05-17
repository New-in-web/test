import React from 'react';
import 'tachyons';
import './Card.css'


const Card = ({id,name,email})=>{
	return (
		<div className='bg-light-green tc dib br3 pa3 ma2 grow bw2 shadow-5'>
			<img alt='robot' src={`https://robohash.org/${id}?200x200`} />
			<h2>{name}</h2>
			<p>{email}</p>
		</div>
	);
}

export default Card;