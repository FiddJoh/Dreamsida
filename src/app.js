import React, {Component, useState} from 'react';
import Header from'./components/Header/Header';
import Sidebar from 'components/Sidebar/Sidebar';
import ImagesByYear from 'components/ImagesByYear/ImagesByYear';
import 'app.css';
import ImageDisplay from 'components/ImageDisplay/ImageDisplay';
import { Slideshow } from 'components/Slide/SlideContainer';
import SlideShowSlider from 'components/SlideShowSlider/SlideShowSlider';




function App() {
	function handleClick(value){
		if(value === 0){
			setShowStartPage(true);
		}
		else{
			setShowStartPage(false);
			setYear(value);
		}
	}


	
	const [year, setYear] = useState("");
	const [showStartPage, setShowStartPage] = useState(true);
	return (

		<React.StrictMode>
			<div className="container">
				<div  className="sidebar">
					<Sidebar clickFunction={handleClick}/>
				</div>
				<div className="headerrow">
					<Header />
					
						<div>
						{!showStartPage &&
							<ImagesByYear years={year}/>
						}
						{showStartPage &&
							<SlideShowSlider />
							}
						</div>
					
					
					
				</div>
			</div>
			</React.StrictMode>

	);
}


export default App;