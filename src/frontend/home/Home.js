import React, {useState} from "react";
import styled from "styled-components";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Dropzone from 'react-dropzone'
import {TwitterIcon, TwitterShareButton} from "react-share";
import mediaQuery from "styled-media-query";
import GoogleAdsense from "../../components/organisms/googleAdsense/GoogleAdsense";
import {Link} from "react-router-dom";
import {FormattedMessage} from "react-intl";
import Diagnosis from "../app/Diagnosis";

const Home = () => {
  return <div>
    <Header/>
    <Container>
      {/*<StartDiagnosis>*/}
      {/*  <Link to="/app">*/}
      {/*    <StartButton/>*/}
      {/*  </Link>*/}
      {/*</StartDiagnosis>*/}
      <Diagnosis/>
      <Description>
        <DescriptionHeader>
          <FormattedMessage id="home.description"/>
        </DescriptionHeader>
        <HowToUseParagraph>
          <FormattedMessage id="home.descriptionParagraph"/>
        </HowToUseParagraph>
        <DescriptionHeader>
          <FormattedMessage id="home.howToUse"/>
        </DescriptionHeader>
        <HowToUseHeader>
          1.<FormattedMessage id="home.takePhoto"/>
        </HowToUseHeader>
        <HowToUseParagraph>
          <FormattedMessage id="home.takePhotoDescription1"/><br/>
          <FormattedMessage id="home.takePhotoDescription2"/>
        </HowToUseParagraph>
        <HowToUseHeader>
          2.<FormattedMessage id="home.selectPhoto"/>
        </HowToUseHeader>
        <HowToUseParagraph>
          <FormattedMessage id="home.selectPhotoDescription"/>
        </HowToUseParagraph>
        <HowToUseHeader>
          3.<FormattedMessage id="home.submitPhoto"/>
        </HowToUseHeader>
        <HowToUseParagraph>
          <FormattedMessage id="home.submitPhotoDescription"/>
        </HowToUseParagraph>
      </Description>
    </Container>
    <Footer/>
  </div>
};

const mediaMobile = mediaQuery.lessThan("medium");

const Container = styled.div`
  min-height: 74vh;
  ${mediaMobile`min-height: 58vh;`}
`;

const StartDiagnosis = styled.div`
  background: url(muscle.png);
  background-repeat:no-repeat;
  background-size: 100% 100%;
  min-height: 50vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StartButton = styled.div`
  background: url(images/button/start.png);
  background-repeat:no-repeat;
  background-size: 100% 100%;
  width: 50vw;
  ${mediaMobile`width: 80vw`}
  height: 20vh;
  cursor:pointer;
`;

const Description = styled.div`
  margin: 5vh;
`;

const DescriptionHeader = styled.h2`

`;

const HowToUseHeader = styled.h3`

`;

const HowToUseParagraph = styled.div`

`

export default Home;
