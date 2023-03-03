import React from "react";
import styled from "styled-components";

export const Img = styled.img`
  border: 6px solid #fff;
  width: 1200px;
`;

const CircleCiPipelineProd = () => {
  return (
    <>
      <h1>Workflow Prod Success</h1>
      <Img src="./img/circleci-prod-pipeline.png" />
    </>
  );
};

export default CircleCiPipelineProd;
