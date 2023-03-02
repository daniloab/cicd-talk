import React from "react";
import styled from "styled-components";

const Background = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: #94bde5;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Img = styled.img``;

const Name = styled.h3`
  color: #333;
`;

const Cover = () => {
  return (
    <Background>
      <Container>
        <h1>CI/CD - Practical Benefits</h1>
        <Img src="./img/cover.png" />
        <Name>Danilo Assis</Name>
      </Container>
    </Background>
  );
};

export default Cover;
