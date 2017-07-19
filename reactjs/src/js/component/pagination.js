import React, { Component } from 'react';


function ListItem(props){
	if(props.pages===props.value)
		return (<li className='active'><a href='#ke'>{props.value}</a></li>);
	else
	  return (<li className=''><a href='#ke'>{props.value}</a></li>);
}

const numbers = [1, 2, 3, 4, 5,6,7,8,9,10,11,12,13,14,15];
function PaginationList(props){

   const listItems = numbers.map((number) =>
   		 <ListItem key={number.toString()} value={number} pages={1}/>
   );
	return 	<ul className='pagination' style={{marginLeft:15+'px'}}>{listItems}</ul>;
}

class Pagination extends Component{

	render(){
		return <PaginationList active='1'/>
	}
}

export default Pagination;