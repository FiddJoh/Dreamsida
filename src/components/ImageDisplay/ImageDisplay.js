import ShowImageComponent from 'components/ShowImageComponent/ShowImageComponent';
import React, { Component, Fragment} from 'react';
import styles from './ImageDisplay.css'
import 'react-slideshow-image/dist/styles.css';
import {Slideshow, SlideshowItem } from 'components/Slide/SlideContainer'

function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
  }


export default class ImageDisplay extends Component {
        images = {};
        fs;
        constructor(props){
            super(props);

            
           this.images2020 = importAll(require.context('../../../public/image/2020', false, /\.(png|jpe?g|svg)$/));
           this.images2021 = importAll(require.context('../../../public/image/2021', false, /\.(png|jpe?g|svg)$/));
           console.log(this.images);
        }

    
    text2020 = process.env.PUBLIC_URL + '/image/2020/';
    text2021 = process.env.PUBLIC_URL + '/image/2021/';

   

    render(){        
        return(
            <Fragment>  
            <div className={styles.ImageDisplay} id="right-middle">    
            <Slideshow width={400} height={400}>
                     {Object.keys(this.images2020).map((key, index)=> (
                         <SlideshowItem>
                            <img className="test" src={this.text2020 + key} alt="painting" ></img>
                        </SlideshowItem>
                     ))}
                        {Object.keys(this.images2021).map((key, index)=> (
                         <SlideshowItem>
                            <img className="test" src={this.text2021 + key} alt="painting" ></img>
                        </SlideshowItem>
                     ))}      
            </Slideshow>
            </div>

            </Fragment>
         
        );
    }
  
}