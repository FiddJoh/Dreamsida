import React, { Component} from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';
import "./ShowImageComponent.css";


export default class ShowImageComponent extends Component {

    constructor(props){
        super(props);
        this.slideRef = React.createRef();
        this.back = this.back.bind(this);
        this.next = this.next.bind(this);
        this.slideShow = this.props.slideArray;
        this.state = {
            current: 0
          };
    }
    back() {
        this.slideRef.current.goBack();
      }
    
    next() {
        this.slideRef.current.goNext();
      }
    render(){
        const properties = {
            duration: 5000,
            autoplay: true,
            transitionDuration: 500,
            arrows: false,
            infinite: true,
            easing: "ease",
            indicators: (i) => <div className="indicator">{i + 1}</div>
          };

        return(
            <div className="showImageComponent">
            <div className="slide-container">
             <Slide ref={this.slideRef} {...properties}>
             {this.slideShow.map((slideImage, index)=> (
                <div className="each-slide" key={index}>
                <img className="lazy" src={slideImage.url} alt="sample" />
                {console.log(slideImage.url)}
                    <span>{slideImage.caption}</span>
                  </div>
              ))} 
            </Slide>
          </div>

          
        <div className="slide-container buttons">
        <button onClick={this.back} type="button">
          Go Back
        </button>
        <button onClick={this.next} type="button">
          Go Next
        </button>
      </div>
      </div>
        );
    }
}