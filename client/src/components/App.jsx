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
import whiteArrowDown from '../../../images/whiteArrowDown.jpg';
import firstClock from '../../../images/firstClock.png';
import durationClock from '../../../images/durationClock.png';
import mapMarker from '../../../images/mapMarker.png';
import pencil from '../../../images/pencil.png';
import Camera from '../../../images/camera.png';
import ModalTravelers from './ModalTravelers.jsx';
import MoreModal from './MoreModal.jsx';
import HoursModal from './HoursModal.jsx';

import {Button, Title, Rating, Reviews, TextHeader, SpanText, H4Text, Text, Heart, IconShare, Text2, CarouselFooter, CarouselFooterText, CarouselFooterTextTwo, CarouselFooterImage, CarouselFooterButton, WhiteArrowDown, Divider, OverviewDiv, OverviewText, OverviewPar, OverviewMoreSpan, OverviewFirstClock, OverviewHoursText, OverviewHoursText2, OverviewHoursAnchor, OverviewDurationClock, OverviewDurationText, OverviewHoursText3, OverviewAddress, OverviewAddressText, OverviewAddressText2, OverviewMapSpan, OverviewImproveSpan, OverviewPencil, TravelersChoice,
CarouselPhotosButton, TravelersPhotoLogo, ContainerDiv, ContainerDivRatingAndReviews, ContainerDivHeaderText, Text3, Image0, CloseIcon, CloseIcon2, IconDivs, TextDivs, TextDiv1, TextDiv2, Container, textDiv1Text, Header, TextArea, EmailLogo, CarouselDiv, TravelersDiv, ToursAndExperiencesDiv, CarouselFooterDiv, CarouselTourOptions, PTag, OverviewTop, OverviewMiddle, OverviewMiddleHours, OverviewDurationHours, OverviewAddressDiv, OverviewImproveDiv, EmailTag, CopyTag } from './AppStyles.js';

