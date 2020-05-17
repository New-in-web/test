import React from 'react';
import Card from './Card';



const CardList = ({ robots })=>{
	//we return a virtual DOM = HTML which contains js
	return (
		<div>
			{robots.map((robot,i)=>
				{

					 return (<Card 
					 			key={robot.id} 
					 			id={robot.id} 
					 			name={robot.name} 
					 			email={robot.email}
					 		/>);
				})
			}
	  	</div>
	);
}
export default CardList;