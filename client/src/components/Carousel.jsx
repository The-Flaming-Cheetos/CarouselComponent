import React from 'react';
import LeftArrow from './LeftArrow.jsx';
import RightArrow from './RightArrow.jsx';
import Slide from './Slide.jsx';
import leftArrow from '../../../images/whiteArrowLeft.png';
import rightArrow from '../../../images/whiteArrowRight.png';
import PhotosModal from './PhotosModal.jsx';
import Dots from './Dots.jsx';
import axios from 'axios';



class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      imageUrls: ["https://myfecimages.s3-us-west-1.amazonaws.com/winchester+pictures/orbs-of-light-floating.jpg"],
      travelersHovered: false,
      DotsArray: [0,1,2,3,4],
      activeDotIndex: 0
    };
    this.goToNextSlide = this.goToNextSlide.bind(this);
    this.goToPrevSlide = this.goToPrevSlide.bind(this);
    this.showTravelersModal = this.showTravelersModal.bind(this);
    this.closeTravelersModal = this.closeTravelersModal.bind(this);
  }
  showTravelersModal() {
    this.setState({
      travelersHovered: true
    });

  }
  closeTravelersModal() {
    this.setState({
      travelersHovered: false
    });
  }
  componentDidMount() {
    axios.get('/api/trips/CarouselComponent/1/photos').then((response) => {
      console.log(response.data);
      // response.data.splice(8,1);
      // response.data.splice(4,1);
      this.setState({
        imageUrls: response.data
      })
    });
  }
  goToPrevSlide() {
    const lastIndex = this.state.imageUrls.length - 1;
    const {activeIndex} = this.state;
    const shouldResetIndex = activeIndex === 0;
    const index =  shouldResetIndex ? lastIndex : activeIndex - 1;

    if(this.state.activeDotIndex === 0) {
      this.state.activeDotIndex = 5;
      this.setState({
        activeDotIndex: this.state.activeDotIndex
      })
    }

    this.state.activeDotIndex -= 1;
    this.setState({
      activeDotIndex: this.state.activeDotIndex
    })

    this.setState({
      activeIndex: index
    });
  }
  goToNextSlide() {
    const lastIndex = this.state.imageUrls.length - 1;
    const { activeIndex } = this.state;
    const shouldResetIndex = activeIndex === lastIndex;
    const index =  shouldResetIndex ? 0 : activeIndex + 1;

    if(this.state.activeDotIndex === 5) {
      this.state.activeDotIndex = 0;
      this.setState({
        activeDotIndex: this.state.activeDotIndex
      })
    }


    this.state.activeDotIndex += 1;
    this.setState({
      activeDotIndex: this.state.activeDotIndex
    })
    this.setState({
      activeIndex: index
    });
  }

  render() {
    return (
      <div className="carousel">
        <LeftArrow goToPrevSlide = {this.goToPrevSlide}/>

        <Dots DotsArray={this.state.DotsArray} activeIndex = {this.state.activeDotIndex}></Dots>

        <Slide url={this.state.imageUrls[this.state.activeIndex]} show={this.state.travelersHovered} showTravelersModal={this.showTravelersModal} closeTravelersModal = {this.closeTravelersModal}/>

        <RightArrow goToNextSlide = {this.goToNextSlide}/>
      </div>
    );
  }
}

export default Carousel;
