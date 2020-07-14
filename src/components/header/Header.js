import React from "react";
import styled from "styled-components";

const Header = () => {
  return <Container>
    <Title>Muscle Learning</Title>
  </Container>
};

const Container = styled.div`
    background-color: #0A0A0A;
    width: 100vw;
    height: 16vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Title = styled.div`
  font-family: Vermin Vibes 2 White;
  font-style: normal;
  font-weight: normal;
  font-size: 8rem;
  line-height: 15vh;
  text-align: center;
  
  color: #696969;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: #7FFF1A;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export default Header
