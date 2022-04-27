import ShowImageComponent from 'components/ShowImageComponent/ShowImageComponent';
import React, { Component, Fragment} from 'react';
import styles from './ImageDisplay.css'
import 'react-slideshow-image/dist/styles.css';

function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
  }


export default class ImageDisplay extends Component {
        images;
        fs;
        constructor(props){
            super(props);

            
           this.images = importAll(require.context('../../../public/image/2020', false, /\.(png|jpe?g|svg)$/));
           console.log(this.images[0]);
        }

    
    text = process.env.PUBLIC_URL;

    slideImages = [
        {
            url:this.text + '/image/2020/3.png',
            caption: 'image3'
        },
        {
            url:this.text + '/image/2020/4.png',
            caption: 'image4'
        },
        {
            url:this.text +'/image/2020/5.png'
            ,
            caption: 'image5'
        },
        {
            url:this.text + '/image/2021/1.png'
            ,
            caption: 'image1'
        },
        {
            url:this.text + '/image/2021/2.png'
            ,
            caption: 'image2'
        }];
   

    render(){        
        return(
            <Fragment>  
  
                  <div className={styles.ImageDisplay} id="right-middle">
                  <ShowImageComponent slideArray={this.slideImages} />
            </div>

            </Fragment>
         
        );
    }
  
}