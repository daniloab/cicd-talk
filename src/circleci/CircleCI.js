import React from "react";
import styled from "styled-components";

export const Img = styled.img`
  border: 6px solid #fff;
  width: 1200px;
`;

const CircleCI = () => {
  return (
    <>
      <h1>Woovi CI/CD - CircleCI</h1>
      <Img src="../img/circleci/circleci-dash.png" />
    </>
  );
};

export default CircleCI;
