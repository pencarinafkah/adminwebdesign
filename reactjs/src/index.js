import React from 'react';
import ReactDOM from 'react-dom';
import Navigasi from './js/component/navigasimenu.js';
import Content from './js/component/content.js';


ReactDOM.render(
	<Navigasi/>,document.getElementById('navigasimenu')
);

ReactDOM.render(
	<Content/>,document.getElementById('contentarea')
);