import React, { Component } from 'react';
import { carouselData } from '../../data'
import styled, { css } from 'styled-components';


const CarouselStyle = styled.div` 
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  height: 500px;
  position: relative;
  overflow: hidden;
  margin-top: 16px;

@media (min-width: 1200px) {
    width: 1200px;
}`;

const CarouselButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: none;
  flex-direction: row;
  color: #fff;
  background-color: #333;
  font-size: 40px;
  border-radius: 50%;
  position: absolute;
  width: 50px;
  height: 50px;
  cursor: pointer;
  top: 50%;
  right: 25px;
  transform: translate(0, -50%);
  ${props => props.left && css`
 left: 25px;
`}
&:hover {
  color: #333;
  background-color: #fff;
  border: 2px solid #333;
}
`;

const CarouselImg = styled.img` 
  width: 100%;
  display: none;
`;


// Complete this Carousel 
export default class Carousel extends Component {
  constructor(props){
    super(props);
    this.state = {

      images: [],
      index: 0
    }
  }
  componentDidMount(){
this.setState({
  images: carouselData
});
  }

  leftClick = () => {
this.setState({
  index: this.state.index < this.state.images.length - 1 ? this.state.index + 1 : 0
})
  };

  rightClick = () => {
this.setState({
  index: this.state.index > 0 ? this.state.index - 1 : this.state.images.length -1
});
  }

  selectedImage = () => {
    return (
<CarouselImg
src={this.state.images[this.state.index]}
style={{ display: 'block'}}
alt=''
/>
    );
  };
  
  render(){
    return (
      <CarouselStyle>
        <CarouselButtons left onClick={this.leftClick}>{"<"}</CarouselButtons>
        <this.selectedImage />
        <CarouselButtons onClick={this.rightClick}>{">"}</CarouselButtons>
      </CarouselStyle>
    );
  }
}
