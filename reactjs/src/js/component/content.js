import React, { Component } from 'react';
import '../../css/custom-style.css';
import ListGroup from './ListGroup.js';
import Pagination from './pagination.js';
import Form from './Form.js';

function ImageProfile(){
	return <img className='img-circle image-responsive' width='64px' height='64px' src={require('../../img/17352337_687369958112740_3529730537595602351_n.jpg')} alt='...'></img>;
}

function OverView(){
	return(
		<div>
			<Statistic diagram='kalvin' profile={<ImageProfile/>}/>
			<Statistic diagram='jeremi' profile={<ImageProfile/>}/>
			<Statistic diagram='keiza'  profile={<ImageProfile/>}/>
		</div>
	);

}
function Statistic(props){
	return(
		<div className='col-md-4 text-center'>
			<div className='row'>{props.profile}</div>
			<div className='row'>{props.diagram}</div>
		</div>
	);
}

function MainContent(){
	
	return(
		<section className='col-md-12'>
			<RightList listname='left'/>
			<LeftList  listname='right'/>
		</section>
	);
}

function LeftList(props){
	return (
		<div className='col-md-4'>
			<img className='img-responsive cardImage' src={require('../../img/17352337_687369958112740_3529730537595602351_n.jpg')} alt='...'/>
			<Form/>
		</div>
	);
}

function RightList(props){
	return (
		<div className='col-md-8'>
			<ListGroup/>
			<Pagination/>
		</div>
	);
}

class Content extends Component {
	render() {
		return (
			<section className='col-md-12 content-root'>
				<OverView />
				<MainContent/>
			</section>
		);
	}
}

export default Content;
