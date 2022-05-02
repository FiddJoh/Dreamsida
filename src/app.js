import React, {Component, useState} from 'react';
import Header from'./components/Header/Header';
import Sidebar from 'components/Sidebar/Sidebar';
import ImagesByYear from 'components/ImagesByYear/ImagesByYear';
import 'app.css';



function App() {
	function handleClick(value){
		setYear(value);
	}
	const [year, setYear] = useState("");
	return (

		<React.StrictMode>
			<div className="container">
				<div  className="sidebar">
					<Sidebar clickFunction={handleClick}/>
				</div>
				<div className="headerrow">
					<Header />

					<div>
					<ImagesByYear years={year}/>
					</div>
				</div>
			</div>
			</React.StrictMode>

	);
}


export default App;