import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import heartImg from '../../../images/heart.jpg';
import redHeartImg from '../../../images/redHeart.jpg';
import shareIcon from '../../../images/shareIcon.png';
import shareIconBlack from '../../../images/shareIconBlack.png';
import Carousel from './Carousel.jsx';
import RightArrow from './RightArrow.jsx';
import PhotosModal from './PhotosModal.jsx';
import walkingPNG from '../../../images/walking.png';
import whiteArrowDown from '../../../images/WhiteArrowDown.jpg';
import firstClock from '../../../images/firstClock.png';
import durationClock from '../../../images/durationClock.png';
import mapMarker from '../../../images/mapMarker.png';
import pencil from '../../../images/pencil.png';
import Camera from '../../../images/camera.png';
import ModalTravelers from './ModalTravelers.jsx';

import {Button, Title, Rating, Reviews, TextHeader, SpanText, H4Text, Text, Heart, IconShare, Text2, CarouselFooter, CarouselFooterText, CarouselFooterTextTwo, CarouselFooterImage, CarouselFooterButton, WhiteArrowDown, Divider, OverviewDiv, OverviewText, OverviewPar, OverviewMoreSpan, OverviewFirstClock, OverviewHoursText, OverviewHoursText2, OverviewHoursAnchor, OverviewDurationClock, OverviewDurationText, OverviewHoursText3, OverviewAddress, OverviewAddressText, OverviewAddressText2, OverviewMapSpan, OverviewImproveSpan, OverviewPencil, TravelersChoice,
CarouselPhotosButton, TravelersPhotoLogo, ContainerDiv, ContainerDivRatingAndReviews, ContainerDivHeaderText, Text3, Image0, CloseIcon } from './AppStyles.js';

