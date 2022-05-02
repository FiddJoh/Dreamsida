import React, { useEffect, useState } from 'react';



function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
  }



function ImagesByYear(props) {
  
    let imagesPath = process.env.PUBLIC_URL + '/image/';
    const [years, setYears] = useState(props.years);
    const [fileNames, setFileNames] = useState({});


    useEffect(() =>{
        setYears(props.years);
    }, [props.years])

   useEffect(() => {
    if(years == "2021"){
         setFileNames(importAll(require.context('../../../public/image/2021', false, /\.(png|jpe?g|svg)$/, 'lazy')));
    }    
    else if(years == "2020"){
        console.log(years);
       setFileNames(importAll(require.context('../../../public/image/2020', false, /\.(png|jpe?g|svg)$/, 'lazy')));
    }
    else if(years == "2019"){
       // setFileNames(importAll(require.context('../../../public/image/2019', false, /\.(png|jpe?g|svg)$/, 'lazy')));
    }
    else{
        setFileNames("");
    } 
    }, [years]);
   


  return (
    <div>

       {Object.keys(fileNames).map((key, index)=> (     
        
        <img className="imagesByYearElement" src={imagesPath + years + "/" + key} alt="painting" ></img>
        
       ))
       }
    </div>
  );
}
export default ImagesByYear;