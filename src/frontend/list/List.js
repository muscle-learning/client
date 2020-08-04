import React, {useEffect, useState} from "react";
import styled from "styled-components";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import mediaQuery from "styled-media-query";
import aws from "aws-sdk";


aws.config.update({
  region: 'ap-northeast-1',
  accessKeyId: process.env.REACT_APP_MUSCLE_LEARNING_S3_ACCESS_KEY_ID,
  secretAccessKey: process.env.REACT_APP_MUSCLE_LEARNING_S3_SECRET_ACCESS_KEY
});

const s3 = new aws.S3({apiVersion: '2006-03-01'});
const bucketParams = {
  Bucket: 'muscle-uploads',
};


const List = () => {
  const [imageURLs, setImageURLs] = useState(void 0);
  s3.listObjectsV2(bucketParams, function (err, data) {
    if (err) {
      console.error("Error", err);
    } else {
      console.log("Success", data);
      setImageURLs(data.Contents.map(item => {
        const signedURL = s3.getSignedUrl('getObject', {...bucketParams, Key: item.Key})
        return signedURL;
      }))
    }
  });
  return <div>
    <Header/>
    <Container>
      {
        imageURLs && imageURLs.map((url, i) => (<Image key={i} src={url} className="ui image"/>))
      }
    </Container>
    <Footer/>
  </div>
};

const mediaMobile = mediaQuery.lessThan("medium");

const Container = styled.div`
  display:flex;
  min-height: 74vh;
  flex-wrap:wrap;
  ${mediaMobile`min-height: 58vh;`}
`;
const Image = styled.img`
  max-width: 30vw;
  max-height: 30vh;
`;

export default List;
