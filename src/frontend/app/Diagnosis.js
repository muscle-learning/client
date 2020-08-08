import React, {useState} from "react";
import styled from "styled-components";
import Dropzone from 'react-dropzone'
import {TwitterIcon, TwitterShareButton, FacebookIcon, FacebookShareButton} from "react-share";
import mediaQuery from "styled-media-query";

const Diagnosis = () => {
  const [uploadFile, setUploadFile] = useState(void 0);
  const [preview, setPreview] = useState(void 0);
  const [response, setResponse] = useState(void 0);
  // !response && setResponse({result: {broken: 1}});
  const sendForm = async (uploadFile) => {
    const formData = new FormData();
    formData.append("uploadFile", uploadFile);
    const res = await fetch('https://api.muscle-learning.com/api/upload', {
      method: "POST",
      body: formData,
    });
    setResponse(await res.json())
  };
  const refresh = () => {
    setUploadFile(void 0);
    setPreview(void 0);
    setResponse(void 0);
  };
  const muscleRate = response && response.result && parseInt(parseFloat(response.result.broken) * 100);
  const twitterComment = window.navigator.language.startsWith("ja") ? `私の腹筋割れてる度は${muscleRate}%です。\n` : `I'll give you the number of my power level. It's ${muscleRate}%`;
  const twitterHashTag = "MuscleLearning";
  return <div>
    {response ?
      <MuscleBackground>
        <BackIcon className="fa fa-arrow-left" onClick={refresh}/>
        <ResultContainer>
          <ResultDiv>
            <MuscleRateHeader>Muscle Rate</MuscleRateHeader>
            <MuscleRateContent>{muscleRate}%</MuscleRateContent>
          </ResultDiv>
          <ShareButtons>
            <FacebookShareButton url="https://www.muscle-learning.com"
                                 quote={twitterComment + "\n"}
                                 hashtag={twitterHashTag}
                                 style={{
                                   marginRight: "2vw",
                                   background: "#3B5998",
                                   display: "flex",
                                   alignItems: "center",
                                   justifyContent: "center",
                                   borderRadius: "30px",
                                   padding: "0 4vw 0 2vw"
                                 }}>
              <FacebookIcon size="4rem" round/>
              <FacebookShareText>Share</FacebookShareText>
            </FacebookShareButton>
            <TwitterShareButton url="https://www.muscle-learning.com"
                                title={twitterComment}
                                hashtags={[twitterHashTag]}
                                style={{
                                  marginRight: "2vw",
                                  background: "#10ACF1",
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                  borderRadius: "30px",
                                  minHeight: "8vh",
                                  padding: "0 4vw 0 2vw"
                                }}
            ><TwitterIcon size="3rem" round/>
              <TwitterShareText>Tweet</TwitterShareText>
            </TwitterShareButton>
          </ShareButtons>
        </ResultContainer>
      </MuscleBackground> :
      <Container>
        <Dropzone onDrop={acceptedFiles => {
          setUploadFile(acceptedFiles[0]);
          setPreview(URL.createObjectURL(acceptedFiles[0]));
        }}
                  accept="image/*">
          {({getRootProps, getInputProps}) => (
            uploadFile ?
              <ImageSubmitForm  {...getRootProps()} onClick={() => sendForm(uploadFile)}>
                <input {...getInputProps()} id="uploadFile"/>
                <SelectedImage src={preview} alt="upload file"/>
                <SubmitButton className="ui purple button">submit</SubmitButton>
              </ImageSubmitForm>
              :
              <section>
                <DropArea {...getRootProps()}>
                  <input {...getInputProps()} id="uploadFile"/>
                  <SelectImage>Select Image</SelectImage>
                </DropArea>
              </section>
          )}
        </Dropzone>
      </Container>
    }
  </div>
};

const mediaMobile = mediaQuery.lessThan("medium");

const Container = styled.div`
  min-height: 50vh;
  ${mediaMobile`min-height: 58vh;`}
  display: flex;
  justify-content: center;
`;

const ShareButtons = styled.div`
  display: flex;
`;

const DropArea = styled.div`
  margin: 10vh 0 0 0;
  height: 50vh;
  ${mediaMobile`height: 30vh;`}
  width: 60vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #DBDBDB;
  cursor: pointer;
  border-radius: 30px;
`;

const SelectImage = styled.p`
  color: #636363;
  font-size: 3rem;
  text-align: center
`;

const SelectedImage = styled.img`
 width: 40vw;
 max-height: 50vh;
`;

const ImageSubmitForm = styled.div`
  margin: 10vh 0 0 0;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const SubmitButton = styled.button`
   width:40vw;
   margin: 5vh 0 5vh 0 !important;
   border-radius: 20px;
`;

const MuscleBackground = styled.div`
  min-height: 74vh;
  background: url(muscle.png)
`;

const ResultContainer = styled.div`
  min-height: 74vh;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const ResultDiv = styled.div`
  margin: 3vh 0 5vh 0;
  width: 40vw;
  ${mediaMobile`width: 80vw;`}
  height: 50vh;
  ${mediaMobile`height: 40vh;`}
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
`;

const MuscleRateHeader = styled.p`
  font-size: 3rem;
  text-align: center;
`;
const MuscleRateContent = styled.p`
  font-size: 4rem;
  text-align: center;
  font-family: Vermin Vibes 2 White;
  font-style: normal;
  font-weight: normal;
  color: #FF7A00;
`;

const TwitterShare = styled.button`
  background: #10ACF1 !important;
  display: flex !important;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
`;

const FacebookShare = styled.button`
  background: #3B5998 !important;
  display: flex !important;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
`;
const TwitterShareText = styled.p`
  color: white;
  font-size: 2rem;
`;

const FacebookShareText = styled.p`
  color: white;
  font-size: 2rem;
`;

const BackIcon = styled.i`
  font-size: 3rem;
  margin: 1vh 3vw;
  cursor: pointer;
`;
export default Diagnosis;
