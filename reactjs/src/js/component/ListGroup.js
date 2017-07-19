import React, { Component } from 'react';

function GroupList(){
	return(
		<div className="bs-example" data-example-id="panel-with-list-group">

			<div className="panel-heading">
				<div className="panel-body"> 
					<p>Some default panel content here. Nulla vitae elit libero, a pharetra augue. Aenean lacinia bibendum nulla sed consectetur. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Nullam id dolor id nibh ultricies vehicula ut id elit.</p> 
				</div>
				<ul className="list-group"> 
					<li className="list-group-item">Cras justo odio</li> 
					<li className="list-group-item">Dapibus ac facilisis in</li> 
					<li className="list-group-item">Morbi leo risus</li> 
					<li className="list-group-item">Porta ac consectetur ac</li> 
					<li className="list-group-item">Vestibulum at eros</li>
					<li className="list-group-item">Cras justo odio</li> 
					<li className="list-group-item">Dapibus ac facilisis in</li> 
					<li className="list-group-item">Morbi leo risus</li> 
					<li className="list-group-item">Porta ac consectetur ac</li> 
					<li className="list-group-item">Vestibulum at eros</li> 
				</ul>
			</div>
		</div>
	);
}
class ListGroup extends Component{
	render(){
		return <GroupList/>
	}
}
export default ListGroup;