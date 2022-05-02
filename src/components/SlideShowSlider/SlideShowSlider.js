import React, { Fragment } from 'react'
import { useEffect, useState, useRef } from 'react';
import styles from './SlideShowslider.css'
const colors = ["#0088FE", "#00C49F", "#FFBB28"];
const delay = 2500;

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}
function SlideShowSlider() {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);        
  const text2020 =  '/image/2020/';
  const text2021 =  '/image/2021/';        
  let images2020 = importAll(require.context('../../../public/image/2020', false, /\.(png|jpe?g|svg)$/));
  let images2021 = importAll(require.context('../../../public/image/2021', false, /\.(png|jpe?g|svg)$/));
  let i = 0;
 



  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === Object.keys(images2020).length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index, images2020]);

  return (
    <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
       {Object.keys(images2020).map((key, index)=> (
        	<img className="slide" key={key} src={text2020 + key} alt="painting" ></img>
       ))}
      </div>
	  
	  

      <div className="slideshowDots">
        {Object.keys(images2020).slice(index, index+5).map((_, idx) => (

          <img
            key={idx}
			src={text2020 + _}
			alt="painting"
            className={`slideshowDot${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></img>
        ))}
      </div>
    </div>
  );
}

export default SlideShowSlider;