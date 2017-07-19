import React, { Component } from 'react';
import '../../css/custom-style.css';



function List(props){
	return (
		<li>	
			<a href={props.link}><span>{props.namamenu}</span></a>
			<span className='icon'>
				<i className="fa fa-caret-right" aria-hidden="true"></i>
			</span>
			{props.subMenu}
		</li>
	);
}
function SubSubMenu(props){
	return(
		<ul className={'list-unstyled submenu '+props.warna}>
			<List namamenu='subsubmenu1' link='#subsubmenu1'/>
			<List namamenu='subsubmenu2' link='#subsubmenu2'/>
			<List namamenu='subsubmenu3' link='#subsubmenu3'/>
			<List namamenu='subsubmenu4' link='#subsubmenu4'/>
			<List namamenu='subsubmenu5' link='#subsubmenu5'/>
		</ul>
	);
}
function SubMenu(props){
	return(
		<ul className={'list-unstyled submenu '+props.warna}>
			<List namamenu='submenu1' link='#submenu1'/>
			<List namamenu='submenu2'  
				subMenu =
				{
					<SubSubMenu warna='grey'/>
				}
				link='#submenu2'
			/>
			<List namamenu='submenu3' link='#submenu3'/>
			<List namamenu='submenu4' link='#submenu4'/>
			<List namamenu='submenu5' link='#submenu5'/>
		</ul>
	);
}

function Menucontainer(){
	return(
		<ul className='list-unstyled menu'>
			<List namamenu='menu1' link='#menu1'/>
			<List namamenu='menu2' link='#menu2'
				subMenu=
				{
					<SubMenu warna='grey'/>
				}
			/>
			<List namamenu='menu3' link='#menu3'/>
			<List namamenu='menu4' link='#menu4'/>
			<List namamenu='menu5' link='#menu5'/>
		</ul>
	);
}

function NavAtas(){
	return(
		<section>
				<section className='col-md-12 header-brand'>
					<section className='brand col-md-3 col-md-offset-2'>
						<h3 className='title'><span className='brand-one'>Admin</span><span className='brand-two'>Page</span></h3>
					</section>
					<section className='col-md-3 col-xs-12 col-md-offset-1 pull-right'>
						<form action="post" className='searchbox'>
							<div className='form-group'>
								<input type="text" className='form-control' placeholder="search"/>
							</div>
						</form>
					</section>
				</section>
		</section>
	);
}

function NavSamping(){
	return(
		<section className='col-md-1 col-xs-12 nav-container'>
				<div className='row wrap'>
					<button aria-controls="bs-navbar" aria-expanded="false" className="collapsed navbar-toggle" data-target="#bs-navbar" data-toggle="collapse" type="button">
					 	<span className="sr-only">Toggle navigation</span> 
						<span className="icon-bar"></span> 
						<span className="icon-bar"></span> 
					 	<span className="icon-bar"></span> 
					</button>

					<div className='nav-menu'>
						<Menucontainer >
						</Menucontainer>
					</div>
				</div>
		</section>
	);
}



class Navigasi extends Component{

	render() {
		return (
			<div>
				<NavAtas />
				<NavSamping/>
			</div>
		);
	}
}


export default Navigasi;