import Modal from './modal.jsx';


 const ImgHeart = ({ success, entered }) => (
   <Heart onMouseEnter={() => entered()} onMouseLeave={() => entered()} src={success ? heartImg : redHeartImg} />
 );

 const ImgShare = ({ success, enteredShare, showModal }) => (
  <IconShare onMouseEnter={() => enteredShare()} onMouseLeave={() => enteredShare()} src={success ? shareIcon : shareIconBlack} onClick = {showModal}/>
);
const ShowGalleryPhotosModal = ({handleClose,galleryShow, images}) => {
  if(galleryShow === true) {
  return (
  <PhotosModal show={galleryShow} handleClose={handleClose} images={images}>
  <Image0 src={images[0].urlLink}></Image0>
  <Image0 src={images[1].urlLink}></Image0>
  <Image0 src={images[2].urlLink}></Image0>
  <Image0 src={images[3].urlLink}></Image0>
  <CloseIcon onClick = {() => handleClose()}/>
  </PhotosModal>
  );
} else {
  return null;
}
}


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviewCount: '',
      entered: true,
      enteredShare: true,
      show: false,
      galleryShow: false,
      gallery: ["https://myfecimages.s3-us-west-1.amazonaws.com/winchester+pictures/orbs-of-light-floating.jpg"],
      travelersHovered: false
    }
    this.enterImage = this.enterImage.bind(this);
    this.enterShareImage = this.enterShareImage.bind(this);
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.showPhotosModal = this.showPhotosModal.bind(this);
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
  enterImage() {
    if(this.state.entered === false) {
    this.setState({
      entered: true
    })
  } else {
    this.setState({
      entered: false
    })
  }
  }
  enterShareImage() {
    if(this.state.enteredShare === false) {
    this.setState({
      enteredShare: true
    })
  } else {
    this.setState({
      enteredShare: false
    })
  }
  }
  showModal() {
    if(this.state.show === false) {
    this.setState({ show: true });
    } else {
      this.setState({show: false});
    }
  };
  showPhotosModal() {
    if(this.state.galleryShow === false) {
      this.setState({galleryShow: true});
    } else {
      this.setState({galleryShow: false});
    }
  }


  hideModal() {
    this.setState({ galleryShow: false });
  };
  componentDidMount() {
    axios.get('/api/trips/1/reviews').then(
      (response) => {
        console.log('response', response);
        this.setState({
         reviewCount: response.data[0].reviewCount.toLocaleString('en')
        })
      }
    );
      axios.get('/api/trips/1/photos').then((response) => {
        this.setState({
          gallery: response.data
        })
      });
    }
  render() {
    const images = this.state.gallery;
    let i = 0;
    return (
      <div className="component">
        <ContainerDiv>
        <Title>Winchester Mystery House </Title>
        </ContainerDiv>
        <ContainerDivRatingAndReviews>
        <Rating style ={{rating: 3}} > </Rating>
        <Reviews>{this.state.reviewCount} Reviews </Reviews>
        </ContainerDivRatingAndReviews>
        <TextHeader>
        <SpanText> #12 </SpanText> <H4Text>of 139</H4Text><Text> things to do in San Jose</Text>
        <ImgHeart success = {this.state.entered} entered = {this.enterImage}/>
        <Text2>Historic Sites,  </Text2> <Text3>  Mysterious Sites</Text3>
        <ImgShare enteredShare = {this.enterShareImage} success= {this.state.enteredShare} showModal={this.showModal}/>
        <Modal show={this.state.show}>
          <p>Email</p>
          <p>Copy link</p>
        </Modal>
        </TextHeader>
        <Carousel/>
        <CarouselFooter>
        <CarouselFooterText> 2 Tours & Experiences</CarouselFooterText>
      <CarouselFooterTextTwo> Cultural tours, Walking Tours, Biking Tours & more </CarouselFooterTextTwo>
      <CarouselFooterImage src={walkingPNG}>
      </CarouselFooterImage>
      <CarouselFooterButton>
        See available tour options
      </CarouselFooterButton>
      <WhiteArrowDown src={whiteArrowDown}/>
      </CarouselFooter>
      <Divider/>
      <OverviewDiv>
      <OverviewText>
        Overview
      </OverviewText>
      <OverviewPar>
      The Winchester Mystery House is the beautiful but bizarre mansion of Sarah Winchester, heiress of the Winchester Repeating Arms fortune. Construction began in 1884, and didn't stop for 38 years. Haunted by the spirits of Winchester rifle victims,..
      </OverviewPar>
      <OverviewMoreSpan>
        more
      </OverviewMoreSpan>
      <OverviewFirstClock src={firstClock}/>
      <OverviewHoursText>
       Closed today
      </OverviewHoursText>
      <OverviewHoursText2>
        Hours Today: Closed
      </OverviewHoursText2>
      <OverviewHoursAnchor>
        See all hours
      </OverviewHoursAnchor>
      <OverviewDurationClock src={durationClock}/>
      <OverviewDurationText>
      Suggested Duration:
      </OverviewDurationText>
      <OverviewHoursText3>
        2-3 hours
      </OverviewHoursText3>
      <OverviewAddress src={mapMarker}/>
      <OverviewAddressText>
        Address:
      </OverviewAddressText>
      <OverviewAddressText2>
      525 S Winchester Blvd North San Jose, San Jose, CA 95128-2588
      </OverviewAddressText2>
      <OverviewMapSpan>
        Map
      </OverviewMapSpan>
      <OverviewPencil src={pencil}/>
      <OverviewImproveSpan>
       Improve this listing
      </OverviewImproveSpan>
      </OverviewDiv>
      <ShowGalleryPhotosModal galleryShow= {this.state.galleryShow} handleClose = {this.hideModal} images = {this.state.gallery}/>
      <ModalTravelers show = {this.state.travelersHovered}>
        <h1>What is Travelers' Choice?</h1>
      </ModalTravelers>
      <TravelersChoice src={"https://static.tacdn.com/img2/travelers_choice/2020/TC_L.svg"} onMouseEnter = {() => this.showTravelersModal()} onMouseLeave = {() => this.closeTravelersModal()}/>
      <CarouselPhotosButton onClick={() =>  this.showPhotosModal()}>
        All photos(4)
        </CarouselPhotosButton>
        <TravelersPhotoLogo src={Camera}/>
      </div>
    );
  }
}

export default App;

/*https://static.tacdn.com/img2/travelers_choice/2020/TC_L.svg*/