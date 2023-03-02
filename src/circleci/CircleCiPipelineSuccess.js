import React from "react";
import styled from "styled-components";

export const Img = styled.img`
  border: 6px solid #fff;
  width: 1200px;
`;

const CircleCiPipelineSuccess = () => {
    return (
      <>
        <h1>Pipelines</h1>
        <Img src="../img/circleci/circleci-success.png" />
      </>
    );
};

export default CircleCiPipelineSuccess;