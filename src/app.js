import React, {Component} from 'react';
import Header from'./components/Header/Header';
import Sidebar from 'components/Sidebar/Sidebar';
import ImagesByYear from 'components/ImagesByYear/ImagesByYear';
import 'app.css';

class App extends Component {
	constructor() {
		super();
		this.state = {
			/*states här*/
		}
	}

	render() {
		return (
			<React.StrictMode>
   				<div className="container">
    				<div  className="sidebar">
    					<Sidebar/>
    				</div>
    				<div className="headerrow">
    					<Header />

    					<div>
						<ImagesByYear years="2020"/>
    					</div>
    				</div>
    			</div>
  			</React.StrictMode>
  		);
	}
}

export default App;