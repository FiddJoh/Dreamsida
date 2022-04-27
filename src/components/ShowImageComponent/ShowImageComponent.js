import React, { Component} from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import styles from './ShowImageComponent.css'
import { Slide } from 'react-slideshow-image';


export default class ShowImageComponent extends React.Component {
    slideShow = [];
    constructor(props){
        super(props);
        
        this.slideShow = this.props.slideArray;

    }
    render(){
        return(
            <div className={styles.ShowImageComponent} data-testid="ShowImageComponent">
            <div className="slide-container">
            <Slide arrows="false">
             {this.slideShow.map((slideArray, index)=> (
                <div className="each-fade" key={index}>
                    <div className="image-container">
                      <img src = {slideArray.url} alt="test" className ="fadeClass"></img>
                      </div>
                    <span>{this.slideShow.caption}</span>
                  </div>

              ))} 
            </Slide>
          </div>
          </div>

        );
    }
}