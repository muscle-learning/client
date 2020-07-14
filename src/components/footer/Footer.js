import React from "react";
import styled from "styled-components";

const Footer = () => {
  return <Container>
    <CopyRight>Copyright ©CHANT-THROUGH Ltd. All Right Reserved.</CopyRight>
  </Container>
};

const Container = styled.div`
    background-color: #0A0A0A;
    width: 100vw;
    height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const CopyRight = styled.span`
  color: #7FFF1A;
`;

export default Footer;
