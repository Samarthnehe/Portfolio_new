import React, { Component } from 'react';

import {about} from './../constants/About';
import {projects} from './../constants/Projects';
import {skills} from './../constants/Skills';
import './App.css';
import {Portfolio} from './Portfolio/Portfolio';
class App extends Component {
	constructor () {
		super();

		this.state = {
			sectionInfo:"about",
			sectionHeading:about.heading,
			sectionQuote:about.quote,
			about:about,
			skills:skills,
			projects:projects
		};
	}

	sectionHandleClick=(sectionName)=>{
		this.setState({
			sectionInfo:sectionName,
			sectionHeading:this.state[sectionName].heading,
			sectionQuote:this.state[sectionName].quote
		})
	}
	render () {
		return (
			<div className="App">
				<Portfolio sectionHeading={this.state.sectionHeading}
				sectionInfo={this.state.sectionInfo}
				sectionQuote={this.state.sectionQuote}
				sectionHandleClick={this.sectionHandleClick}
				about={this.state.about} skills={this.state.skills} projects={this.state.projects}/>
			</div>
		);
	}
}

export default App;
