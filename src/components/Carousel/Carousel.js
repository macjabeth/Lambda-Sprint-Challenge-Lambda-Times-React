import React, { Component } from 'react';
import styled from 'styled-components';
import { carouselData } from '../../data';

export default class Carousel extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentImg: 0,
      images: []
    }
  }

  componentDidMount(){
    this.setState({
      images: carouselData
    });
  }

  leftClick = () => {
    this.setState(state => ({
      currentImg:
        state.currentImg - 1 >= 0
          ? --state.currentImg : state.images.length - 1
    }));
  }

  rightClick = () => {
    this.setState(state => ({
      currentImg:
        state.currentImg + 1 < state.images.length
          ? ++state.currentImg : 0
    }));
  }

  selectedImage = () => {
    const {images, currentImg} = this.state;
    return <Image src={images[currentImg]} style={{display: 'block'}} />
  }

  render(){
    return (
      <CarouselContainer>
        <Button type="left" onClick={this.leftClick}>{"<"}</Button>
        {this.selectedImage()}
        <Button type="right" onClick={this.rightClick}>{">"}</Button>
      </CarouselContainer>
    )
  }
}

const CarouselContainer = styled.div`
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
  }
`;

const Button = styled.div`
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
  ${props => props.type}: 25px;
  transform: translate(0, -50%);

  &:hover {
    color: #333;
    background-color: #fff;
    border: 2px solid #333;
  }
`;

const Image = styled.img`
  width: 100%;
  display: none;
`;
