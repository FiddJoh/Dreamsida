import React, { Component} from 'react';
import { Fade } from 'react-slideshow-image';

import { Slide } from 'react-slideshow-image';
import "./ShowImageComponent.css";


export default class ShowImageComponent extends Component {

    constructor(props){
        super(props);
        this.slideRef = React.createRef();
        this.back = this.back.bind(this);
        this.next = this.next.bind(this);
        this.slideShow = this.props.slideArray;
        this.path = this.props.path;
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
             <Fade ref={this.slideRef} {...properties}>
             {Object.keys(this.slideShow).map((key, index)=>(
                   <div className="each-fade" key={index}>
                   <img className="lazy" src={this.path + key} alt="sample" />
                   {console.log(key)}

                       </div>
             ))}
            </Fade>
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