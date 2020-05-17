import React from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';


class App extends React.Component{
//you have to use constructor when you need a state
	constructor(){
		super()
		this.state = {
			robots : [] ,
			searchfiled : ''
		}
	}
	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response=>response.json())
		.then( users=>this.setState({robots : users}) );
	}	

	onSearchChange = (event) =>{
		this.setState({searchfiled : event.target.value});
	}

	render()
	{
		const {robots,searchfiled} = this.state;
		const filtredRobots = (robots).filter(e=>e.name.toLowerCase().includes(searchfiled.toLowerCase()));

		if (!robots.length)
			return <h1 className='tc'>LOADING</h1>;
		else{

			return(
				<div className='tc'>
					<h1 className='f1'>RobotFriends</h1>
					{/* it's a child component of App */}
					<SearchBox searchChange={this.onSearchChange} />
					{/* it's a child component of App */}
					<Scroll robots={filtredRobots}>
						{/* it's a children of Scroll component */}
						<CardList robots={filtredRobots} />
					</Scroll>
				</div>
			);
		}
	}
}

export default App;