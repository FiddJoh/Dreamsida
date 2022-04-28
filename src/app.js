import React, {Component} from 'react';
import Header from'./components/Header/Header';
import Sidebar from 'components/Sidebar/Sidebar';
import ImageDisplay from './components/ImageDisplay/ImageDisplay';
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
    					<p>Här ska väl ImageDisplay vara</p>
    					<div>
    						<p>Eller här i en ledig div</p>
    					</div>
    				</div>
    			</div>
  			</React.StrictMode>
  		);
	}
}

export default App;