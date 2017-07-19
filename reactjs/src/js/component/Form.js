import React, { Component } from 'react';

function InputForm(props){
	return(
		<div className="form-group">
			
				  <label>{props.placehold}</label>
				  <input type='text' className='form-control' placeholder={props.placehold} aria-describedby='sizing-addon1'/>
		</div>
	);
}
function FormUser(){
	return(
		<form action='index_submit' method='get' acceptCharset='utf-8'>
			<InputForm placehold='username'/>
			<InputForm placehold='password'/>

			<InputForm placehold='email'/>
			<InputForm placehold='username'/>
			<InputForm placehold='password'/>

			 <button type="submit" className="btn btn-default">Register</button>
		</form>
	);
}
class Form extends Component{
	render(){
		return <FormUser/>
	}
}
export default Form;