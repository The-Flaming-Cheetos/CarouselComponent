import React from 'react';
import {Button, Title, Rating, Reviews, TextHeader, SpanText, H4Text, Text, Heart, IconShare, Text2, CarouselFooter, CarouselFooterText, CarouselFooterTextTwo, CarouselFooterImage, CarouselFooterButton, WhiteArrowDown, Divider, OverviewDiv, OverviewText, OverviewPar, OverviewMoreSpan, OverviewFirstClock, OverviewHoursText, OverviewHoursText2, OverviewHoursAnchor, OverviewDurationClock, OverviewDurationText, OverviewHoursText3, OverviewAddress, OverviewAddressText, OverviewAddressText2, OverviewMapSpan, OverviewImproveSpan, OverviewPencil, TravelersChoice,
CarouselPhotosButton, TravelersPhotoLogo} from './AppStyles.js';

import styled from 'styled-components';

const ModalToDisplay = styled.div`position:absolute;
width:35%;
height:17%;
background-color: white;
border-radius: 10px;
border: 4px solid #00bfb6;
border-left: 10px solid transparent;
border-right: 10px solid #fff;
border-top: 10px solid transparent;
border-bottom: 10px solid transparent;
z-index: 999;
top:18%;
left:16%;
text-align: center;
display: block;
&:before {
  content: "";
  width: 10px;
  height: 10px;
  position: absolute;
  border-left: 10px solid transparent;
  border-right: 5px solid white;
  border-top: 10px solid white;
  border-bottom: 10px solid transparent;
  left: -20px;
  top: 10px;
}
`;

const ModalTravelers = ({show, children }) => {
  if(show) {
  return (
    <ModalToDisplay>
        {children}
    </ModalToDisplay>
  );
  } else {
    return null;
  }
}

export default ModalTravelers;