import {Heart2, inlineIcons, InlineIcon, SVG} from './SvgStyles.js';

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
  <Image0 src={images[0]}></Image0>
  <Image0 src={images[1]}></Image0>
  <Image0 src={images[2]}></Image0>
  <Image0 src={images[3]}></Image0>
  <Image0 src={images[4]}></Image0>
  <Image0 src={images[5]}></Image0>
  <Image0 src={images[6]}></Image0>
  <Image0 src={images[7]}></Image0>
  <Image0 src={images[9]}></Image0>
  <Image0 src={images[10]}></Image0>
  <Image0 src={images[11]}></Image0>
  <CloseIcon2 onClick = {() => handleClose()}/>
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
      travelersHovered: false,
      moreModalShow: false,
      hoursModalShow: false
    }
    this.enterImage = this.enterImage.bind(this);
    this.enterShareImage = this.enterShareImage.bind(this);
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.showPhotosModal = this.showPhotosModal.bind(this);
    this.showMoreModal = this.showMoreModal.bind(this);
    this.closeMoreModal = this.closeMoreModal.bind(this);
    this.showHoursModal = this.showHoursModal.bind(this);
    this.closeHoursModal = this.closeHoursModal.bind(this);
  }
  showMoreModal() {
    this.setState({
      moreModalShow: true
    })
  }
  closeMoreModal() {
    this.setState({
      moreModalShow: false
    })
  }
  showHoursModal() {
    this.setState({
      hoursModalShow: true
    })
  }
  closeHoursModal() {
    this.setState({
      hoursModalShow: false
    })
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
    axios.get('/api/trips/CarouselComponent/1/reviews').then(
      (response) => {
        this.setState({
         reviewCount: response.data.total.toLocaleString('en')
        })
      }
    );
      axios.get('/api/trips/CarouselComponent/1/photos').then((response) => {
        console.log(response.data);
        this.setState({
          gallery: response.data
        })
      });
    }
  render() {
    const images = this.state.gallery;
    let i = 0;
    return (
        <Container>
          <Header>
          <ContainerDiv>
            <Title style={{position: "relative", left: "-1%", top: "-28%"}}>Winchester Mystery House </Title>
          </ContainerDiv>
          <ContainerDivRatingAndReviews>
            <Rating style={{ rating: 4}} > </Rating>
            <Reviews>{this.state.reviewCount} Reviews</Reviews>
          </ContainerDivRatingAndReviews>
          <TextHeader>
          <TextDivs>
          <TextDiv1>
          <PTag>#12 </PTag> <p style={{letterSpacing: "-.5px"}}> of 139</p> <Text>things to do in San Jose</Text>
          </TextDiv1>
          <TextDiv2>
          <Text style={{marginRight: '0px', marginLeft: '-.5px'}}>Historic Sites, </Text><Text>Mysterious Sites</Text>
          </TextDiv2>
          </TextDivs>
          <IconDivs>
          <InlineIcon>{inlineIcons.Heart}</InlineIcon>
          <ImgShare enteredShare={this.enterShareImage} success={this.state.enteredShare} showModal={this.showModal} />
            <Modal show={this.state.show}>
              <EmailTag>Email</EmailTag>
              <CopyTag>Copy link</CopyTag>
            </Modal>
          </IconDivs>
          </TextHeader>
          </Header>

          <CarouselDiv>
          <Carousel show={this.state.travelersHovered}>
          </Carousel>
          <ShowGalleryPhotosModal galleryShow={this.state.galleryShow} handleClose={this.hideModal} images={this.state.gallery} />
          <CarouselPhotosButton onClick={() => this.showPhotosModal()}>
            All photos(11)
        </CarouselPhotosButton>
        <TravelersPhotoLogo src={Camera} />
          </CarouselDiv>

          <CarouselFooterDiv>

          <ToursAndExperiencesDiv>
          <CarouselFooterText> 2 Tours & Experiences</CarouselFooterText>
          <CarouselFooterTextTwo> Cultural tours, Walking Tours, Biking Tours & more </CarouselFooterTextTwo>
          <CarouselFooterImage src={walkingPNG}>
          </CarouselFooterImage>
          </ToursAndExperiencesDiv>

          <CarouselTourOptions>
          <CarouselFooterButton>
              See available tour options
          </CarouselFooterButton>
            <WhiteArrowDown src={whiteArrowDown} />
            <Divider />
          </CarouselTourOptions>
          <OverviewDiv>
      <OverviewTop>
      <OverviewText>
              Overview
      </OverviewText>
            <OverviewPar>
              The Winchester Mystery House is the beautiful but bizarre mansion of Sarah Winchester, heiress of the Winchester Repeating Arms fortune. Construction began in 1884, and didn't stop for 38 years. Haunted by the spirits of Winchester rifle victims...
              <OverviewMoreSpan onClick={() => this.showMoreModal()}>
              more
      </OverviewMoreSpan>
            </OverviewPar>
            <MoreModal show={this.state.moreModalShow} handleClose={this.closeMoreModal}>
              <p style={{ fontSize: "15px", textAlign: "left" }}>The Winchester Mystery House is the beautiful but bizarre mansion of Sarah Winchester, heiress of the Winchester Repeating Arms fortune. Construction began in 1884, and didn't stop for 38 years. Haunted by the spirits of Winchester rifle victims, Mrs. Winchester built the Victorian mansion with many odd and mysterious features. The Winchester Mystery House is an architectural wonder and historic landmark in San Jose, CA. Self-guided garden tours are available.
      </p>
            </MoreModal>
            </OverviewTop>
            <OverviewMiddle>
            <OverviewMiddleHours>
            <OverviewFirstClock src={firstClock} />
            <OverviewHoursText>
              Closed today
            </OverviewHoursText>
            <OverviewHoursText2>
              Hours Today: Closed
            </OverviewHoursText2>
            <OverviewHoursAnchor onClick={this.showHoursModal}>
              See all hours
      </OverviewHoursAnchor>
            <HoursModal handleClose={this.closeHoursModal} show={this.state.hoursModalShow}>
              <h3 style={{
                fontSize: "15px", textAlign: "center", fontWeight: "700",
                fontFamily: "Arial", paddingBottom: "6px", borderBottom: "1px solid #e0e0e0"
              }}>Hours</h3>
              <p style={{ color: "#474747", display: "inline-block", fontSize: "14px", margin: "1px", textAlign: "left" }}>
                Wed - Sun
    </p>
              <p style={{ color: "#474747", display: "inline-block", fontSize: "14px" }}>
                10:00 AM - 4:00 PM
    </p>
            </HoursModal>
            </OverviewMiddleHours>
            <OverviewDurationHours>
            <OverviewDurationClock src={durationClock} />
            <OverviewDurationText>
              Suggested Duration:
            </OverviewDurationText>
            <OverviewHoursText3>
              2-3 hours
            </OverviewHoursText3>
            </OverviewDurationHours>
            <OverviewAddressDiv>
            <OverviewAddress src={mapMarker} />
            <OverviewAddressText>
              Address:
            </OverviewAddressText>
            <OverviewAddressText2>
              525 S Winchester Blvd North San Jose, San Jose, CA 95128-2588 <OverviewMapSpan>Map</OverviewMapSpan>
            </OverviewAddressText2>
            </OverviewAddressDiv>
            <OverviewImproveDiv>
            <OverviewPencil src={pencil} />
            <OverviewImproveSpan>
              Improve this listing
            </OverviewImproveSpan>
            </OverviewImproveDiv>


            </OverviewMiddle>
            </OverviewDiv>
          </CarouselFooterDiv>



          </Container>
    );
  }
}

export default App;

/*https://static.tacdn.com/img2/travelers_choice/2020/TC_L.svg*/
/*







*/
