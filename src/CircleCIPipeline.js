import React from "react";
import styled from "styled-components";

export const Img = styled.img`
  border: 6px solid #fff;
`;

const CircleCiPipeline = () => {
  return (
    <>
      <h1>Pipelines</h1>
      <Img src="./img/circleci-pipelines.png" />
    </>
  );
};

export default CircleCiPipeline;
