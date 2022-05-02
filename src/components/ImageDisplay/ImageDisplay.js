import React, { Component, Fragment} from 'react';
import styles from 'index.css'
import SlideShow from 'react-slideshow-ui';


function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
  }


export default class ImageDisplay extends Component {
        images = [];
        constructor(props){
            super(props);
            this.text2020 =  '/image/2020/';
            this.text2021 =  '/image/2021/';        
            this.images2020 = importAll(require.context('../../../public/image/2020', false, /\.(png|jpe?g|svg)$/));
            this.images2021 = importAll(require.context('../../../public/image/2021', false, /\.(png|jpe?g|svg)$/));
            this.index = 0;

           Object.keys(this.images2020).map((key, index) =>{
            this.images[index++] = this.text2020 + key;    
           });
           Object.keys(this.images2021).map((key, index) =>{
            this.images[index++] = this.text2021 + key;    
           });
           
           console.log("TEST: " + this.images);
        }

    render(){        
        return(
            <Fragment>  
            <div className={"slideShow"} id="right-middle">    
            <SlideShow 
            showFullscreenIcon={false}
            images ={this.images}
         withTimestamp={true}
          pageWillUpdate={(index, image) => {
            console.log(`Page Update! index: ${index}, image: ${image}`);
          }}
        />
          
          
           {/* <Slideshow width={400} >
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
            */}
            </div>

            </Fragment>
         
        );
    }
  
}